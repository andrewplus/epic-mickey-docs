// Sloppy cmdline.txt file creation for Epic Mickey. Can create the file and a Riivolution ZIP file for it. It's pretty hardwired to the website, but it's not that complex. 
// Created by andrew.plus using the following:
// jQuery: https://jquery.com/
// jszip: https://github.com/Stuk/jszip
// FileSaver: https://github.com/eligrey/FileSaver.js

// http://andrew.plus

$( document ).ready(function() {
	function makeVariables() {
		level = $( "select" ).val();
		abilities = $( ".abilities").prop('checked');
		strap = $( ".strap" ).prop('checked');

		cmdline = level + " -csg -binary -Set UseHostComm=false -Set UseHostCommScreenshots=false -Set PlayerDisplayLocation=false -wiiprofilermem 0 -nexusip 0.0.0.0 -Set PauseMenuEnabled=true -Set StartInMainMenu=false -Set WiiWristStrapShow=" + strap + " -Set DisableAudio=false -Set RenderUseBatching=true -Set DisplayBuildVersionHUD=false -Set DisplayDebugTextHUD=false -Set ColorMipmapLevels=false -Set EnableRenderProfiling=false -Set UseDebugLineBatcher=false -Set DisableIGC=false -Set HUDDisplaySafeFrame=false -Set bShowHUD=true -Set PlayerEnableAllAbilities=" + abilities + " -Set SphericalHarmonicLightingDebug=false -Set WiiRemoteSleepTime=5 -Set DisplayDebugParticleText=false -Set UseSmallerDebugText=false -Set OutOfMemoryBoxOfDoom=false -Set DisplayAIMemoryInfo=false -Set MaximizeJigsawAIMemory=false -Set ApprenticeSkip=false -Set ShowDevLevelLoad=false -Set AudioAllowSpillover=false -Set GodModeOnPlayer=false";
	}

	$( "#showcmdline" ).click(function() { 
		makeVariables();

		$( ".output" ).html( cmdline );
	});

	$( "#file" ).click(function() { 

		makeVariables();

		var zip = new JSZip();

		zip.file("empatch/cmdline.txt", cmdline);
		zip.file("apps/riivolution/levelpatch.xml", "<wiidisc version=\"1\"> <id game=\"SEM\" /> <options> <section name=\"Custom Level Patch\"> <option name=\"Level Patch\" id=\"levelpatch\" default=\"1\"> <choice name=\"Enabled\"><patch id=\"levelpatch\"/></choice> </option> </section> </options> <!-- MISCELLANEOUS PATCHES --> <patch id=\"levelpatch\"> <folder external=\"/empatch\" disc=\"/\" /> </patch> </wiidisc>");

		var promise = null;
		if (JSZip.support.uint8array) {
			promise = zip.generateAsync({type : "uint8array"});
		} else {
			promise = zip.generateAsync({type : "string"});
		}

		zip.generateAsync({type:"blob"}).then(function (blob) {
			saveAs(blob, "emlevelpatch.zip");
		}, function (err) {
			jQuery("#blob").text(err);
		});
	});
});