import os, pathlib, subprocess, time, datetime
from bs4 import BeautifulSoup

# make sure we're working in the script's directory
working_dir = pathlib.Path(__file__).parent.absolute()
os.chdir(working_dir)

# log files setup
log = ["=====================================\nLog for " + str(datetime.date.today())]
skipped_files = ["=====================================\nSkipped files log for " + str(datetime.date.today())]
last_log = log[0]
last_skipped_file = skipped_files[0]

# functions
# initiate folders if they don't already exist
def create_folders():
    folders = ["__Converted", "__Converted\\Named", "__Converted\\Unnamed"]
    for folder in folders:
        try:
            os.mkdir(folder)
        except(FileExistsError):
            pass
            
# logging functions
def current_task(fn_in, fn_out, tool):
    print("-----------------------------------------\nProcessing " + fn_in + " -> " + fn_out + "\nUsing " + tool)
    log.append(fn_in + " -> " + fn_out + " --using " + tool)

def file_skipped(fn):
    print("##################################\n########## FILE SKIPPED ##########\n##################################")
    log.append(fn + " was skipped.")
    skipped_files.append(fn)
    
def write_to_logs(first):
    global log
    global skipped_files
    global last_log
    global last_skipped_file
    if log[-1] != last_log or first:
        last_log = log[-1]
        with open("__Converted\\log.txt", "a+") as f:
            f.write(log[-1] + "\n")
    if skipped_files[-1] != last_skipped_file or first:
        last_skipped_file = skipped_files[-1]
        with open("__Converted\\skipped_files.txt", "a+") as f:
            f.write(skipped_files[-1] + "\n")

# average
def average(lst): 
    return sum(lst) / len(lst) 
    
# list all files in directory
def list_files(dir):
    r = []
    for root, dirs, files in os.walk(dir):
        for name in files:
            if "\\__Converted\\" not in root and "\\__Tools\\" not in root and ".txt" not in name and ".py" not in name:
                if "wav" in name or "wem" in name or "ogg" in name:
                    r.append(os.path.join(root, name))
    return r

# make dictionary list of names and IDs from the xml file
def get_xml_list():
    print("Preparing data...")
    
    output = []
    files = soundbanks_xml.select("File")
    for file in files:
        xml_id = file.get("id")
        try:
            xml_prettyname = os.path.basename(file.select("ShortName")[0].string)
            xml_prettyname = os.path.splitext(xml_prettyname)[0]
            output.append({"id":xml_id,"prettyname":xml_prettyname})
        except Exception:
            pass
    return output

# search dictionary list for ID and return the prettyname
# this spits out an error if the ID can't be found, but that's ok because it's wrapped in a try-except in the main method
def prettyname_from_id(id, list):
    result = next(item for item in list if item["id"] == id)
    return result.get("prettyname")

# loop through streamed files, rename, and convert
def do_loop():
    file_list = list_files(working_dir)
    xml_file_list = get_xml_list()
    duration_list = []
    for index, file in enumerate(file_list):
        # time benchmarking
        start = time.time()
        # file variables
        file_filename = os.path.basename(file)
        file_id = os.path.splitext(file_filename)[0]
        file_extension = os.path.splitext(file_filename)[1]
        try: #named files
            xml_prettyname = prettyname_from_id(file_id, xml_file_list) # get new name
            
            if file_extension == ".wav" or file_extension == ".wem":
                current_task(file_filename, xml_prettyname+".wav", "vgmstream")
                subprocess.run(["__Tools\\vgmstream\\test.exe", "-i", "-o", "__Converted\\Named\\"+xml_prettyname+".wav", file_filename], stderr=subprocess.DEVNULL, stdout=subprocess.DEVNULL)
            elif file_extension == ".ogg":
                current_task(file_filename, xml_prettyname+".ogg", "ww2ogg")
                subprocess.run(["__Tools\\ww2ogg\\ww2ogg.exe", file_filename, "-o", "__Converted\\Named\\"+xml_prettyname+".ogg", "--pcb", "__Tools\\ww2ogg\\packed_codebooks.bin"], stderr=subprocess.DEVNULL, stdout=subprocess.DEVNULL)
            else:
                file_skipped(file_filename)
        except Exception: #unnamed files
            if file_extension == ".wav" or file_extension == ".wem":
                current_task(file_filename, file_filename+".wav (no name found)", "vgmstream")
                subprocess.run(["__Tools\\vgmstream\\test.exe", "-i", "-o", "__Converted\\Unnamed\\"+file_filename, file_filename], stderr=subprocess.DEVNULL, stdout=subprocess.DEVNULL)
            elif file_extension == ".ogg":
                current_task(file_filename, file_filename+".ogg (no name found)", "ww2ogg")
                subprocess.run(["__Tools\\ww2ogg\\ww2ogg.exe", file_filename, "-o", "__Converted\\Unnamed\\"+file_filename, "--pcb", "__Tools\\ww2ogg\\packed_codebooks.bin"], stderr=subprocess.DEVNULL, stdout=subprocess.DEVNULL)
            else:
                file_skipped(file_filename)
        # report time and progress data
        stop = time.time()
        duration = stop - start
        duration_list.append(duration)
        average_duration = round(average(duration_list),2)
        print("Completed in: " + str(round(duration, 2)) + " seconds")
        remaining_time = len(file_list) * average_duration - index * average_duration
        print("Estimated remaining time: " + str(datetime.timedelta(seconds=remaining_time)).split(".")[0])
        print("File progress: " + str(index+1) + " of " + str(len(file_list)) + " files")
        # save to log
        write_to_logs(False)

# program commands (currently just start)
def command_input():
    command = input("> ")
    if command.lower() == "start":
        run_program()
    else:
        command_input()
        
# main file processing
def run_program():
    write_to_logs(True)
    do_loop()

# start
create_folders()
try:
    soundbanks_xml = BeautifulSoup(open("SoundbanksInfo.xml", "r"), "lxml")
    print("== Renaming and Conversion Tool for Epic Mickey ==")
    print("Please read _README.html before starting.")
    print("Type 'start' to start the program.")
    command_input()
except BaseException as e: #loop error handling
    print("An error has occured. Check log.txt.")
    with open("__Converted\\log.txt", "a+") as f:
        f.write("!!!!!! ERROR: " + str(e) + "\n")
