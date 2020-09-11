const defaultPreset = [
    {
        "key": "BOOT LEVEL",
        "value": "Levels/Main_Menu.level"
    },
    {
        "key": "PlayerEnableAllAbilities",
        "value": "false"
    },
    {
        "key": "WiiRemoteSleepTime",
        "value": "5"
    }
];// NodeList.forEach
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
 }

// ChildNode.remove()
(function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty('remove')) {
        return;
      }
      Object.defineProperty(item, 'remove', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          if (this.parentNode === null) {
            return;
          }
          this.parentNode.removeChild(this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

// Array.includes()
Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(r,e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if(0===n)return!1;var i,o,a=0|e,u=Math.max(0<=a?a:n-Math.abs(a),0);for(;u<n;){if((i=t[u])===(o=r)||"number"==typeof i&&"number"==typeof o&&isNaN(i)&&isNaN(o))return!0;u++}return!1}});

// String.includes()
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';

    if (search instanceof RegExp) {
      throw TypeError('first argument must not be a RegExp');
    } 
    if (start === undefined) { start = 0; }
    return this.indexOf(search, start) !== -1;
  };
}
const dictionaryDatabase = [
    {
        "key": "BOOT LEVEL",
        "type": "level"
    },
    {
        "key": "OutOfMemoryBoxOfDoom",
        "type": "boolean"
    },
    {
        "key": "PlayerHealth",
        "type": "number"
    },
    {
        "key": "TotalPinCount",
        "type": "number"
    },
    {
        "key": "GoldPinCount",
        "type": "number"
    },
    {
        "key": "SilverPinCount",
        "type": "number"
    },
    {
        "key": "BronzePinCount",
        "type": "number"
    },
    {
        "key": "TicketRTPCIncrementValue",
        "type": "number"
    },
    {
        "key": "TicketRTPCResetCount",
        "type": "number"
    },
    {
        "key": "TicketRTPCResetTime",
        "type": "number"
    },
    {
        "key": "WiiWristStrapShow",
        "type": "boolean"
    },
    {
        "key": "WiiRemoteSleepTime",
        "type": "number"
    },
    {
        "key": "EnableSystemMessages",
        "type": "boolean"
    },
    {
        "key": "LockGame",
        "type": "boolean"
    },
    {
        "key": "Language",
        "type": "language"
    },
    {
        "key": "SupportedLanguages",
        "type": "language"
    },
    {
        "key": "TranslateKeys",
        "type": "boolean"
    },
    {
        "key": "LocalizeShowBrackets",
        "type": "boolean"
    },
    {
        "key": "StartInMainMenu",
        "type": "boolean"
    },
    {
        "key": "AIRenderDebugGraph",
        "type": "boolean"
    },
    {
        "key": "AIRenderDebugObstacles",
        "type": "boolean"
    },
    {
        "key": "AIRenderDebugPath",
        "type": "boolean"
    },
    {
        "key": "AIRenderDebugGapAvoidance",
        "type": "boolean"
    },
    {
        "key": "AIRenderDebugTether",
        "type": "boolean"
    },
    {
        "key": "AIRenderDebugRadius",
        "type": "number"
    },
    {
        "key": "WeaponDebug",
        "type": "boolean"
    },
    {
        "key": "AutomaticAIDebug",
        "type": "boolean"
    },
    {
        "key": "ConfidenceRequirementForAttackingFriendlyAI",
        "type": "number"
    },
    {
        "key": "SameTargetRebark",
        "type": "number"
    },
    {
        "key": "UseDebugLineBatcher",
        "type": "boolean"
    },
    {
        "key": "AIHardLandVelocity",
        "type": "number"
    },
    {
        "key": "GremlinRadius",
        "type": "number"
    },
    {
        "key": "SenseDebug",
        "type": "boolean"
    },
    {
        "key": "AudioPlaySFX",
        "type": "boolean"
    },
    {
        "key": "AudioSFXVolume",
        "type": "number"
    },
    {
        "key": "AudioMusicVolume",
        "type": "number"
    },
    {
        "key": "SpattersChaseWhileExploding",
        "type": "boolean"
    },
    {
        "key": "SpatterTiredChaseTime",
        "type": "number"
    },
    {
        "key": "SpatterTiredDuration",
        "type": "number"
    },
    {
        "key": "Spatter_TimeBeforeExplodeCausesCSG",
        "type": "number"
    },
    {
        "key": "Spatter_IdleTriggerTimeMin",
        "type": "number"
    },
    {
        "key": "Spatter_IdleTriggerTimeMax",
        "type": "number"
    },
    {
        "key": "SpatterStunnedDuration",
        "type": "number"
    },
    {
        "key": "SpatterFriendlyFollowTolerance",
        "type": "number"
    },
    {
        "key": "Spatter_StompStunDuration",
        "type": "number"
    },
    {
        "key": "Spatter_KnockbackStimToStomp",
        "type": "number"
    },
    {
        "key": "SpatterMelee_AttackRadius",
        "type": "number"
    },
    {
        "key": "SpatterMelee_ChaseSpeed",
        "type": "number"
    },
    {
        "key": "SpatterMelee_DefaultSpeed",
        "type": "number"
    },
    {
        "key": "SpatterJumper_WanderSpeed",
        "type": "number"
    },
    {
        "key": "SpatterJumper_ChaseSpeed",
        "type": "number"
    },
    {
        "key": "SpatterJumper_DefaultSpeed",
        "type": "number"
    },
    {
        "key": "SpatterJumper_AlwaysExplodeOnDamage",
        "type": "boolean"
    },
    {
        "key": "SpatterExplodeDangerDistance",
        "type": "number"
    },
    {
        "key": "SpatterFleeExplosionDistance",
        "type": "number"
    },
    {
        "key": "DropwingDelayAfterDivebomb",
        "type": "number"
    },
    {
        "key": "DropwingDivebombSpeed",
        "type": "number"
    },
    {
        "key": "DropwingMovementSpeed",
        "type": "number"
    },
    {
        "key": "DropwingPursueSpeed",
        "type": "number"
    },
    {
        "key": "DropwingMinBounceSpeed",
        "type": "number"
    },
    {
        "key": "GoblobMovementSpeed",
        "type": "number"
    },
    {
        "key": "GoblobPursueSpeed",
        "type": "number"
    },
    {
        "key": "GoblobMinBounceSpeed",
        "type": "number"
    },
    {
        "key": "BlindDuration",
        "type": "number"
    },
    {
        "key": "AmmoExtractionTime",
        "type": "number"
    },
    {
        "key": "AIAvoidMickeyRadius",
        "type": "number"
    },
    {
        "key": "AIAvoidMickeyLookaheadTime",
        "type": "number"
    },
    {
        "key": "ScreenshotSuperSamplingDimension",
        "type": "number"
    },
    {
        "key": "ScreenshotToggleHud",
        "type": "boolean"
    },
    {
        "key": "UseHostCommScreenshots",
        "type": "boolean"
    },
    {
        "key": "ColorMipmapLevels",
        "type": "boolean"
    },
    {
        "key": "RenderUseBatching",
        "type": "boolean"
    },
    {
        "key": "RenderSketchOpacityFalloff",
        "type": "number"
    },
    {
        "key": "RenderSilhouettes",
        "type": "number"
    },
    {
        "key": "RenderBackgroundColorR",
        "type": "number"
    },
    {
        "key": "RenderBackgroundColorG",
        "type": "number"
    },
    {
        "key": "RenderBackgroundColorB",
        "type": "number"
    },
    {
        "key": "RenderBloomTweak",
        "type": "boolean"
    },
    {
        "key": "RenderBloomThresholdR",
        "type": "number"
    },
    {
        "key": "RenderBloomThresholdG",
        "type": "number"
    },
    {
        "key": "RenderBloomThresholdB",
        "type": "number"
    },
    {
        "key": "RenderBloomOffsetScale",
        "type": "number"
    },
    {
        "key": "RenderBloomScaleR",
        "type": "number"
    },
    {
        "key": "RenderBloomScaleG",
        "type": "number"
    },
    {
        "key": "RenderBloomScaleB",
        "type": "number"
    },
    {
        "key": "RenderBloomWeightnumber",
        "type": "number"
    },
    {
        "key": "RenderMonochromeDR",
        "type": "number"
    },
    {
        "key": "RenderMonochromeDG",
        "type": "number"
    },
    {
        "key": "RenderMonochromeDB",
        "type": "number"
    },
    {
        "key": "RenderMonochromeLR",
        "type": "number"
    },
    {
        "key": "RenderMonochromeLG",
        "type": "number"
    },
    {
        "key": "RenderMonochromeLB",
        "type": "number"
    },
    {
        "key": "RenderEnableVFilter",
        "type": "boolean"
    },
    {
        "key": "RenderVFilterWeightEnable",
        "type": "boolean"
    },
    {
        "key": "RenderVFilterWeightTop",
        "type": "number;"
    },
    {
        "key": "RenderVFilterWeightMiddle",
        "type": "number;"
    },
    {
        "key": "RenderVFilterWeightBottom",
        "type": "number;"
    },
    {
        "key": "WaitForVSync",
        "type": "boolean"
    },
    {
        "key": "RenderGpHangDebugEnable",
        "type": "number"
    },
    {
        "key": "RenderLodBias",
        "type": "number"
    },
    {
        "key": "RenderLodBiasClamp",
        "type": "boolean"
    },
    {
        "key": "RenderAnsioFilering",
        "type": "number"
    },
    {
        "key": "RenderFifoSize",
        "type": "number"
    },
    {
        "key": "GammaSettingComposite",
        "type": "number"
    },
    {
        "key": "GammaSettingComponent",
        "type": "number"
    },
    {
        "key": "CameraNearClipPlane",
        "type": "number"
    },
    {
        "key": "CameraFarClipPlane",
        "type": "number"
    },
    {
        "key": "CameraFieldOfView",
        "type": "number"
    },
    {
        "key": "FreeCamera_2DMode_Active",
        "type": "boolean"
    },
    {
        "key": "FreeCamera_LedgeCheck_Active",
        "type": "boolean"
    },
    {
        "key": "CameraUpsidedown",
        "type": "boolean"
    },
    {
        "key": "r_SplatSize",
        "type": "number"
    },
    {
        "key": "scriptDisplayOriginX",
        "type": "number"
    },
    {
        "key": "scriptDisplayOriginY",
        "type": "number"
    },
    {
        "key": "scriptDisplayTime",
        "type": "number"
    },
    {
        "key": "scriptLogAllCalls",
        "type": "boolean"
    },
    {
        "key": "BarkDisplayTime",
        "type": "number"
    },
    {
        "key": "DelayBetweenBarks",
        "type": "number"
    },
    {
        "key": "DelayUntilInputAllowed",
        "type": "number"
    },
    {
        "key": "BarksStack",
        "type": "boolean"
    },
    {
        "key": "DelayToFadeObjectives",
        "type": "number"
    },
    {
        "key": "Base_CameraFlySpeed",
        "type": "number"
    },
    {
        "key": "Base_CameraFlyInverted",
        "type": "boolean"
    },
    {
        "key": "Base_CameraFlyHeadingScale",
        "type": "number"
    },
    {
        "key": "Base_CameraFlyPitchScale",
        "type": "number"
    },
    {
        "key": "Base_CameraFlySmoothing",
        "type": "number"
    },
    {
        "key": "CameraThirdPersonHeadingScale",
        "type": "number"
    },
    {
        "key": "CameraThirdPersonPitchScale",
        "type": "number"
    },
    {
        "key": "CameraPushCheckDegrees",
        "type": "number"
    },
    {
        "key": "CameraPushStrength",
        "type": "number"
    },
    {
        "key": "CameraPushesAveraged",
        "type": "number"
    },
    {
        "key": "CameraMoveInWaitFrames",
        "type": "number"
    },
    {
        "key": "Cursor_Detection_Range",
        "type": "number"
    },
    {
        "key": "Cursor_Detection_AimBehind_MinDistance",
        "type": "number"
    },
    {
        "key": "UsenumberDCursor",
        "type": "boolean"
    },
    {
        "key": "ModelnumberDCursor",
        "type": "boolean"
    },
    {
        "key": "ProjectednumberDCursor",
        "type": "boolean"
    },
    {
        "key": "DebugnumberDCursor",
        "type": "boolean"
    },
    {
        "key": "SwitchTargeting",
        "type": "boolean"
    },
    {
        "key": "AimDistanceFromCamera",
        "type": "number"
    },
    {
        "key": "ZoomOutWhenEnemiesAreWithin",
        "type": "number"
    },
    {
        "key": "ZoomOutSecondsAfterJumping",
        "type": "number"
    },
    {
        "key": "RollingWallBounce",
        "type": "boolean"
    },
    {
        "key": "RollingStimDelay",
        "type": "number"
    },
    {
        "key": "PlayerDisplayPlayStyle",
        "type": "boolean"
    },
    {
        "key": "PlayerDisplayLocation",
        "type": "boolean"
    },
    {
        "key": "CameraDisplayLocation",
        "type": "boolean"
    },
    {
        "key": "PlayerLeftHanded",
        "type": "boolean"
    },
    {
        "key": "PlayerRumble",
        "type": "boolean"
    },
    {
        "key": "PlayerStompRadius",
        "type": "number"
    },
    {
        "key": "PlayerStompLaunchSpeed",
        "type": "number"
    },
    {
        "key": "PaintThinnerFX",
        "type": "boolean"
    },
    {
        "key": "PlayerLobVertical",
        "type": "number"
    },
    {
        "key": "PlayerAutoTargetActive",
        "type": "boolean"
    },
    {
        "key": "PlayerDisplayAutoTarget",
        "type": "boolean"
    },
    {
        "key": "PlayerMouseSteering",
        "type": "boolean"
    },
    {
        "key": "PlayerMousePanning",
        "type": "boolean"
    },
    {
        "key": "PlayerMouseTargeting",
        "type": "boolean"
    },
    {
        "key": "PlayerMouseAutoTarget",
        "type": "boolean"
    },
    {
        "key": "PlayerRollAutoTarget",
        "type": "boolean"
    },
    {
        "key": "PlayerMouseAutoTarget_ScreenRange",
        "type": "number"
    },
    {
        "key": "StickyAutoTargetTime",
        "type": "number"
    },
    {
        "key": "Automatic_AutoAimDistancePriority",
        "type": "number"
    },
    {
        "key": "Automatic_AutoAimAnglePriority",
        "type": "number"
    },
    {
        "key": "Automatic_AutoAimMaxAngle",
        "type": "number"
    },
    {
        "key": "ThrowForwardWhenCursorIsOffscreen",
        "type": "boolean"
    },
    {
        "key": "Shake_MinSamplesBetween",
        "type": "number"
    },
    {
        "key": "PaintCursorFile",
        "type": "string"
    },
    {
        "key": "PaintCursorHotSpotOffset_X",
        "type": "number"
    },
    {
        "key": "PaintCursorHotSpotOffset_Y",
        "type": "number"
    },
    {
        "key": "ThinnerShockwave_PowerupTime",
        "type": "number"
    },
    {
        "key": "ThinnerShockwave_ParticleHeight",
        "type": "number"
    },
    {
        "key": "ThinnerShockwave_ParticleScale",
        "type": "number"
    },
    {
        "key": "ThinnerShockwave_Scale",
        "type": "number"
    },
    {
        "key": "ThinnerShockwave_StimAmount",
        "type": "number"
    },
    {
        "key": "Slide_Speed",
        "type": "number"
    },
    {
        "key": "Slide_TurnRate",
        "type": "number"
    },
    {
        "key": "PowerupDropDistanceScale",
        "type": "number"
    },
    {
        "key": "SketchDefaultMax",
        "type": "number"
    },
    {
        "key": "SketchDropVertical",
        "type": "number"
    },
    {
        "key": "SketchInSketches",
        "type": "boolean"
    },
    {
        "key": "SpecialJump_FreeOnEmpty",
        "type": "boolean"
    },
    {
        "key": "SpecialJump_ThrowThinnerDown",
        "type": "boolean"
    },
    {
        "key": "Thinner_ThinnerJump_SizeMin",
        "type": "number"
    },
    {
        "key": "Thinner_ThinnerJump_EffectMin",
        "type": "number"
    },
    {
        "key": "Thinner_ThinnerJump_EffectMax",
        "type": "number"
    },
    {
        "key": "RadialMenuActivateTime",
        "type": "number"
    },
    {
        "key": "RadialMenuControllerCutoff",
        "type": "number"
    },
    {
        "key": "RadialMenuButtonCycle",
        "type": "boolean"
    },
    {
        "key": "PauseMenuEnabled",
        "type": "boolean"
    },
    {
        "key": "MainMenuTimeout",
        "type": "number"
    },
    {
        "key": "ShowDevLevelLoad",
        "type": "boolean"
    },
    {
        "key": "DemoMode",
        "type": "boolean"
    },
    {
        "key": "StartScreenTimeout",
        "type": "number"
    },
    {
        "key": "StartScreenMovie",
        "type": "Movies/MainMenu_Binkbik"
    },
    {
        "key": "TimerMidSFX",
        "type": "number"
    },
    {
        "key": "TimerLateSFX",
        "type": "number"
    },
    {
        "key": "PlayerInfiniteAmmo",
        "type": "boolean"
    },
    {
        "key": "PlayerEnableAllAbilities",
        "type": "boolean"
    },
    {
        "key": "PlayerAmmoOneType",
        "type": "boolean"
    },
    {
        "key": "PlayerStairHeight",
        "type": "number"
    },
    {
        "key": "PlayerStairSlope",
        "type": "number"
    },
    {
        "key": "CharacterControllerStairFix",
        "type": "number"
    },
    {
        "key": "CharacterControllerAnimationOnStairsFix",
        "type": "number"
    },
    {
        "key": "CharacterControllerJumpFix",
        "type": "number"
    },
    {
        "key": "CharacterControllerImmediateVelocityJumpMultiplier",
        "type": "number"
    },
    {
        "key": "CharacterControllerImmediateVelocityLandMultiplier",
        "type": "number"
    },
    {
        "key": "CharacterMaintainVelocity",
        "type": "number"
    },
    {
        "key": "CharacterListener",
        "type": "boolean"
    },
    {
        "key": "CharacterCustomCollisionResponse",
        "type": "boolean"
    },
    {
        "key": "CharacterGravityWhenAboveStairs",
        "type": "number"
    },
    {
        "key": "NoDrawCharacters",
        "type": "number"
    },
    {
        "key": "CharacterControllerJumpForgive",
        "type": "boolean"
    },
    {
        "key": "CharacterControllerForgiveTime",
        "type": "number"
    },
    {
        "key": "CharacterControllerJumpFromMantle",
        "type": "boolean"
    },
    {
        "key": "CharacterKnockbackLaunchUpSpeed",
        "type": "number"
    },
    {
        "key": "GestureShakeMagnitudeCutoff",
        "type": "number"
    },
    {
        "key": "GestureShakesToTrigger",
        "type": "number"
    },
    {
        "key": "GestureShakeLockoutTime",
        "type": "number"
    },
    {
        "key": "PlayerUseMaxAngle",
        "type": "number"
    },
    {
        "key": "PlayerUseDistance",
        "type": "number"
    },
    {
        "key": "LockedFrameRate",
        "type": "number"
    },
    {
        "key": "LockedFrameRatePAL",
        "type": "number"
    },
    {
        "key": "PerformMemoryValidationInDebug",
        "type": "boolean"
    },
    {
        "key": "PerformMemoryValidationInRelease",
        "type": "boolean"
    },
    {
        "key": "SetAlwaysAllowAlternateMemArena",
        "type": "boolean"
    },
    {
        "key": "GXVerifyLevel",
        "type": "number"
    },
    {
        "key": "PlayerEntityRadius",
        "type": "number"
    },
    {
        "key": "PlayerEntityHeight",
        "type": "number"
    },
    {
        "key": "DisableAudio",
        "type": "boolean"
    },
    {
        "key": "PrintNonFatalErrorsInShipping",
        "type": "boolean"
    },
    {
        "key": "SquelchRepeatedErrors",
        "type": "boolean"
    },
    {
        "key": "LimitFrequentErrors",
        "type": "boolean"
    },
    {
        "key": "FrequentErrorLimit",
        "type": "number"
    },
    {
        "key": "TimeToAutoKillOnFall",
        "type": "number"
    },
    {
        "key": "TimeToAutoKillAIOnFall",
        "type": "number"
    },
    {
        "key": "PaintRadius",
        "type": "number"
    },
    {
        "key": "PaintShape",
        "type": "number"
    },
    {
        "key": "UseAlphaAsCuttingToolOnly",
        "type": "boolean"
    },
    {
        "key": "CreateBrepFiles",
        "type": "boolean"
    },
    {
        "key": "KeepHomelessInteriorRenderFaces",
        "type": "boolean"
    },
    {
        "key": "UseBspMerge",
        "type": "boolean"
    },
    {
        "key": "RenderFaceTransitionTime",
        "type": "number"
    },
    {
        "key": "CsgToolFile",
        "type": "string"
    },
    {
        "key": "CsgPlaneEpsilon",
        "type": "number"
    },
    {
        "key": "CsgWorldBoxSize",
        "type": "number"
    },
    {
        "key": "CsgMemoryLimit",
        "type": "number"
    },
    {
        "key": "CsgMemoryHint",
        "type": "number"
    },
    {
        "key": "CsgUseQueryCache",
        "type": "boolean"
    },
    {
        "key": "CsgQueryCacheReporting",
        "type": "boolean"
    },
    {
        "key": "CsgQueryCacheTimeout",
        "type": "number"
    },
    {
        "key": "CsgQueryCacheSizeMultiplier",
        "type": "number"
    },
    {
        "key": "UseRandomToolOrientation",
        "type": "boolean"
    },
    {
        "key": "UseLoadedCsgTool",
        "type": "boolean"
    },
    {
        "key": "UseBspPrethinOperations",
        "type": "boolean"
    },
    {
        "key": "UseRenderFaceTransitions",
        "type": "boolean"
    },
    {
        "key": "RemoveNonBspTriShapeSceneGraphNodes",
        "type": "boolean"
    },
    {
        "key": "UseThinnedTreeAsPaintedTree",
        "type": "boolean"
    },
    {
        "key": "FinishPreviousRenderFaceTransitionsWhenPerformingNewOperation",
        "type": "boolean"
    },
    {
        "key": "CsgPatchMode",
        "type": "number"
    },
    {
        "key": "CsgInvisibleStateEnabled",
        "type": "boolean"
    },
    {
        "key": "CsgPaintOperationOverwriteInvisible",
        "type": "boolean"
    },
    {
        "key": "CsgPartitionVertexSharingEnabled",
        "type": "boolean"
    },
    {
        "key": "CsgBackThinnedWhiteR",
        "type": "number"
    },
    {
        "key": "CsgBackThinnedWhiteG",
        "type": "number"
    },
    {
        "key": "CsgBackThinnedWhiteB",
        "type": "number"
    },
    {
        "key": "CsgBackThinnedBlueR",
        "type": "number"
    },
    {
        "key": "CsgBackThinnedBlueG",
        "type": "number"
    },
    {
        "key": "CsgBackThinnedBlueB",
        "type": "number"
    },
    {
        "key": "CsgBackThinnedA",
        "type": "number"
    },
    {
        "key": "CsgFrontThinnedWhiteR",
        "type": "number"
    },
    {
        "key": "CsgFrontThinnedWhiteG",
        "type": "number"
    },
    {
        "key": "CsgFrontThinnedWhiteB",
        "type": "number"
    },
    {
        "key": "CsgFrontThinnedBlueR",
        "type": "number"
    },
    {
        "key": "CsgFrontThinnedBlueG",
        "type": "number"
    },
    {
        "key": "CsgFrontThinnedBlueB",
        "type": "number"
    },
    {
        "key": "CsgFrontThinnedA",
        "type": "number"
    },
    {
        "key": "IgnoreVertexColors",
        "type": "boolean"
    },
    {
        "key": "CsgDrawBackFaces",
        "type": "boolean"
    },
    {
        "key": "CsgDrawTranslucentFaces",
        "type": "boolean"
    },
    {
        "key": "CsgPaintThinnerRevertTime",
        "type": "number"
    },
    {
        "key": "CsgPaintThinnerPersistent",
        "type": "boolean"
    },
    {
        "key": "CsgPaintThinnerRevertDynamicRBTime",
        "type": "number"
    },
    {
        "key": "CsgPaintThinnerRevertDynamicRBTimeAdditive",
        "type": "boolean"
    },
    {
        "key": "CsgPaintThinnerRevertDynamicRBUsed",
        "type": "boolean"
    },
    {
        "key": "CsgPaintThinnerPersistentScriptOperation",
        "type": "boolean"
    },
    {
        "key": "CollapseAnimationVertices",
        "type": "boolean"
    },
    {
        "key": "UseTextureStreaming",
        "type": "boolean"
    },
    {
        "key": "TextureLowLOD",
        "type": "number"
    },
    {
        "key": "TextureHighLOD",
        "type": "number"
    },
    {
        "key": "DynamicEars",
        "type": "boolean"
    },
    {
        "key": "EarSideTilt",
        "type": "number"
    },
    {
        "key": "EarSideSeparation",
        "type": "number"
    },
    {
        "key": "EarFrontDepth",
        "type": "number"
    },
    {
        "key": "EarBackDepth",
        "type": "number"
    },
    {
        "key": "MickeyEar_Right_Scale_X",
        "type": "number"
    },
    {
        "key": "MickeyEar_Right_Scale_Y",
        "type": "number"
    },
    {
        "key": "MickeyEar_Right_Scale_Z",
        "type": "number"
    },
    {
        "key": "MickeyEar_Left_Scale_X",
        "type": "number"
    },
    {
        "key": "MickeyEar_Left_Scale_Y",
        "type": "number"
    },
    {
        "key": "MickeyEar_Left_Scale_Z",
        "type": "number"
    },
    {
        "key": "EarDistanceScale",
        "type": "number"
    },
    {
        "key": "EarYawMod",
        "type": "number"
    },
    {
        "key": "Ears_HighAngle_Enter",
        "type": "number"
    },
    {
        "key": "Ears_HighAngle_Exit",
        "type": "number"
    },
    {
        "key": "Ears_HighAngle_ForwardTilt",
        "type": "number"
    },
    {
        "key": "Ears_HighAngle_HeadPitch",
        "type": "number"
    },
    {
        "key": "Ears_HighRotationSpeed",
        "type": "number"
    },
    {
        "key": "Ears_HighRotationPopAngle",
        "type": "number"
    },
    {
        "key": "Ears_EnableDebugCone",
        "type": "boolean"
    },
    {
        "key": "Ears_HighDepth",
        "type": "number"
    },
    {
        "key": "InfiniteLives",
        "type": "boolean"
    },
    {
        "key": "HealthComponent_InvulnBlinkRate",
        "type": "number"
    },
    {
        "key": "DamagedLeapInvulTime",
        "type": "number"
    },
    {
        "key": "FallRescueInvulTime",
        "type": "number"
    },
    {
        "key": "PlayerDeathInvulTime",
        "type": "number"
    },
    {
        "key": "PlayerDeathDrownInvulTime",
        "type": "number"
    },
    {
        "key": "ETicketToHealthRatio",
        "type": "number"
    },
    {
        "key": "AIContactDamage",
        "type": "number"
    },
    {
        "key": "MickeyStuckThreshold",
        "type": "number"
    },
    {
        "key": "MickeyMaxStuckTime",
        "type": "number"
    },
    {
        "key": "MickeyUnstuckRadius",
        "type": "number"
    },
    {
        "key": "MickeyUnstuckStim",
        "type": "number"
    },
    {
        "key": "CameraSpline_FollowDistance",
        "type": "number"
    },
    {
        "key": "CameraSpline_MaintainDistance",
        "type": "number"
    },
    {
        "key": "CameraMovementTransitionThreshold",
        "type": "number"
    },
    {
        "key": "bUseVelocityLook",
        "type": "boolean"
    },
    {
        "key": "bUsePushCamDelay",
        "type": "boolean"
    },
    {
        "key": "bUnlockGroundPlane",
        "type": "boolean"
    },
    {
        "key": "MaxCameraLookAheadSpeed",
        "type": "number"
    },
    {
        "key": "PushCamWait",
        "type": "number"
    },
    {
        "key": "Use_PrototypeHoldPaint",
        "type": "boolean"
    },
    {
        "key": "PrototypeHoldPaint_LockCameraWhileUsing",
        "type": "boolean"
    },
    {
        "key": "PrototypeHoldPaint_ResolutionDistanceRatio",
        "type": "number"
    },
    {
        "key": "PrototypeHoldPaint_ContinuousCorrectionDistanceRatio",
        "type": "number"
    },
    {
        "key": "PrototypeHoldPaint_MaxPaintBrushRange",
        "type": "number"
    },
    {
        "key": "PrototypeHoldPaint_PaintBrushDoesDamage",
        "type": "boolean"
    },
    {
        "key": "PrototypeHoldPaint_NumberOfCutsAllowed",
        "type": "number"
    },
    {
        "key": "PrototypeHoldPaint_PauseWhilePainting",
        "type": "boolean"
    },
    {
        "key": "PrototypeHoldPaint_PaintShape",
        "type": "number"
    },
    {
        "key": "PrototypeHoldPaint_AlwaysDoIndividualCuts",
        "type": "boolean"
    },
    {
        "key": "PrototypeHoldPaint_SquareCutPercentErrors",
        "type": "number"
    },
    {
        "key": "PrototypeHoldPaint_NumCutsPerAmmoUse",
        "type": "number"
    },
    {
        "key": "PaintMakesSpattersFriendly",
        "type": "boolean"
    },
    {
        "key": "ExtendFriendlyOnSpatterPaintHit",
        "type": "boolean"
    },
    {
        "key": "PaintMakesSpattersFriendly_Duration",
        "type": "number"
    },
    {
        "key": "FriendlySpatter_StompJumpHeightBonus",
        "type": "number"
    },
    {
        "key": "StunnedSpatter_StompJumpHeightBonus",
        "type": "number"
    },
    {
        "key": "TrackedMemoryTags",
        "type": "AI; Audio; BSP; characters; string"
    },
    {
        "key": "DisplayBuildVersionHUD",
        "type": "boolean"
    },
    {
        "key": "DisplayDebugTextHUD",
        "type": "boolean"
    },
    {
        "key": "DisplayDebugTextFlashUI",
        "type": "boolean"
    },
    {
        "key": "DisplayFrameRateIcon",
        "type": "boolean"
    },
    {
        "key": "DisplayDebugParticleText",
        "type": "boolean"
    },
    {
        "key": "UseSmallerDebugText",
        "type": "boolean"
    },
    {
        "key": "FlashTesselationError",
        "type": "number"
    },
    {
        "key": "FlashUseAA",
        "type": "boolean"
    },
    {
        "key": "FullScreenFadeTime",
        "type": "number"
    },
    {
        "key": "MilestoneFadeTime",
        "type": "number"
    },
    {
        "key": "HUDLetterboxPixelHeight",
        "type": "number"
    },
    {
        "key": "HUDEffectCount",
        "type": "number"
    },
    {
        "key": "HUDEffectnumber",
        "type": "string"
    },
    {
        "key": "MainMenuEffectCount",
        "type": "number"
    },
    {
        "key": "MainMenuEffectnumber",
        "type": "string"
    },
    {
        "key": "PauseMenuPinEffectCount",
        "type": "number"
    },
    {
        "key": "PauseMenuPinEffectnumber",
        "type": "string"
    },
    {
        "key": "PauseMenuQuestEffectCount",
        "type": "number"
    },
    {
        "key": "PauseMenuQuestEffectnumber",
        "type": "string"
    },
    {
        "key": "MainMenuEffect_StandardCount",
        "type": "number"
    },
    {
        "key": "MainMenuEffect_Standardnumber",
        "type": "string"
    },
    {
        "key": "PauseMenuPinEffect_StandardCount",
        "type": "number"
    },
    {
        "key": "PauseMenuPinEffect_Standardnumber",
        "type": "string"
    },
    {
        "key": "PauseMenuQuestEffect_StandardCount",
        "type": "number"
    },
    {
        "key": "PauseMenuQuestEffect_Standardnumber",
        "type": "string"
    },
    {
        "key": "UseLockedCache",
        "type": "boolean"
    },
    {
        "key": "MinimumParticleCountForLockedCache",
        "type": "number"
    },
    {
        "key": "TicketFXDelay",
        "type": "number"
    },
    {
        "key": "TicketInitialDelay",
        "type": "number"
    },
    {
        "key": "TicketUpdateDelay",
        "type": "number"
    },
    {
        "key": "TicketHideDelay",
        "type": "number"
    },
    {
        "key": "LOG_JPS_SCRIPT_ENABLED",
        "type": "boolean"
    },
    {
        "key": "LOG_GENERAL_ENABLED",
        "type": "boolean"
    },
    {
        "key": "DebugInputMappingFile",
        "type": "string"
    },
    {
        "key": "FinalInputMappingFile",
        "type": "string"
    },
    {
        "key": "ScriptInputMappingFile",
        "type": "string"
    },
    {
        "key": "Input_TapThreshold",
        "type": "number"
    },
    {
        "key": "UseHostComm",
        "type": "boolean"
    },
    {
        "key": "EnableRenderProfiling",
        "type": "boolean"
    },
    {
        "key": "GPUHangMissedRetraceLimit",
        "type": "number"
    },
    {
        "key": "EnableGPUHangRecovery",
        "type": "boolean"
    },
    {
        "key": "ToggleAmmoTypeMode",
        "type": "boolean"
    },
    {
        "key": "MickeyFeetToHandsInLedgeGrab",
        "type": "number"
    },
    {
        "key": "MickeyMaxAngleInLedgeGrab",
        "type": "number"
    },
    {
        "key": "MickeyMaxAngleStartLedgeGrab",
        "type": "number"
    },
    {
        "key": "MickeyMaxHealthPips",
        "type": "number"
    },
    {
        "key": "ShowMickeyCodedMovementstring",
        "type": "boolean"
    },
    {
        "key": "CheckForStuck",
        "type": "boolean"
    },
    {
        "key": "LedgeJump_Movement",
        "type": "number"
    },
    {
        "key": "LedgeJump_Lift",
        "type": "number"
    },
    {
        "key": "SketchOutlineAcceleration",
        "type": "number"
    },
    {
        "key": "SketchOutlineFriction",
        "type": "number"
    },
    {
        "key": "SketchOutlineSettleVelocity",
        "type": "number"
    },
    {
        "key": "ThinEffectTimeScale",
        "type": "number"
    },
    {
        "key": "ThinEffectUseCamera",
        "type": "boolean"
    },
    {
        "key": "JigsawMediumThreshold",
        "type": "number"
    },
    {
        "key": "JigsawLargeThreshold",
        "type": "number"
    },
    {
        "key": "ToonEffectFromFirstHit",
        "type": "boolean"
    },
    {
        "key": "RimDamagedEffectR",
        "type": "number"
    },
    {
        "key": "RimDamagedEffectG",
        "type": "number"
    },
    {
        "key": "RimDamagedEffectB",
        "type": "number"
    },
    {
        "key": "RimTEffectR",
        "type": "number"
    },
    {
        "key": "RimTEffectG",
        "type": "number"
    },
    {
        "key": "RimTEffectB",
        "type": "number"
    },
    {
        "key": "RimPEffectR",
        "type": "number"
    },
    {
        "key": "RimPEffectG",
        "type": "number"
    },
    {
        "key": "RimPEffectB",
        "type": "number"
    },
    {
        "key": "RimTIEffectR",
        "type": "number"
    },
    {
        "key": "RimTIEffectG",
        "type": "number"
    },
    {
        "key": "RimTIEffectB",
        "type": "number"
    },
    {
        "key": "RimPIEffectR",
        "type": "number"
    },
    {
        "key": "RimPIEffectG",
        "type": "number"
    },
    {
        "key": "RimPIEffectB",
        "type": "number"
    },
    {
        "key": "RimResistEffectR",
        "type": "number"
    },
    {
        "key": "RimResistEffectG",
        "type": "number"
    },
    {
        "key": "RimResistEffectB",
        "type": "number"
    },
    {
        "key": "ConvoCamera_DistFromFocus_Short",
        "type": "number"
    },
    {
        "key": "ConvoCamera_AngleFromFocus_Short",
        "type": "number"
    },
    {
        "key": "ConvoCamera_VerticalCameraOffset_Short",
        "type": "number"
    },
    {
        "key": "ConvoCamera_VerticalFocusOffset_Short",
        "type": "number"
    },
    {
        "key": "ConvoCamera_DistanceBetween_Short",
        "type": "number"
    },
    {
        "key": "ConvoCamera_FocusLateralOffset_Short",
        "type": "number"
    },
    {
        "key": "ConvoCamera_DistFromFocus",
        "type": "number"
    },
    {
        "key": "ConvoCamera_AngleFromFocus",
        "type": "number"
    },
    {
        "key": "ConvoCamera_VerticalCameraOffset",
        "type": "number"
    },
    {
        "key": "ConvoCamera_VerticalFocusOffset",
        "type": "number"
    },
    {
        "key": "ConvoCamera_DistanceBetween",
        "type": "number"
    },
    {
        "key": "ConvoCamera_FocusLateralOffset",
        "type": "number"
    },
    {
        "key": "ConvoCamera_DistFromFocus_Tall",
        "type": "number"
    },
    {
        "key": "ConvoCamera_AngleFromFocus_Tall",
        "type": "number"
    },
    {
        "key": "ConvoCamera_VerticalCameraOffset_Tall",
        "type": "number"
    },
    {
        "key": "ConvoCamera_VerticalFocusOffset_Tall",
        "type": "number"
    },
    {
        "key": "ConvoCamera_DistanceBetween_Tall",
        "type": "number"
    },
    {
        "key": "ConvoCamera_FocusLateralOffset_Tall",
        "type": "number"
    },
    {
        "key": "ConvoCamera_ForceDistanceBetween",
        "type": "boolean"
    },
    {
        "key": "ConvoFadeout_Time",
        "type": "number"
    },
    {
        "key": "ConvoCamera_FadeInDelay",
        "type": "number"
    },
    {
        "key": "ConvoCamera_ManualUseCameraOrientation",
        "type": "boolean"
    },
    {
        "key": "DisableMetrics",
        "type": "boolean"
    },
    {
        "key": "MovementVisualTrackers",
        "type": "boolean"
    },
    {
        "key": "ShowVisualTrackers",
        "type": "boolean"
    },
    {
        "key": "LedgeGrabFitShapeHeight",
        "type": "number"
    },
    {
        "key": "CosineMaxJumpStopAngle",
        "type": "number"
    },
    {
        "key": "DisableIGC",
        "type": "boolean"
    },
    {
        "key": "DemoLevelCheck",
        "type": "boolean"
    },
    {
        "key": "SphericalHarmonicLightingRayCast",
        "type": "boolean"
    },
    {
        "key": "SphericalHarmonicLightingRayCastDirectionalLength",
        "type": "number"
    },
    {
        "key": "SphericalHarmonicLightingRayCastFadeTime",
        "type": "number"
    },
    {
        "key": "SphericalHarmonicLightingRayCastDistanceThreshold",
        "type": "number"
    },
    {
        "key": "SphericalHarmonicLightingDebug",
        "type": "boolean"
    },
    {
        "key": "SphericalHarmonicLightingDebugLightSize",
        "type": "number"
    },
    {
        "key": "DefaultLightingAmbientColorR",
        "type": "number"
    },
    {
        "key": "DefaultLightingAmbientColorG",
        "type": "number"
    },
    {
        "key": "DefaultLightingAmbientColorB",
        "type": "number"
    },
    {
        "key": "DefaultLightingDirectionalColorR",
        "type": "number"
    },
    {
        "key": "DefaultLightingDirectionalColorG",
        "type": "number"
    },
    {
        "key": "DefaultLightingDirectionalColorB",
        "type": "number"
    },
    {
        "key": "DefaultLightingDimmer",
        "type": "number"
    },
    {
        "key": "HavokSolverSize",
        "type": "number"
    },
    {
        "key": "HavokStackSize",
        "type": "number"
    },
    {
        "key": "PSCCColliderRadius",
        "type": "number"
    },
    {
        "key": "PSCCColliderBounce",
        "type": "number"
    },
    {
        "key": "PSCCColliderLifeSpanLeft",
        "type": "number"
    },
    {
        "key": "PSCCColliderColliderTime",
        "type": "number"
    },
    {
        "key": "KeyframedCustomCollisionResponse",
        "type": "boolean"
    },
    {
        "key": "KeyframedCustomCollisionDistance",
        "type": "number"
    },
    {
        "key": "StaticCustomCollisionDistance",
        "type": "number"
    },
    {
        "key": "CharacterKnockbackLaunchUpSpeed",
        "type": "number"
    },
    {
        "key": "DefaultUsableEffectName",
        "type": "string"
    },
    {
        "key": "QuestUsableEffectName",
        "type": "string"
    },
    {
        "key": "scriptDilateDelays",
        "type": "boolean"
    },
    {
        "key": "bShowHUD",
        "type": "boolean"
    },
    {
        "key": "CheckpointDisplayTime",
        "type": "number"
    },
    {
        "key": "ApprenticeLog",
        "type": "boolean"
    },
    {
        "key": "DefaultRestitutionForAllObjects",
        "type": "number"
    },
    {
        "key": "DefaultFrictionForAllObjects",
        "type": "number"
    },
    {
        "key": "PaintThroughOverlappingObjects",
        "type": "boolean"
    },
    {
        "key": "GodModeOnPlayer",
        "type": "boolean"
    }
];

const levelsDatabase = [
    {
        "path": "Levels/Main_Menu.Level",
        "name": "Start Screen"
    },
    {
        "path": "Levels/GV_ZoneA_Start.level",
        "name": "GV - Slalom"
    },
    {
        "path": "Levels/GV_ZoneB_Start.level",
        "name": "GV - Ticket Booth"
    },
    {
        "path": "Levels/GV_ZoneC_Start.level",
        "name": "GV - Jungle Boat Ride"
    },
    {
        "path": "Levels/GV_ZoneD_Start.level",
        "name": "GV - Asiaboat Ride"
    },
    {
        "path": "Levels/GV_ZoneF_Start.level",
        "name": "GV - World of Gremlins"
    },
    {
        "path": "Levels/GV_ZoneI_Start.level",
        "name": "GV - EuroBoat Ride"
    },
    {
        "path": "Levels/SW_ClockWorkBoss_static.Level",
        "name": "GV - Clock Tower Boss"
    },
    {
        "path": "Levels/HM_Start.Level",
        "name": "LM - Manor House"
    },
    {
        "path": "Levels/HM_StartI.Level",
        "name": "LM - Foyer"
    },
    {
        "path": "Levels/HM_StartF.Level",
        "name": "LM - Stretching Room"
    },
    {
        "path": "Levels/HM_StartH.Level",
        "name": "LM - Library"
    },
    {
        "path": "Levels/HM_StartK.Level",
        "name": "LM - Ballroom"
    },
    {
        "path": "Levels/HM_StartM.Level",
        "name": "LM - Mad Doctor's Attic"
    },
    {
        "path": "Levels/TL_Start.Level",
        "name": "TC - Notilus Room"
    },
    {
        "path": "Levels/TL_D1.Level",
        "name": "TC - Tomorrow City Lagoon"
    },
    {
        "path": "Levels/TL_D2.Level",
        "name": "TC - Great Big Tomorrow"
    },
    {
        "path": "Levels/TL_MiniHub.Level",
        "name": "TC - Tomorrow City Square"
    },
    {
        "path": "Levels/TL_SpaceMountain.Level",
        "name": "TC - Space Voyage"
    },
    {
        "path": "Levels/TL_SpaceMountain_TronPete.Level",
        "name": "TC - Space Voyage Petetronic Boss"
    },
    {
        "path": "Levels/TL_Visit2_Start.Level",
        "name": "TC - Tomorrow City Square Visit 2"
    },
    {
        "path": "Levels/TL_SpaceVoyage_Visit2.Level",
        "name": "TC - Space Voyage Visit 2"
    },
    {
        "path": "Levels/PotW_Start.Level",
        "name": "POTW - Pirates of the Wasteland"
    },
    {
        "path": "Levels/PotW_Start_Tortuga.Level",
        "name": "POTW - Tortooga"
    },
    {
        "path": "Levels/PotW_Jungle_Start.Level",
        "name": "POTW - Jungle"
    },
    {
        "path": "Levels/PotW_Start_TortugaV2.Level",
        "name": "POTW - Tortooga Visit 2"
    },
    {
        "path": "Levels/PotW_Start_TortugaV2_Pirates.Level",
        "name": "POTW - Tortooga Visit 2 (with pirates)"
    },
    {
        "path": "Levels/PotW_IVRide_Start.Level",
        "name": "POTW - Pirate Voyage"
    },
    {
        "path": "Levels/PotW_Skull_Start.Level",
        "name": "POTW - Skull Island"
    },
    {
        "path": "Levels/PotW_JollyRoger_Start.Level",
        "name": "POTW - Jolly Roger Boss Battle"
    },
    {
        "path": "Levels/DBC_Start_1st.Level",
        "name": "DBC - Lab Visit 1"
    },
    {
        "path": "Levels/DBC_Utilidor_3_1st.Level",
        "name": "DBC - Utilidor 3"
    },
    {
        "path": "Levels/DBC_Courtyard_1st.Level",
        "name": "DBC - Courtyard"
    },
    {
        "path": "Levels/DBC_Start.Level",
        "name": "DBC - Lab Visit 2"
    },
    {
        "path": "Levels/DBC_Start_ZoneC.Level",
        "name": "DBC - 2D Sleeping Beauty"
    },
    {
        "path": "Levels/DBC_Start_ZoneF.Level",
        "name": "DBC - Throne Room"
    },
    {
        "path": "Levels/DBC_Start_ZoneG.Level",
        "name": "DBC - 2D Fantasia 1"
    },
    {
        "path": "Levels/DBC_Start_ZoneGH.Level",
        "name": "DBC - 2D Fantasia 2"
    },
    {
        "path": "Levels/DBC_Start_ZoneH.Level",
        "name": "DBC - ControlTower"
    },
    {
        "path": "Levels/DBC_Start_ZoneO.Level",
        "name": "DBC - Utilidor 4"
    },
    {
        "path": "Levels/DBC_Start_ZoneP.Level",
        "name": "DBC - 2D Fantasia 3"
    },
    {
        "path": "Levels/DBC_Start_ZoneQ.Level",
        "name": "DBC - 2D Fantasia 4"
    },
    {
        "path": "Levels/DBC_Start_ZoneR.Level",
        "name": "DBC - Utilidor 7"
    },
    {
        "path": "Levels/DBC_Start_ZoneK.Level",
        "name": "DBC - Sorrow Tower"
    },
    {
        "path": "Levels/DBC_Start_ZoneL.Level",
        "name": "DBC - Grief Tower"
    },
    {
        "path": "Levels/DBC_Start_ZoneM.Level",
        "name": "DBC - Loss Tower"
    },
    {
        "path": "Levels/DBC_Start_ZoneS.Level",
        "name": "DBC - Inside the Blot"
    },
    {
        "path": "Levels/MJM_ZoneA.Level",
        "name": "MJM - The Heaps"
    },
    {
        "path": "Levels/MJM_ZoneG1.Level",
        "name": "MJM - The Piles 1 "
    },
    {
        "path": "Levels/MJM_ZoneG2.Level",
        "name": "MJM - The Piles 2"
    },
    {
        "path": "Levels/MJM_ZoneE.Level",
        "name": "MJM - Mt. Osmore Slopes"
    },
    {
        "path": "Levels/MJM_Zonef.Level",
        "name": "MJM - Mt. Osmore Caverns Visit 1"
    },
    {
        "path": "Levels/MJM_ZoneF2.Level",
        "name": "MJM - Mt. Osmore Caverns Visit 2"
    },
    {
        "path": "Levels/MeanStreet_V1_Launcher.level",
        "name": "HUB - Mean Street V1"
    },
    {
        "path": "Levels/MeanStreet_V2_Launcher.level",
        "name": "HUB - Mean Street V2"
    },
    {
        "path": "Levels/MeanStreet_V3_Launcher.level",
        "name": "HUB - Mean Street V3"
    },
    {
        "path": "Levels/MeanStreet_V4_Launcher.level",
        "name": "HUB - Mean Street V4"
    },
    {
        "path": "Levels/MeanStreet_V5_Launcher.level",
        "name": "HUB - Mean Street V5"
    },
    {
        "path": "Levels/MeanStreet_V6_Launcher.level",
        "name": "HUB - Mean Street V6"
    },
    {
        "path": "Levels/Adventureland_v1_Launcher.level",
        "name": "HUB - Ventureland V1"
    },
    {
        "path": "Levels/Adventureland_v2_No_Pirates_Launcher.level",
        "name": "HUB - Ventureland V2 (no Pirates)"
    },
    {
        "path": "Levels/Adventureland_v2_Pirates_Launcher.level",
        "name": "HUB - Ventureland V2 (with Pirates)"
    },
    {
        "path": "Levels/Adventureland_v3_Launcher.level",
        "name": "HUB - Venutureland V3"
    },
    {
        "path": "Levels/NewOrleans_V1.Level",
        "name": "HUB - Bog Easy Visit 1"
    },
    {
        "path": "Levels/NewOrleans_V2_Ghosts.level",
        "name": "HUB - Bog Easy Visit 2 With Ghosts"
    },
    {
        "path": "Levels/NewOrleans_V2_NoGhosts.level",
        "name": "HUB - Bog Easy Visit 2 Without Ghosts"
    },
    {
        "path": "Levels/NewOrleans_V3.Level",
        "name": "HUB - Bog Easy Visit 3"
    },
    {
        "path": "Levels/ToonTown_V1.Level",
        "name": "HUB - OsTown Visit 1"
    },
    {
        "path": "Levels/ToonTown_FromMJ1.level",
        "name": "HUB - OsTown Visit 2"
    },
    {
        "path": "Levels/ToonTown_FromMJ2.level",
        "name": "HUB - OsTown Visit 3"
    },
    {
        "path": "Levels/AI_Test.level",
        "name": "TEST - AI Test Map"
    },
    {
        "path": "Levels/NPC_Test.level",
        "name": "TEST - NPC Test Map"
    },
    {
        "path": "Levels/NPC_Test_2.level",
        "name": "TEST - NPC Test Map 2"
    },
    {
        "path": "Levels/BuildingStandards.level",
        "name": "TEST - Building Standards"
    },
    {
        "path": "Environments/_Test/Virtuos/TEST_Virtuos_PlaygroundRP.gsa",
        "name": "TEST - Raz's 2D Playground"
    },
    {
        "path": "Levels/AVAParticleTests.level",
        "name": "TEST - AVA Particles"
    },
    {
        "path": "Levels/SH_Lighting_Test.level",
        "name": "TEST - Robs Particle Zoo"
    },
    {
        "path": "Environments/_Test/Jeff_Tse_TestLevel.gsa",
        "name": "TEST - Jeff Tses Particle Zoo"
    },
    {
        "path": "Levels/Eve_Colvin_Zoo.level",
        "name": "TEST - Eve_Colvin_Zoo"
    },
    {
        "path": "Levels/JM_Test_01.level",
        "name": "TEST - Jamey_Test"
    },
    {
        "path": "Levels/Jimmie_AVA_Test.level",
        "name": "TEST - Blake_Zoo"
    },
    {
        "path": "Levels/Jimmie_AVA_Test.level",
        "name": "TEST - Dallin_Zoo"
    },
    {
        "path": "Levels/Jimmie_AVA_Test.level",
        "name": "TEST - Jimmie_Zoo"
    },
    {
        "path": "Levels/Jimmie_AVA_Test.level",
        "name": "TEST - JohnnyB_Zoo"
    },
    {
        "path": "levels/Common_FX_Zoo.level",
        "name": "TEST - Common_FX_Zoo"
    },
    {
        "path": "Levels/mickey_arcade.Level",
        "name": "TEST - Mickey Arcade"
    },
    {
        "path": "Levels/E3Demo_VL.level",
        "name": "E3 - Start"
    },
    {
        "path": "Levels/E3Demo_SBW.level",
        "name": "E3 - Steamboat Willie"
    },
    {
        "path": "Levels/E3Demo_SR.level",
        "name": "E3 - Scalp Rock"
    },
    {
        "path": "Levels/2D_SleepingBeauty.level",
        "name": "2D - 2dFilm_SleepingBeauty (SW_ZoneD)"
    },
    {
        "path": "Levels/2D_SteamboatWillie01.level",
        "name": "2D - Steamboat Willie 1"
    },
    {
        "path": "Levels/2D_SteamboatWillie02.level",
        "name": "2D - Steamboat Willie 2"
    },
    {
        "path": "Levels/2D_Steamboat03.level",
        "name": "2D - Steamboat Willie 3"
    },
    {
        "path": "Levels/2D_ClockCleaners01.level",
        "name": "2D - Clock Cleaners 1"
    },
    {
        "path": "Levels/2D_ClockCleaners02.level",
        "name": "2D - Clock Cleaners 2"
    },
    {
        "path": "Levels/2D_MickeySteamroller01.level",
        "name": "2D - Mickey's Steamroller"
    },
    {
        "path": "Levels/2D_JungleRhythm01.level",
        "name": "2D - Jungle Rhythm 1"
    },
    {
        "path": "Levels/2D_JungleRhythm02.level",
        "name": "2D - Jungle Rhythm 2"
    },
    {
        "path": "Levels/2D_Castaway01.level",
        "name": "2D - The Castaway 1"
    },
    {
        "path": "Levels/2D_Castaway02.level",
        "name": "2D -  The Castaway 2"
    },
    {
        "path": "Levels/2D_Plutopia01.level",
        "name": "2D - Plutopia 1"
    },
    {
        "path": "Levels/MJM_AlpineA.level",
        "name": "2D - Alpine Climbers 1"
    },
    {
        "path": "Levels/MJM_AlpineB.level",
        "name": "2D - Alpine Climbers 2"
    },
    {
        "path": "Levels/2D_LonesomeGhost01.level",
        "name": "2D - Lonesome Ghosts 1"
    },
    {
        "path": "Levels/2D_LonesomeGhost02.level",
        "name": "2D - Lonesome Ghosts 2"
    },
    {
        "path": "Levels/2D_MadDoctor01.level",
        "name": "2D - The Mad Doctor 1"
    },
    {
        "path": "Levels/2D_MadDoctor02.Level",
        "name": "2D - The Mad Doctor 2"
    },
    {
        "path": "Levels/2D_Fantasia01.level",
        "name": "2D - Fantasia 1"
    },
    {
        "path": "Levels/2D_Fantasia02.level",
        "name": "2D - Fantasia 2"
    },
    {
        "path": "Levels/2D_Fantasia03.level",
        "name": "2D - Fantasia 3"
    },
    {
        "path": "Levels/2D_Fantasia04.level",
        "name": "2D - Fantasia 4"
    },
    {
        "path": "Levels/MJM_KnightA.level",
        "name": "2D - Oh What a Knight 1"
    },
    {
        "path": "Levels/MJM_TrolleyA.level",
        "name": "2D - Trolley Troubles"
    },
    {
        "path": "Levels/2D_MechanicalMan01.level",
        "name": "2D - Mickey's Mechanical Man 1"
    },
    {
        "path": "Levels/MJM_GunsA.level",
        "name": "2D - Great Guns"
    },
    {
        "path": "Levels/2D_ThruTheMirror.level",
        "name": "2D - Thru The Mirror"
    },
    {
        "path": "Levels/2D_MechanicalMan02.level",
        "name": "2D - Mickey's Mechanical Man 2"
    },
    {
        "path": "Levels/2D_YeOldenDays.level",
        "name": "2D - Ye Olden Days"
    },
    {
        "path": "Levels/2D_Beanstalk.level",
        "name": "2D - Mickey and the Beanstalk"
    },
    {
        "path": "Levels/2D_TheWhalers.level",
        "name": "2D - The Whalers"
    },
    {
        "path": "Levels/2D_Shanghaied.level",
        "name": "2D - Shanghaied"
    },
    {
        "path": "Levels/2D_HauntedHouse01.level",
        "name": "2D - The Haunted House 1"
    },
    {
        "path": "Levels/2D_HauntedHouse02.level",
        "name": "2D - The Haunted House 2"
    },
    {
        "path": "Levels/2D_HauntedHouse03.level",
        "name": "2D - The Haunted House 3"
    },
    {
        "path": "Levels/2D_Plutopia02.level",
        "name": "2D - Plutopia 2"
    },
    {
        "path": "Environments/ThePark/MeanStreetUSA/Zones/GSA/MSUSA_2D_walts.gsa",
        "name": "INT - MS Walt's Apartment"
    },
    {
        "path": "Environments/ThePark/MeanStreetUSA/Zones/GSA/MSUSA_2D_IceCream.gsa",
        "name": "INT - MS Ice Cream Parlor"
    },
    {
        "path": "Environments/ThePark/MeanStreetUSA/GSA/MSUSA_2D_Detective.gsa",
        "name": "INT - MS Detective Agency"
    },
    {
        "path": "Environments/ThePark/MeanStreetUSA/Zones/GSA/MSUSA_2D_MSUSAemporiumr.gsa",
        "name": "INT - MS Emporium"
    },
    {
        "path": "Environments/ThePark/AdventureLand/TikiRoom/Zones/gsa/P_2D_Tiki.gsa",
        "name": "INT - POTW Tiki Hut"
    },
    {
        "path": "Environments/ThePark/AdventureLand/Zones/GSA/AL_Minihub_2D_Jungleshop.gsa",
        "name": "INT - POTW Hut Shop"
    },
    {
        "path": "Environments/ThePark/AdventureLand/SwissFamily/Zones/GSA/AL_Minihub_2D_swiss_family_robinson.gsa",
        "name": "INT - POTW Tree House (abandoned)"
    },
    {
        "path": "Environments/ThePark/AdventureLand/SwissFamily/Zones/GSA/AL_Minihub_2D_swiss_family_robinson_lived.gsa",
        "name": "INT - POTW Tree House (lived)"
    },
    {
        "path": "Environments/ThePark/AdventureLand/Pirates/GSA/P_2D_Jail.gsa",
        "name": "INT - POTW Jail"
    },
    {
        "path": "Environments/ThePark/ToonTown/Zones/GSA/TT_2D_MickeyHome.gsa",
        "name": "INT -  OT Mickey's Home"
    },
    {
        "path": "Environments/ThePark/ToonTown/GSA/TT_2D_OrtensiaHome.gsa",
        "name": "INT - OT Ortensia's Home"
    },
    {
        "path": "Environments/ThePark/ToonTown/Zones/GSA/TT_2D_ClaraKitchen.gsa",
        "name": "INT - OT Clarabelle's Kitchen"
    },
    {
        "path": "Environments/ThePark/TomorrowLand/GSA/TL_2D_Nautilus.gsa",
        "name": "INT - TC Nautilus"
    },
    {
        "path": "Environments/ThePark/NewOrleansSquare/GSA/NOS_2D_Hiddendock.gsa",
        "name": "INT - HM Hiddendock"
    },
    {
        "path": "Environments/ThePark/AdventureLand/Pirates/GSA/P_2D_Jail.gsa",
        "name": "INT - POTW Jail"
    },
    {
        "path": "Environments/ThePark/AdventureLand/Pirates/GSA/P_2D_Teepee.gsa",
        "name": "INT - POTW Teepee"
    },
    {
        "path": "Environments/ThePark/fantasyland/SmallWorld/Zones/SW_2D_greminhut.gsa",
        "name": "INT - GV Gremin Hut"
    },
    {
        "path": "Environments/ThePark/NewOrleansSquare/Zones/GSA/NOS_2D_NewOrleansShop.gsa",
        "name": "INT - HM Bog Easy Shop"
    },
    {
        "path": "Environments/ThePark/NewOrleansSquare/Zones/GSA/NOS_2D_MarkTwainsShip.gsa",
        "name": "INT - HM Mark Twain's Ship"
    }
]/**
 * SimpleBar.js - v5.2.0
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).SimpleBar=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r=function(t){return t&&t.Math==Math&&t},n=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof t&&t)||Function("return this")(),i=function(t){try{return!!t()}catch(t){return!0}},o=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),s={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,c={f:a&&!s.call({1:2},1)?function(t){var e=a(this,t);return!!e&&e.enumerable}:s},l=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},u={}.toString,f=function(t){return u.call(t).slice(8,-1)},h="".split,d=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==f(t)?h.call(t,""):Object(t)}:Object,p=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},v=function(t){return d(p(t))},g=function(t){return"object"==typeof t?null!==t:"function"==typeof t},y=function(t,e){if(!g(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!g(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!g(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!g(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,m=function(t,e){return b.call(t,e)},x=n.document,E=g(x)&&g(x.createElement),w=function(t){return E?x.createElement(t):{}},O=!o&&!i((function(){return 7!=Object.defineProperty(w("div"),"a",{get:function(){return 7}}).a})),_=Object.getOwnPropertyDescriptor,S={f:o?_:function(t,e){if(t=v(t),e=y(e,!0),O)try{return _(t,e)}catch(t){}if(m(t,e))return l(!c.f.call(t,e),t[e])}},A=function(t){if(!g(t))throw TypeError(String(t)+" is not an object");return t},k=Object.defineProperty,L={f:o?k:function(t,e,r){if(A(t),e=y(e,!0),A(r),O)try{return k(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},M=o?function(t,e,r){return L.f(t,e,l(1,r))}:function(t,e,r){return t[e]=r,t},T=function(t,e){try{M(n,t,e)}catch(r){n[t]=e}return e},R=n["__core-js_shared__"]||T("__core-js_shared__",{}),j=Function.toString;"function"!=typeof R.inspectSource&&(R.inspectSource=function(t){return j.call(t)});var C,W,z,I=R.inspectSource,N=n.WeakMap,P="function"==typeof N&&/native code/.test(I(N)),D=e((function(t){(t.exports=function(t,e){return R[t]||(R[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),F=0,V=Math.random(),B=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++F+V).toString(36)},$=D("keys"),H=function(t){return $[t]||($[t]=B(t))},q={},X=n.WeakMap;if(P){var U=new X,Y=U.get,G=U.has,K=U.set;C=function(t,e){return K.call(U,t,e),e},W=function(t){return Y.call(U,t)||{}},z=function(t){return G.call(U,t)}}else{var Q=H("state");q[Q]=!0,C=function(t,e){return M(t,Q,e),e},W=function(t){return m(t,Q)?t[Q]:{}},z=function(t){return m(t,Q)}}var J={set:C,get:W,has:z,enforce:function(t){return z(t)?W(t):C(t,{})},getterFor:function(t){return function(e){var r;if(!g(e)||(r=W(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},Z=e((function(t){var e=J.get,r=J.enforce,i=String(String).split("String");(t.exports=function(t,e,o,s){var a=!!s&&!!s.unsafe,c=!!s&&!!s.enumerable,l=!!s&&!!s.noTargetGet;"function"==typeof o&&("string"!=typeof e||m(o,"name")||M(o,"name",e),r(o).source=i.join("string"==typeof e?e:"")),t!==n?(a?!l&&t[e]&&(c=!0):delete t[e],c?t[e]=o:M(t,e,o)):c?t[e]=o:T(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||I(this)}))})),tt=n,et=function(t){return"function"==typeof t?t:void 0},rt=function(t,e){return arguments.length<2?et(tt[t])||et(n[t]):tt[t]&&tt[t][e]||n[t]&&n[t][e]},nt=Math.ceil,it=Math.floor,ot=function(t){return isNaN(t=+t)?0:(t>0?it:nt)(t)},st=Math.min,at=function(t){return t>0?st(ot(t),9007199254740991):0},ct=Math.max,lt=Math.min,ut=function(t){return function(e,r,n){var i,o=v(e),s=at(o.length),a=function(t,e){var r=ot(t);return r<0?ct(r+e,0):lt(r,e)}(n,s);if(t&&r!=r){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((t||a in o)&&o[a]===r)return t||a||0;return!t&&-1}},ft={includes:ut(!0),indexOf:ut(!1)}.indexOf,ht=function(t,e){var r,n=v(t),i=0,o=[];for(r in n)!m(q,r)&&m(n,r)&&o.push(r);for(;e.length>i;)m(n,r=e[i++])&&(~ft(o,r)||o.push(r));return o},dt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],pt=dt.concat("length","prototype"),vt={f:Object.getOwnPropertyNames||function(t){return ht(t,pt)}},gt={f:Object.getOwnPropertySymbols},yt=rt("Reflect","ownKeys")||function(t){var e=vt.f(A(t)),r=gt.f;return r?e.concat(r(t)):e},bt=function(t,e){for(var r=yt(e),n=L.f,i=S.f,o=0;o<r.length;o++){var s=r[o];m(t,s)||n(t,s,i(e,s))}},mt=/#|\.prototype\./,xt=function(t,e){var r=wt[Et(t)];return r==_t||r!=Ot&&("function"==typeof e?i(e):!!e)},Et=xt.normalize=function(t){return String(t).replace(mt,".").toLowerCase()},wt=xt.data={},Ot=xt.NATIVE="N",_t=xt.POLYFILL="P",St=xt,At=S.f,kt=function(t,e){var r,i,o,s,a,c=t.target,l=t.global,u=t.stat;if(r=l?n:u?n[c]||T(c,{}):(n[c]||{}).prototype)for(i in e){if(s=e[i],o=t.noTargetGet?(a=At(r,i))&&a.value:r[i],!St(l?i:c+(u?".":"#")+i,t.forced)&&void 0!==o){if(typeof s==typeof o)continue;bt(s,o)}(t.sham||o&&o.sham)&&M(s,"sham",!0),Z(r,i,s,t)}},Lt=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},Mt=function(t,e,r){if(Lt(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,i){return t.call(e,r,n,i)}}return function(){return t.apply(e,arguments)}},Tt=function(t){return Object(p(t))},Rt=Array.isArray||function(t){return"Array"==f(t)},jt=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),Ct=jt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Wt=D("wks"),zt=n.Symbol,It=Ct?zt:zt&&zt.withoutSetter||B,Nt=function(t){return m(Wt,t)||(jt&&m(zt,t)?Wt[t]=zt[t]:Wt[t]=It("Symbol."+t)),Wt[t]},Pt=Nt("species"),Dt=function(t,e){var r;return Rt(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!Rt(r.prototype)?g(r)&&null===(r=r[Pt])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)},Ft=[].push,Vt=function(t){var e=1==t,r=2==t,n=3==t,i=4==t,o=6==t,s=5==t||o;return function(a,c,l,u){for(var f,h,p=Tt(a),v=d(p),g=Mt(c,l,3),y=at(v.length),b=0,m=u||Dt,x=e?m(a,y):r?m(a,0):void 0;y>b;b++)if((s||b in v)&&(h=g(f=v[b],b,p),t))if(e)x[b]=h;else if(h)switch(t){case 3:return!0;case 5:return f;case 6:return b;case 2:Ft.call(x,f)}else if(i)return!1;return o?-1:n||i?i:x}},Bt={forEach:Vt(0),map:Vt(1),filter:Vt(2),some:Vt(3),every:Vt(4),find:Vt(5),findIndex:Vt(6)},$t=function(t,e){var r=[][t];return!!r&&i((function(){r.call(null,e||function(){throw 1},1)}))},Ht=Object.defineProperty,qt={},Xt=function(t){throw t},Ut=function(t,e){if(m(qt,t))return qt[t];e||(e={});var r=[][t],n=!!m(e,"ACCESSORS")&&e.ACCESSORS,s=m(e,0)?e[0]:Xt,a=m(e,1)?e[1]:void 0;return qt[t]=!!r&&!i((function(){if(n&&!o)return!0;var t={length:-1};n?Ht(t,1,{enumerable:!0,get:Xt}):t[1]=1,r.call(t,s,a)}))},Yt=Bt.forEach,Gt=$t("forEach"),Kt=Ut("forEach"),Qt=Gt&&Kt?[].forEach:function(t){return Yt(this,t,arguments.length>1?arguments[1]:void 0)};kt({target:"Array",proto:!0,forced:[].forEach!=Qt},{forEach:Qt});var Jt={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};for(var Zt in Jt){var te=n[Zt],ee=te&&te.prototype;if(ee&&ee.forEach!==Qt)try{M(ee,"forEach",Qt)}catch(t){ee.forEach=Qt}}var re,ne,ie=!("undefined"==typeof window||!window.document||!window.document.createElement),oe=rt("navigator","userAgent")||"",se=n.process,ae=se&&se.versions,ce=ae&&ae.v8;ce?ne=(re=ce.split("."))[0]+re[1]:oe&&(!(re=oe.match(/Edge\/(\d+)/))||re[1]>=74)&&(re=oe.match(/Chrome\/(\d+)/))&&(ne=re[1]);var le=ne&&+ne,ue=Nt("species"),fe=Bt.filter,he=function(t){return le>=51||!i((function(){var e=[];return(e.constructor={})[ue]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}("filter"),de=Ut("filter");kt({target:"Array",proto:!0,forced:!he||!de},{filter:function(t){return fe(this,t,arguments.length>1?arguments[1]:void 0)}});var pe,ve=Object.keys||function(t){return ht(t,dt)},ge=o?Object.defineProperties:function(t,e){A(t);for(var r,n=ve(e),i=n.length,o=0;i>o;)L.f(t,r=n[o++],e[r]);return t},ye=rt("document","documentElement"),be=H("IE_PROTO"),me=function(){},xe=function(t){return"<script>"+t+"<\/script>"},Ee=function(){try{pe=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;Ee=pe?function(t){t.write(xe("")),t.close();var e=t.parentWindow.Object;return t=null,e}(pe):((e=w("iframe")).style.display="none",ye.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(xe("document.F=Object")),t.close(),t.F);for(var r=dt.length;r--;)delete Ee.prototype[dt[r]];return Ee()};q[be]=!0;var we=Object.create||function(t,e){var r;return null!==t?(me.prototype=A(t),r=new me,me.prototype=null,r[be]=t):r=Ee(),void 0===e?r:ge(r,e)},Oe=Nt("unscopables"),_e=Array.prototype;null==_e[Oe]&&L.f(_e,Oe,{configurable:!0,value:we(null)});var Se,Ae,ke,Le=function(t){_e[Oe][t]=!0},Me={},Te=!i((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),Re=H("IE_PROTO"),je=Object.prototype,Ce=Te?Object.getPrototypeOf:function(t){return t=Tt(t),m(t,Re)?t[Re]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?je:null},We=Nt("iterator"),ze=!1;[].keys&&("next"in(ke=[].keys())?(Ae=Ce(Ce(ke)))!==Object.prototype&&(Se=Ae):ze=!0),null==Se&&(Se={}),m(Se,We)||M(Se,We,(function(){return this}));var Ie={IteratorPrototype:Se,BUGGY_SAFARI_ITERATORS:ze},Ne=L.f,Pe=Nt("toStringTag"),De=function(t,e,r){t&&!m(t=r?t:t.prototype,Pe)&&Ne(t,Pe,{configurable:!0,value:e})},Fe=Ie.IteratorPrototype,Ve=function(){return this},Be=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return A(r),function(t){if(!g(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(n),e?t.call(r,n):r.__proto__=n,r}}():void 0),$e=Ie.IteratorPrototype,He=Ie.BUGGY_SAFARI_ITERATORS,qe=Nt("iterator"),Xe=function(){return this},Ue=function(t,e,r,n,i,o,s){!function(t,e,r){var n=e+" Iterator";t.prototype=we(Fe,{next:l(1,r)}),De(t,n,!1),Me[n]=Ve}(r,e,n);var a,c,u,f=function(t){if(t===i&&g)return g;if(!He&&t in p)return p[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},h=e+" Iterator",d=!1,p=t.prototype,v=p[qe]||p["@@iterator"]||i&&p[i],g=!He&&v||f(i),y="Array"==e&&p.entries||v;if(y&&(a=Ce(y.call(new t)),$e!==Object.prototype&&a.next&&(Ce(a)!==$e&&(Be?Be(a,$e):"function"!=typeof a[qe]&&M(a,qe,Xe)),De(a,h,!0))),"values"==i&&v&&"values"!==v.name&&(d=!0,g=function(){return v.call(this)}),p[qe]!==g&&M(p,qe,g),Me[e]=g,i)if(c={values:f("values"),keys:o?g:f("keys"),entries:f("entries")},s)for(u in c)!He&&!d&&u in p||Z(p,u,c[u]);else kt({target:e,proto:!0,forced:He||d},c);return c},Ye=J.set,Ge=J.getterFor("Array Iterator"),Ke=Ue(Array,"Array",(function(t,e){Ye(this,{type:"Array Iterator",target:v(t),index:0,kind:e})}),(function(){var t=Ge(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values");Me.Arguments=Me.Array,Le("keys"),Le("values"),Le("entries");var Qe=Object.assign,Je=Object.defineProperty,Ze=!Qe||i((function(){if(o&&1!==Qe({b:1},Qe(Je({},"a",{enumerable:!0,get:function(){Je(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol();return t[r]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=Qe({},t)[r]||"abcdefghijklmnopqrst"!=ve(Qe({},e)).join("")}))?function(t,e){for(var r=Tt(t),n=arguments.length,i=1,s=gt.f,a=c.f;n>i;)for(var l,u=d(arguments[i++]),f=s?ve(u).concat(s(u)):ve(u),h=f.length,p=0;h>p;)l=f[p++],o&&!a.call(u,l)||(r[l]=u[l]);return r}:Qe;kt({target:"Object",stat:!0,forced:Object.assign!==Ze},{assign:Ze});var tr={};tr[Nt("toStringTag")]="z";var er="[object z]"===String(tr),rr=Nt("toStringTag"),nr="Arguments"==f(function(){return arguments}()),ir=er?f:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),rr))?r:nr?f(e):"Object"==(n=f(e))&&"function"==typeof e.callee?"Arguments":n},or=er?{}.toString:function(){return"[object "+ir(this)+"]"};er||Z(Object.prototype,"toString",or,{unsafe:!0});var sr="\t\n\v\f\r                　\u2028\u2029\ufeff",ar="["+sr+"]",cr=RegExp("^"+ar+ar+"*"),lr=RegExp(ar+ar+"*$"),ur=function(t){return function(e){var r=String(p(e));return 1&t&&(r=r.replace(cr,"")),2&t&&(r=r.replace(lr,"")),r}},fr={start:ur(1),end:ur(2),trim:ur(3)}.trim,hr=n.parseInt,dr=/^[+-]?0[Xx]/,pr=8!==hr(sr+"08")||22!==hr(sr+"0x16")?function(t,e){var r=fr(String(t));return hr(r,e>>>0||(dr.test(r)?16:10))}:hr;kt({global:!0,forced:parseInt!=pr},{parseInt:pr});var vr=function(t){return function(e,r){var n,i,o=String(p(e)),s=ot(r),a=o.length;return s<0||s>=a?t?"":void 0:(n=o.charCodeAt(s))<55296||n>56319||s+1===a||(i=o.charCodeAt(s+1))<56320||i>57343?t?o.charAt(s):n:t?o.slice(s,s+2):i-56320+(n-55296<<10)+65536}},gr={codeAt:vr(!1),charAt:vr(!0)},yr=gr.charAt,br=J.set,mr=J.getterFor("String Iterator");Ue(String,"String",(function(t){br(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=mr(this),r=e.string,n=e.index;return n>=r.length?{value:void 0,done:!0}:(t=yr(r,n),e.index+=t.length,{value:t,done:!1})}));var xr=function(t,e,r){for(var n in e)Z(t,n,e[n],r);return t},Er=!i((function(){return Object.isExtensible(Object.preventExtensions({}))})),wr=e((function(t){var e=L.f,r=B("meta"),n=0,i=Object.isExtensible||function(){return!0},o=function(t){e(t,r,{value:{objectID:"O"+ ++n,weakData:{}}})},s=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!g(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!m(t,r)){if(!i(t))return"F";if(!e)return"E";o(t)}return t[r].objectID},getWeakData:function(t,e){if(!m(t,r)){if(!i(t))return!0;if(!e)return!1;o(t)}return t[r].weakData},onFreeze:function(t){return Er&&s.REQUIRED&&i(t)&&!m(t,r)&&o(t),t}};q[r]=!0})),Or=(wr.REQUIRED,wr.fastKey,wr.getWeakData,wr.onFreeze,Nt("iterator")),_r=Array.prototype,Sr=Nt("iterator"),Ar=function(t,e,r,n){try{return n?e(A(r)[0],r[1]):e(r)}catch(e){var i=t.return;throw void 0!==i&&A(i.call(t)),e}},kr=e((function(t){var e=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,r,n,i,o){var s,a,c,l,u,f,h,d,p=Mt(r,n,i?2:1);if(o)s=t;else{if("function"!=typeof(a=function(t){if(null!=t)return t[Sr]||t["@@iterator"]||Me[ir(t)]}(t)))throw TypeError("Target is not iterable");if(void 0!==(d=a)&&(Me.Array===d||_r[Or]===d)){for(c=0,l=at(t.length);l>c;c++)if((u=i?p(A(h=t[c])[0],h[1]):p(t[c]))&&u instanceof e)return u;return new e(!1)}s=a.call(t)}for(f=s.next;!(h=f.call(s)).done;)if("object"==typeof(u=Ar(s,p,h.value,i))&&u&&u instanceof e)return u;return new e(!1)}).stop=function(t){return new e(!0,t)}})),Lr=function(t,e,r){if(!(t instanceof e))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t},Mr=Nt("iterator"),Tr=!1;try{var Rr=0,jr={next:function(){return{done:!!Rr++}},return:function(){Tr=!0}};jr[Mr]=function(){return this},Array.from(jr,(function(){throw 2}))}catch(t){}var Cr=function(t,e,r){var o=-1!==t.indexOf("Map"),s=-1!==t.indexOf("Weak"),a=o?"set":"add",c=n[t],l=c&&c.prototype,u=c,f={},h=function(t){var e=l[t];Z(l,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(s&&!g(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return s&&!g(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(s&&!g(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(St(t,"function"!=typeof c||!(s||l.forEach&&!i((function(){(new c).entries().next()})))))u=r.getConstructor(e,t,o,a),wr.REQUIRED=!0;else if(St(t,!0)){var d=new u,p=d[a](s?{}:-0,1)!=d,v=i((function(){d.has(1)})),y=function(t,e){if(!e&&!Tr)return!1;var r=!1;try{var n={};n[Mr]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(t){}return r}((function(t){new c(t)})),b=!s&&i((function(){for(var t=new c,e=5;e--;)t[a](e,e);return!t.has(-0)}));y||((u=e((function(e,r){Lr(e,u,t);var n=function(t,e,r){var n,i;return Be&&"function"==typeof(n=e.constructor)&&n!==r&&g(i=n.prototype)&&i!==r.prototype&&Be(t,i),t}(new c,e,u);return null!=r&&kr(r,n[a],n,o),n}))).prototype=l,l.constructor=u),(v||b)&&(h("delete"),h("has"),o&&h("get")),(b||p)&&h(a),s&&l.clear&&delete l.clear}return f[t]=u,kt({global:!0,forced:u!=c},f),De(u,t),s||r.setStrong(u,t,o),u},Wr=wr.getWeakData,zr=J.set,Ir=J.getterFor,Nr=Bt.find,Pr=Bt.findIndex,Dr=0,Fr=function(t){return t.frozen||(t.frozen=new Vr)},Vr=function(){this.entries=[]},Br=function(t,e){return Nr(t.entries,(function(t){return t[0]===e}))};Vr.prototype={get:function(t){var e=Br(this,t);if(e)return e[1]},has:function(t){return!!Br(this,t)},set:function(t,e){var r=Br(this,t);r?r[1]=e:this.entries.push([t,e])},delete:function(t){var e=Pr(this.entries,(function(e){return e[0]===t}));return~e&&this.entries.splice(e,1),!!~e}};var $r={getConstructor:function(t,e,r,n){var i=t((function(t,o){Lr(t,i,e),zr(t,{type:e,id:Dr++,frozen:void 0}),null!=o&&kr(o,t[n],t,r)})),o=Ir(e),s=function(t,e,r){var n=o(t),i=Wr(A(e),!0);return!0===i?Fr(n).set(e,r):i[n.id]=r,t};return xr(i.prototype,{delete:function(t){var e=o(this);if(!g(t))return!1;var r=Wr(t);return!0===r?Fr(e).delete(t):r&&m(r,e.id)&&delete r[e.id]},has:function(t){var e=o(this);if(!g(t))return!1;var r=Wr(t);return!0===r?Fr(e).has(t):r&&m(r,e.id)}}),xr(i.prototype,r?{get:function(t){var e=o(this);if(g(t)){var r=Wr(t);return!0===r?Fr(e).get(t):r?r[e.id]:void 0}},set:function(t,e){return s(this,t,e)}}:{add:function(t){return s(this,t,!0)}}),i}},Hr=(e((function(t){var e,r=J.enforce,i=!n.ActiveXObject&&"ActiveXObject"in n,o=Object.isExtensible,s=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},a=t.exports=Cr("WeakMap",s,$r);if(P&&i){e=$r.getConstructor(s,"WeakMap",!0),wr.REQUIRED=!0;var c=a.prototype,l=c.delete,u=c.has,f=c.get,h=c.set;xr(c,{delete:function(t){if(g(t)&&!o(t)){var n=r(this);return n.frozen||(n.frozen=new e),l.call(this,t)||n.frozen.delete(t)}return l.call(this,t)},has:function(t){if(g(t)&&!o(t)){var n=r(this);return n.frozen||(n.frozen=new e),u.call(this,t)||n.frozen.has(t)}return u.call(this,t)},get:function(t){if(g(t)&&!o(t)){var n=r(this);return n.frozen||(n.frozen=new e),u.call(this,t)?f.call(this,t):n.frozen.get(t)}return f.call(this,t)},set:function(t,n){if(g(t)&&!o(t)){var i=r(this);i.frozen||(i.frozen=new e),u.call(this,t)?h.call(this,t,n):i.frozen.set(t,n)}else h.call(this,t,n);return this}})}})),Nt("iterator")),qr=Nt("toStringTag"),Xr=Ke.values;for(var Ur in Jt){var Yr=n[Ur],Gr=Yr&&Yr.prototype;if(Gr){if(Gr[Hr]!==Xr)try{M(Gr,Hr,Xr)}catch(t){Gr[Hr]=Xr}if(Gr[qr]||M(Gr,qr,Ur),Jt[Ur])for(var Kr in Ke)if(Gr[Kr]!==Ke[Kr])try{M(Gr,Kr,Ke[Kr])}catch(t){Gr[Kr]=Ke[Kr]}}}var Qr="Expected a function",Jr=NaN,Zr="[object Symbol]",tn=/^\s+|\s+$/g,en=/^[-+]0x[0-9a-f]+$/i,rn=/^0b[01]+$/i,nn=/^0o[0-7]+$/i,on=parseInt,sn="object"==typeof t&&t&&t.Object===Object&&t,an="object"==typeof self&&self&&self.Object===Object&&self,cn=sn||an||Function("return this")(),ln=Object.prototype.toString,un=Math.max,fn=Math.min,hn=function(){return cn.Date.now()};function dn(t,e,r){var n,i,o,s,a,c,l=0,u=!1,f=!1,h=!0;if("function"!=typeof t)throw new TypeError(Qr);function d(e){var r=n,o=i;return n=i=void 0,l=e,s=t.apply(o,r)}function p(t){var r=t-c;return void 0===c||r>=e||r<0||f&&t-l>=o}function v(){var t=hn();if(p(t))return g(t);a=setTimeout(v,function(t){var r=e-(t-c);return f?fn(r,o-(t-l)):r}(t))}function g(t){return a=void 0,h&&n?d(t):(n=i=void 0,s)}function y(){var t=hn(),r=p(t);if(n=arguments,i=this,c=t,r){if(void 0===a)return function(t){return l=t,a=setTimeout(v,e),u?d(t):s}(c);if(f)return a=setTimeout(v,e),d(c)}return void 0===a&&(a=setTimeout(v,e)),s}return e=vn(e)||0,pn(r)&&(u=!!r.leading,o=(f="maxWait"in r)?un(vn(r.maxWait)||0,e):o,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=c=i=a=void 0},y.flush=function(){return void 0===a?s:g(hn())},y}function pn(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function vn(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&ln.call(t)==Zr}(t))return Jr;if(pn(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=pn(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(tn,"");var r=rn.test(t);return r||nn.test(t)?on(t.slice(2),r?2:8):en.test(t)?Jr:+t}var gn=function(t,e,r){var n=!0,i=!0;if("function"!=typeof t)throw new TypeError(Qr);return pn(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),dn(t,e,{leading:n,maxWait:e,trailing:i})},yn="Expected a function",bn=NaN,mn="[object Symbol]",xn=/^\s+|\s+$/g,En=/^[-+]0x[0-9a-f]+$/i,wn=/^0b[01]+$/i,On=/^0o[0-7]+$/i,_n=parseInt,Sn="object"==typeof t&&t&&t.Object===Object&&t,An="object"==typeof self&&self&&self.Object===Object&&self,kn=Sn||An||Function("return this")(),Ln=Object.prototype.toString,Mn=Math.max,Tn=Math.min,Rn=function(){return kn.Date.now()};function jn(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Cn(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&Ln.call(t)==mn}(t))return bn;if(jn(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=jn(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(xn,"");var r=wn.test(t);return r||On.test(t)?_n(t.slice(2),r?2:8):En.test(t)?bn:+t}var Wn=function(t,e,r){var n,i,o,s,a,c,l=0,u=!1,f=!1,h=!0;if("function"!=typeof t)throw new TypeError(yn);function d(e){var r=n,o=i;return n=i=void 0,l=e,s=t.apply(o,r)}function p(t){var r=t-c;return void 0===c||r>=e||r<0||f&&t-l>=o}function v(){var t=Rn();if(p(t))return g(t);a=setTimeout(v,function(t){var r=e-(t-c);return f?Tn(r,o-(t-l)):r}(t))}function g(t){return a=void 0,h&&n?d(t):(n=i=void 0,s)}function y(){var t=Rn(),r=p(t);if(n=arguments,i=this,c=t,r){if(void 0===a)return function(t){return l=t,a=setTimeout(v,e),u?d(t):s}(c);if(f)return a=setTimeout(v,e),d(c)}return void 0===a&&(a=setTimeout(v,e)),s}return e=Cn(e)||0,jn(r)&&(u=!!r.leading,o=(f="maxWait"in r)?Mn(Cn(r.maxWait)||0,e):o,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=c=i=a=void 0},y.flush=function(){return void 0===a?s:g(Rn())},y},zn="Expected a function",In="__lodash_hash_undefined__",Nn="[object Function]",Pn="[object GeneratorFunction]",Dn=/^\[object .+?Constructor\]$/,Fn="object"==typeof t&&t&&t.Object===Object&&t,Vn="object"==typeof self&&self&&self.Object===Object&&self,Bn=Fn||Vn||Function("return this")();var $n=Array.prototype,Hn=Function.prototype,qn=Object.prototype,Xn=Bn["__core-js_shared__"],Un=function(){var t=/[^.]+$/.exec(Xn&&Xn.keys&&Xn.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Yn=Hn.toString,Gn=qn.hasOwnProperty,Kn=qn.toString,Qn=RegExp("^"+Yn.call(Gn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Jn=$n.splice,Zn=ai(Bn,"Map"),ti=ai(Object,"create");function ei(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ri(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ni(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ii(t,e){for(var r,n,i=t.length;i--;)if((r=t[i][0])===(n=e)||r!=r&&n!=n)return i;return-1}function oi(t){return!(!li(t)||(e=t,Un&&Un in e))&&(function(t){var e=li(t)?Kn.call(t):"";return e==Nn||e==Pn}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?Qn:Dn).test(function(t){if(null!=t){try{return Yn.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function si(t,e){var r,n,i=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof e?"string":"hash"]:i.map}function ai(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return oi(r)?r:void 0}function ci(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(zn);var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=t.apply(this,n);return r.cache=o.set(i,s),s};return r.cache=new(ci.Cache||ni),r}function li(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}ei.prototype.clear=function(){this.__data__=ti?ti(null):{}},ei.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ei.prototype.get=function(t){var e=this.__data__;if(ti){var r=e[t];return r===In?void 0:r}return Gn.call(e,t)?e[t]:void 0},ei.prototype.has=function(t){var e=this.__data__;return ti?void 0!==e[t]:Gn.call(e,t)},ei.prototype.set=function(t,e){return this.__data__[t]=ti&&void 0===e?In:e,this},ri.prototype.clear=function(){this.__data__=[]},ri.prototype.delete=function(t){var e=this.__data__,r=ii(e,t);return!(r<0)&&(r==e.length-1?e.pop():Jn.call(e,r,1),!0)},ri.prototype.get=function(t){var e=this.__data__,r=ii(e,t);return r<0?void 0:e[r][1]},ri.prototype.has=function(t){return ii(this.__data__,t)>-1},ri.prototype.set=function(t,e){var r=this.__data__,n=ii(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},ni.prototype.clear=function(){this.__data__={hash:new ei,map:new(Zn||ri),string:new ei}},ni.prototype.delete=function(t){return si(this,t).delete(t)},ni.prototype.get=function(t){return si(this,t).get(t)},ni.prototype.has=function(t){return si(this,t).has(t)},ni.prototype.set=function(t,e){return si(this,t).set(t,e),this},ci.Cache=ni;var ui=ci,fi=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var r=-1;return t.some((function(t,n){return t[0]===e&&(r=n,!0)})),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var r=t(this.__entries__,e),n=this.__entries__[r];return n&&n[1]},e.prototype.set=function(e,r){var n=t(this.__entries__,e);~n?this.__entries__[n][1]=r:this.__entries__.push([e,r])},e.prototype.delete=function(e){var r=this.__entries__,n=t(r,e);~n&&r.splice(n,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var r=0,n=this.__entries__;r<n.length;r++){var i=n[r];t.call(e,i[1],i[0])}},e}()}(),hi="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,di="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),pi="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(di):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},vi=2;var gi=20,yi=["top","right","bottom","left","width","height","size","weight"],bi="undefined"!=typeof MutationObserver,mi=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var r=!1,n=!1,i=0;function o(){r&&(r=!1,t()),n&&a()}function s(){pi(o)}function a(){var t=Date.now();if(r){if(t-i<vi)return;n=!0}else r=!0,n=!1,setTimeout(s,e);i=t}return a}(this.refresh.bind(this),gi)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,r=e.indexOf(t);~r&&e.splice(r,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){hi&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),bi?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){hi&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,r=void 0===e?"":e;yi.some((function(t){return!!~r.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),xi=function(t,e){for(var r=0,n=Object.keys(e);r<n.length;r++){var i=n[r];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},Ei=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||di},wi=Li(0,0,0,0);function Oi(t){return parseFloat(t)||0}function _i(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e.reduce((function(e,r){return e+Oi(t["border-"+r+"-width"])}),0)}function Si(t){var e=t.clientWidth,r=t.clientHeight;if(!e&&!r)return wi;var n=Ei(t).getComputedStyle(t),i=function(t){for(var e={},r=0,n=["top","right","bottom","left"];r<n.length;r++){var i=n[r],o=t["padding-"+i];e[i]=Oi(o)}return e}(n),o=i.left+i.right,s=i.top+i.bottom,a=Oi(n.width),c=Oi(n.height);if("border-box"===n.boxSizing&&(Math.round(a+o)!==e&&(a-=_i(n,"left","right")+o),Math.round(c+s)!==r&&(c-=_i(n,"top","bottom")+s)),!function(t){return t===Ei(t).document.documentElement}(t)){var l=Math.round(a+o)-e,u=Math.round(c+s)-r;1!==Math.abs(l)&&(a-=l),1!==Math.abs(u)&&(c-=u)}return Li(i.left,i.top,a,c)}var Ai="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof Ei(t).SVGGraphicsElement}:function(t){return t instanceof Ei(t).SVGElement&&"function"==typeof t.getBBox};function ki(t){return hi?Ai(t)?function(t){var e=t.getBBox();return Li(0,0,e.width,e.height)}(t):Si(t):wi}function Li(t,e,r,n){return{x:t,y:e,width:r,height:n}}var Mi=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Li(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=ki(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),Ti=function(t,e){var r,n,i,o,s,a,c,l=(n=(r=e).x,i=r.y,o=r.width,s=r.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),xi(c,{x:n,y:i,width:o,height:s,top:i,right:n+o,bottom:s+i,left:n}),c);xi(this,{target:t,contentRect:l})},Ri=function(){function t(t,e,r){if(this.activeObservations_=[],this.observations_=new fi,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=r}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Ei(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new Mi(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Ei(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new Ti(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),ji="undefined"!=typeof WeakMap?new WeakMap:new fi,Ci=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=mi.getInstance(),n=new Ri(e,r,this);ji.set(this,n)};["observe","unobserve","disconnect"].forEach((function(t){Ci.prototype[t]=function(){var e;return(e=ji.get(this))[t].apply(e,arguments)}}));var Wi=void 0!==di.ResizeObserver?di.ResizeObserver:Ci,zi=null,Ii=null;function Ni(){if(null===zi){if("undefined"==typeof document)return zi=0;var t=document.body,e=document.createElement("div");e.classList.add("simplebar-hide-scrollbar"),t.appendChild(e);var r=e.getBoundingClientRect().right;t.removeChild(e),zi=r}return zi}ie&&window.addEventListener("resize",(function(){Ii!==window.devicePixelRatio&&(Ii=window.devicePixelRatio,zi=null)}));var Pi=function(t){return function(e,r,n,i){Lt(r);var o=Tt(e),s=d(o),a=at(o.length),c=t?a-1:0,l=t?-1:1;if(n<2)for(;;){if(c in s){i=s[c],c+=l;break}if(c+=l,t?c<0:a<=c)throw TypeError("Reduce of empty array with no initial value")}for(;t?c>=0:a>c;c+=l)c in s&&(i=r(i,s[c],c,o));return i}},Di={left:Pi(!1),right:Pi(!0)}.left,Fi=$t("reduce"),Vi=Ut("reduce",{1:0});kt({target:"Array",proto:!0,forced:!Fi||!Vi},{reduce:function(t){return Di(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}});var Bi=L.f,$i=Function.prototype,Hi=$i.toString,qi=/^\s*function ([^ (]*)/;!o||"name"in $i||Bi($i,"name",{configurable:!0,get:function(){try{return Hi.call(this).match(qi)[1]}catch(t){return""}}});var Xi=function(){var t=A(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function Ui(t,e){return RegExp(t,e)}var Yi,Gi,Ki={UNSUPPORTED_Y:i((function(){var t=Ui("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:i((function(){var t=Ui("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},Qi=RegExp.prototype.exec,Ji=String.prototype.replace,Zi=Qi,to=(Yi=/a/,Gi=/b*/g,Qi.call(Yi,"a"),Qi.call(Gi,"a"),0!==Yi.lastIndex||0!==Gi.lastIndex),eo=Ki.UNSUPPORTED_Y||Ki.BROKEN_CARET,ro=void 0!==/()??/.exec("")[1];(to||ro||eo)&&(Zi=function(t){var e,r,n,i,o=this,s=eo&&o.sticky,a=Xi.call(o),c=o.source,l=0,u=t;return s&&(-1===(a=a.replace("y","")).indexOf("g")&&(a+="g"),u=String(t).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==t[o.lastIndex-1])&&(c="(?: "+c+")",u=" "+u,l++),r=new RegExp("^(?:"+c+")",a)),ro&&(r=new RegExp("^"+c+"$(?!\\s)",a)),to&&(e=o.lastIndex),n=Qi.call(s?r:o,u),s?n?(n.input=n.input.slice(l),n[0]=n[0].slice(l),n.index=o.lastIndex,o.lastIndex+=n[0].length):o.lastIndex=0:to&&n&&(o.lastIndex=o.global?n.index+n[0].length:e),ro&&n&&n.length>1&&Ji.call(n[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(n[i]=void 0)})),n});var no=Zi;kt({target:"RegExp",proto:!0,forced:/./.exec!==no},{exec:no});var io=Nt("species"),oo=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),so="$0"==="a".replace(/./,"$0"),ao=Nt("replace"),co=!!/./[ao]&&""===/./[ao]("a","$0"),lo=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]})),uo=function(t,e,r,n){var o=Nt(t),s=!i((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),a=s&&!i((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[io]=function(){return r},r.flags="",r[o]=/./[o]),r.exec=function(){return e=!0,null},r[o](""),!e}));if(!s||!a||"replace"===t&&(!oo||!so||co)||"split"===t&&!lo){var c=/./[o],l=r(o,""[t],(function(t,e,r,n,i){return e.exec===no?s&&!i?{done:!0,value:c.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:so,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:co}),u=l[0],f=l[1];Z(String.prototype,t,u),Z(RegExp.prototype,o,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)})}n&&M(RegExp.prototype[o],"sham",!0)},fo=gr.charAt,ho=function(t,e,r){return e+(r?fo(t,e).length:1)},po=function(t,e){var r=t.exec;if("function"==typeof r){var n=r.call(t,e);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==f(t))throw TypeError("RegExp#exec called on incompatible receiver");return no.call(t,e)};uo("match",1,(function(t,e,r){return[function(e){var r=p(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var i=A(t),o=String(this);if(!i.global)return po(i,o);var s=i.unicode;i.lastIndex=0;for(var a,c=[],l=0;null!==(a=po(i,o));){var u=String(a[0]);c[l]=u,""===u&&(i.lastIndex=ho(o,at(i.lastIndex),s)),l++}return 0===l?null:c}]}));var vo=Math.max,go=Math.min,yo=Math.floor,bo=/\$([$&'`]|\d\d?|<[^>]*>)/g,mo=/\$([$&'`]|\d\d?)/g;uo("replace",2,(function(t,e,r,n){var i=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,o=n.REPLACE_KEEPS_$0,s=i?"$":"$0";return[function(r,n){var i=p(this),o=null==r?void 0:r[t];return void 0!==o?o.call(r,i,n):e.call(String(i),r,n)},function(t,n){if(!i&&o||"string"==typeof n&&-1===n.indexOf(s)){var c=r(e,t,this,n);if(c.done)return c.value}var l=A(t),u=String(this),f="function"==typeof n;f||(n=String(n));var h=l.global;if(h){var d=l.unicode;l.lastIndex=0}for(var p=[];;){var v=po(l,u);if(null===v)break;if(p.push(v),!h)break;""===String(v[0])&&(l.lastIndex=ho(u,at(l.lastIndex),d))}for(var g,y="",b=0,m=0;m<p.length;m++){v=p[m];for(var x=String(v[0]),E=vo(go(ot(v.index),u.length),0),w=[],O=1;O<v.length;O++)w.push(void 0===(g=v[O])?g:String(g));var _=v.groups;if(f){var S=[x].concat(w,E,u);void 0!==_&&S.push(_);var k=String(n.apply(void 0,S))}else k=a(x,u,E,w,_,n);E>=b&&(y+=u.slice(b,E)+k,b=E+x.length)}return y+u.slice(b)}];function a(t,r,n,i,o,s){var a=n+t.length,c=i.length,l=mo;return void 0!==o&&(o=Tt(o),l=bo),e.call(s,l,(function(e,s){var l;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(a);case"<":l=o[s.slice(1,-1)];break;default:var u=+s;if(0===u)return e;if(u>c){var f=yo(u/10);return 0===f?e:f<=c?void 0===i[f-1]?s.charAt(1):i[f-1]+s.charAt(1):e}l=i[u-1]}return void 0===l?"":l}))}}));var xo=function(t){return Array.prototype.reduce.call(t,(function(t,e){var r=e.name.match(/data-simplebar-(.+)/);if(r){var n=r[1].replace(/\W+(.)/g,(function(t,e){return e.toUpperCase()}));switch(e.value){case"true":t[n]=!0;break;case"false":t[n]=!1;break;case void 0:t[n]=!0;break;default:t[n]=e.value}}return t}),{})};function Eo(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView?t.ownerDocument.defaultView:window}function wo(t){return t&&t.ownerDocument?t.ownerDocument:document}var Oo=function(){function t(e,r){var n=this;this.onScroll=function(){var t=Eo(n.el);n.scrollXTicking||(t.requestAnimationFrame(n.scrollX),n.scrollXTicking=!0),n.scrollYTicking||(t.requestAnimationFrame(n.scrollY),n.scrollYTicking=!0)},this.scrollX=function(){n.axis.x.isOverflowing&&(n.showScrollbar("x"),n.positionScrollbar("x")),n.scrollXTicking=!1},this.scrollY=function(){n.axis.y.isOverflowing&&(n.showScrollbar("y"),n.positionScrollbar("y")),n.scrollYTicking=!1},this.onMouseEnter=function(){n.showScrollbar("x"),n.showScrollbar("y")},this.onMouseMove=function(t){n.mouseX=t.clientX,n.mouseY=t.clientY,(n.axis.x.isOverflowing||n.axis.x.forceVisible)&&n.onMouseMoveForAxis("x"),(n.axis.y.isOverflowing||n.axis.y.forceVisible)&&n.onMouseMoveForAxis("y")},this.onMouseLeave=function(){n.onMouseMove.cancel(),(n.axis.x.isOverflowing||n.axis.x.forceVisible)&&n.onMouseLeaveForAxis("x"),(n.axis.y.isOverflowing||n.axis.y.forceVisible)&&n.onMouseLeaveForAxis("y"),n.mouseX=-1,n.mouseY=-1},this.onWindowResize=function(){n.scrollbarWidth=n.getScrollbarWidth(),n.hideNativeScrollbar()},this.hideScrollbars=function(){n.axis.x.track.rect=n.axis.x.track.el.getBoundingClientRect(),n.axis.y.track.rect=n.axis.y.track.el.getBoundingClientRect(),n.isWithinBounds(n.axis.y.track.rect)||(n.axis.y.scrollbar.el.classList.remove(n.classNames.visible),n.axis.y.isVisible=!1),n.isWithinBounds(n.axis.x.track.rect)||(n.axis.x.scrollbar.el.classList.remove(n.classNames.visible),n.axis.x.isVisible=!1)},this.onPointerEvent=function(t){var e,r;n.axis.x.track.rect=n.axis.x.track.el.getBoundingClientRect(),n.axis.y.track.rect=n.axis.y.track.el.getBoundingClientRect(),(n.axis.x.isOverflowing||n.axis.x.forceVisible)&&(e=n.isWithinBounds(n.axis.x.track.rect)),(n.axis.y.isOverflowing||n.axis.y.forceVisible)&&(r=n.isWithinBounds(n.axis.y.track.rect)),(e||r)&&(t.preventDefault(),t.stopPropagation(),"mousedown"===t.type&&(e&&(n.axis.x.scrollbar.rect=n.axis.x.scrollbar.el.getBoundingClientRect(),n.isWithinBounds(n.axis.x.scrollbar.rect)?n.onDragStart(t,"x"):n.onTrackClick(t,"x")),r&&(n.axis.y.scrollbar.rect=n.axis.y.scrollbar.el.getBoundingClientRect(),n.isWithinBounds(n.axis.y.scrollbar.rect)?n.onDragStart(t,"y"):n.onTrackClick(t,"y"))))},this.drag=function(e){var r=n.axis[n.draggedAxis].track,i=r.rect[n.axis[n.draggedAxis].sizeAttr],o=n.axis[n.draggedAxis].scrollbar,s=n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr],a=parseInt(n.elStyles[n.axis[n.draggedAxis].sizeAttr],10);e.preventDefault(),e.stopPropagation();var c=(("y"===n.draggedAxis?e.pageY:e.pageX)-r.rect[n.axis[n.draggedAxis].offsetAttr]-n.axis[n.draggedAxis].dragOffset)/(i-o.size)*(s-a);"x"===n.draggedAxis&&(c=n.isRtl&&t.getRtlHelpers().isRtlScrollbarInverted?c-(i+o.size):c,c=n.isRtl&&t.getRtlHelpers().isRtlScrollingInverted?-c:c),n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr]=c},this.onEndDrag=function(t){var e=wo(n.el),r=Eo(n.el);t.preventDefault(),t.stopPropagation(),n.el.classList.remove(n.classNames.dragging),e.removeEventListener("mousemove",n.drag,!0),e.removeEventListener("mouseup",n.onEndDrag,!0),n.removePreventClickId=r.setTimeout((function(){e.removeEventListener("click",n.preventClick,!0),e.removeEventListener("dblclick",n.preventClick,!0),n.removePreventClickId=null}))},this.preventClick=function(t){t.preventDefault(),t.stopPropagation()},this.el=e,this.minScrollbarWidth=20,this.options=Object.assign({},t.defaultOptions,{},r),this.classNames=Object.assign({},t.defaultOptions.classNames,{},this.options.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}}},this.removePreventClickId=null,t.instances.has(this.el)||(this.recalculate=gn(this.recalculate.bind(this),64),this.onMouseMove=gn(this.onMouseMove.bind(this),64),this.hideScrollbars=Wn(this.hideScrollbars.bind(this),this.options.timeout),this.onWindowResize=Wn(this.onWindowResize.bind(this),64,{leading:!0}),t.getRtlHelpers=ui(t.getRtlHelpers),this.init())}t.getRtlHelpers=function(){var e=document.createElement("div");e.innerHTML='<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';var r=e.firstElementChild;document.body.appendChild(r);var n=r.firstElementChild;r.scrollLeft=0;var i=t.getOffset(r),o=t.getOffset(n);r.scrollLeft=999;var s=t.getOffset(n);return{isRtlScrollingInverted:i.left!==o.left&&o.left-s.left!=0,isRtlScrollbarInverted:i.left!==o.left}},t.getOffset=function(t){var e=t.getBoundingClientRect(),r=wo(t),n=Eo(t);return{top:e.top+(n.pageYOffset||r.documentElement.scrollTop),left:e.left+(n.pageXOffset||r.documentElement.scrollLeft)}};var e=t.prototype;return e.init=function(){t.instances.set(this.el,this),ie&&(this.initDOM(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},e.initDOM=function(){var t=this;if(Array.prototype.filter.call(this.el.children,(function(e){return e.classList.contains(t.classNames.wrapper)})).length)this.wrapperEl=this.el.querySelector("."+this.classNames.wrapper),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector("."+this.classNames.contentWrapper),this.contentEl=this.options.contentNode||this.el.querySelector("."+this.classNames.contentEl),this.offsetEl=this.el.querySelector("."+this.classNames.offset),this.maskEl=this.el.querySelector("."+this.classNames.mask),this.placeholderEl=this.findChild(this.wrapperEl,"."+this.classNames.placeholder),this.heightAutoObserverWrapperEl=this.el.querySelector("."+this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl=this.el.querySelector("."+this.classNames.heightAutoObserverEl),this.axis.x.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.horizontal),this.axis.y.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.vertical);else{for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),this.wrapperEl.classList.add(this.classNames.wrapper),this.contentWrapperEl.classList.add(this.classNames.contentWrapper),this.offsetEl.classList.add(this.classNames.offset),this.maskEl.classList.add(this.classNames.mask),this.contentEl.classList.add(this.classNames.contentEl),this.placeholderEl.classList.add(this.classNames.placeholder),this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl)}if(!this.axis.x.track.el||!this.axis.y.track.el){var e=document.createElement("div"),r=document.createElement("div");e.classList.add(this.classNames.track),r.classList.add(this.classNames.scrollbar),e.appendChild(r),this.axis.x.track.el=e.cloneNode(!0),this.axis.x.track.el.classList.add(this.classNames.horizontal),this.axis.y.track.el=e.cloneNode(!0),this.axis.y.track.el.classList.add(this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}this.axis.x.scrollbar.el=this.axis.x.track.el.querySelector("."+this.classNames.scrollbar),this.axis.y.scrollbar.el=this.axis.y.track.el.querySelector("."+this.classNames.scrollbar),this.options.autoHide||(this.axis.x.scrollbar.el.classList.add(this.classNames.visible),this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),this.el.setAttribute("data-simplebar","init")},e.initListeners=function(){var t=this,e=Eo(this.el);this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach((function(e){t.el.addEventListener(e,t.onPointerEvent,!0)})),["touchstart","touchend","touchmove"].forEach((function(e){t.el.addEventListener(e,t.onPointerEvent,{capture:!0,passive:!0})})),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl.addEventListener("scroll",this.onScroll),e.addEventListener("resize",this.onWindowResize);var r=!1,n=e.ResizeObserver||Wi;this.resizeObserver=new n((function(){r&&t.recalculate()})),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),e.requestAnimationFrame((function(){r=!0})),this.mutationObserver=new e.MutationObserver(this.recalculate),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})},e.recalculate=function(){var t=Eo(this.el);this.elStyles=t.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction;var e=this.contentEl.offsetWidth,r=this.heightAutoObserverEl.offsetHeight<=1,n=this.heightAutoObserverEl.offsetWidth<=1||e>0,i=this.contentWrapperEl.offsetWidth,o=this.elStyles.overflowX,s=this.elStyles.overflowY;this.contentEl.style.padding=this.elStyles.paddingTop+" "+this.elStyles.paddingRight+" "+this.elStyles.paddingBottom+" "+this.elStyles.paddingLeft,this.wrapperEl.style.margin="-"+this.elStyles.paddingTop+" -"+this.elStyles.paddingRight+" -"+this.elStyles.paddingBottom+" -"+this.elStyles.paddingLeft;var a=this.contentEl.scrollHeight,c=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=r?"auto":"100%",this.placeholderEl.style.width=n?(e||c)+"px":"auto",this.placeholderEl.style.height=a+"px";var l=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=0!==e&&c>e,this.axis.y.isOverflowing=a>l,this.axis.x.isOverflowing="hidden"!==o&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==s&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar();var u=this.axis.x.isOverflowing?this.scrollbarWidth:0,f=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&c>i-f,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&a>l-u,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el.style.width=this.axis.x.scrollbar.size+"px",this.axis.y.scrollbar.el.style.height=this.axis.y.scrollbar.size+"px",this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")},e.getScrollbarSize=function(t){if(void 0===t&&(t="y"),!this.axis[t].isOverflowing)return 0;var e,r=this.contentEl[this.axis[t].scrollSizeAttr],n=this.axis[t].track.el[this.axis[t].offsetSizeAttr],i=n/r;return e=Math.max(~~(i*n),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(e=Math.min(e,this.options.scrollbarMaxSize)),e},e.positionScrollbar=function(e){if(void 0===e&&(e="y"),this.axis[e].isOverflowing){var r=this.contentWrapperEl[this.axis[e].scrollSizeAttr],n=this.axis[e].track.el[this.axis[e].offsetSizeAttr],i=parseInt(this.elStyles[this.axis[e].sizeAttr],10),o=this.axis[e].scrollbar,s=this.contentWrapperEl[this.axis[e].scrollOffsetAttr],a=(s="x"===e&&this.isRtl&&t.getRtlHelpers().isRtlScrollingInverted?-s:s)/(r-i),c=~~((n-o.size)*a);c="x"===e&&this.isRtl&&t.getRtlHelpers().isRtlScrollbarInverted?c+(n-o.size):c,o.el.style.transform="x"===e?"translate3d("+c+"px, 0, 0)":"translate3d(0, "+c+"px, 0)"}},e.toggleTrackVisibility=function(t){void 0===t&&(t="y");var e=this.axis[t].track.el,r=this.axis[t].scrollbar.el;this.axis[t].isOverflowing||this.axis[t].forceVisible?(e.style.visibility="visible",this.contentWrapperEl.style[this.axis[t].overflowAttr]="scroll"):(e.style.visibility="hidden",this.contentWrapperEl.style[this.axis[t].overflowAttr]="hidden"),this.axis[t].isOverflowing?r.style.display="block":r.style.display="none"},e.hideNativeScrollbar=function(){this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-"+this.scrollbarWidth+"px":0,this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-"+this.scrollbarWidth+"px":0},e.onMouseMoveForAxis=function(t){void 0===t&&(t="y"),this.axis[t].track.rect=this.axis[t].track.el.getBoundingClientRect(),this.axis[t].scrollbar.rect=this.axis[t].scrollbar.el.getBoundingClientRect(),this.isWithinBounds(this.axis[t].scrollbar.rect)?this.axis[t].scrollbar.el.classList.add(this.classNames.hover):this.axis[t].scrollbar.el.classList.remove(this.classNames.hover),this.isWithinBounds(this.axis[t].track.rect)?(this.showScrollbar(t),this.axis[t].track.el.classList.add(this.classNames.hover)):this.axis[t].track.el.classList.remove(this.classNames.hover)},e.onMouseLeaveForAxis=function(t){void 0===t&&(t="y"),this.axis[t].track.el.classList.remove(this.classNames.hover),this.axis[t].scrollbar.el.classList.remove(this.classNames.hover)},e.showScrollbar=function(t){void 0===t&&(t="y");var e=this.axis[t].scrollbar.el;this.axis[t].isVisible||(e.classList.add(this.classNames.visible),this.axis[t].isVisible=!0),this.options.autoHide&&this.hideScrollbars()},e.onDragStart=function(t,e){void 0===e&&(e="y");var r=wo(this.el),n=Eo(this.el),i=this.axis[e].scrollbar,o="y"===e?t.pageY:t.pageX;this.axis[e].dragOffset=o-i.rect[this.axis[e].offsetAttr],this.draggedAxis=e,this.el.classList.add(this.classNames.dragging),r.addEventListener("mousemove",this.drag,!0),r.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(r.addEventListener("click",this.preventClick,!0),r.addEventListener("dblclick",this.preventClick,!0)):(n.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},e.onTrackClick=function(t,e){var r=this;if(void 0===e&&(e="y"),this.options.clickOnTrack){var n=Eo(this.el);this.axis[e].scrollbar.rect=this.axis[e].scrollbar.el.getBoundingClientRect();var i=this.axis[e].scrollbar.rect[this.axis[e].offsetAttr],o=parseInt(this.elStyles[this.axis[e].sizeAttr],10),s=this.contentWrapperEl[this.axis[e].scrollOffsetAttr],a=("y"===e?this.mouseY-i:this.mouseX-i)<0?-1:1,c=-1===a?s-o:s+o;!function t(){var i,o;-1===a?s>c&&(s-=40,r.contentWrapperEl.scrollTo(((i={})[r.axis[e].offsetAttr]=s,i)),n.requestAnimationFrame(t)):s<c&&(s+=40,r.contentWrapperEl.scrollTo(((o={})[r.axis[e].offsetAttr]=s,o)),n.requestAnimationFrame(t))}()}},e.getContentElement=function(){return this.contentEl},e.getScrollElement=function(){return this.contentWrapperEl},e.getScrollbarWidth=function(){try{return"none"===getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:Ni()}catch(t){return Ni()}},e.removeListeners=function(){var t=this,e=Eo(this.el);this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach((function(e){t.el.removeEventListener(e,t.onPointerEvent,!0)})),["touchstart","touchend","touchmove"].forEach((function(e){t.el.removeEventListener(e,t.onPointerEvent,{capture:!0,passive:!0})})),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onWindowResize),this.mutationObserver.disconnect(),this.resizeObserver.disconnect(),this.recalculate.cancel(),this.onMouseMove.cancel(),this.hideScrollbars.cancel(),this.onWindowResize.cancel()},e.unMount=function(){this.removeListeners(),t.instances.delete(this.el)},e.isWithinBounds=function(t){return this.mouseX>=t.left&&this.mouseX<=t.left+t.width&&this.mouseY>=t.top&&this.mouseY<=t.top+t.height},e.findChild=function(t,e){var r=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;return Array.prototype.filter.call(t.children,(function(t){return r.call(t,e)}))[0]},t}();return Oo.defaultOptions={autoHide:!0,forceVisible:!1,clickOnTrack:!0,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging"},scrollbarMinSize:25,scrollbarMaxSize:0,timeout:1e3},Oo.instances=new WeakMap,Oo.initDOMLoadedElements=function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]:not([data-simplebar="init"])'),(function(t){Oo.instances.has(t)||new Oo(t,xo(t.attributes))}))},Oo.removeObserver=function(){this.globalObserver.disconnect()},Oo.initHtmlApi=function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(Oo.handleMutations),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))},Oo.handleMutations=function(t){t.forEach((function(t){Array.prototype.forEach.call(t.addedNodes,(function(t){1===t.nodeType&&(t.hasAttribute("data-simplebar")?!Oo.instances.has(t)&&new Oo(t,xo(t.attributes)):Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar]:not([data-simplebar="init"])'),(function(t){!Oo.instances.has(t)&&new Oo(t,xo(t.attributes))})))})),Array.prototype.forEach.call(t.removedNodes,(function(t){1===t.nodeType&&(t.hasAttribute('[data-simplebar="init"]')?Oo.instances.has(t)&&Oo.instances.get(t).unMount():Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'),(function(t){Oo.instances.has(t)&&Oo.instances.get(t).unMount()})))}))}))},Oo.getOptions=xo,ie&&Oo.initHtmlApi(),Oo}));// GLOBALS
let editor = localStorage.getItem("editor") === null ? defaultPreset : JSON.parse(localStorage.getItem("editor"));
let currentOverlay = "none";
const defaultLevel = "Levels/Main_Menu.level";
const requiredKeys = "-csg -binary -Set UseHostComm=false -wiiprofilermem 0 -nexusip 0.0.0.0 -Set StartInMainMenu=false -Set EnableRenderProfiling=false -Set HUDDisplaySafeFrame=false -Set WiiRemoteSleepTime=5 -Set OutOfMemoryBoxOfDoom=false -Set DisplayAIMemoryInfo=false -Set MaximizeJigsawAIMemory=false -Set ApprenticeSkip=false -Set ShowDevLevelLoad=false -Set AudioAllowSpillover=false";
const bootLevelMagicWord = "BOOT LEVEL";

// Allow only 0-9, periods, and minus signs on inputs
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode === 45) {
        return true;
    }
    if (charCode !== 46 && charCode > 31 && charCode < 48 || charCode > 57) {
        return false;
    }
    return true;
}

// Close any open overlays
function closeOverlay() {
    document.querySelector(".overlay-mixins").classList.remove("show-flex");
    document.querySelector(".overlay-presets").classList.remove("show-flex");
    document.querySelector(".darken").classList.remove("show");
}

// Check if the active element is an input field
function clickingField() {
    return document.activeElement.classList.contains("key") || document.activeElement.classList.contains("value");
}

////////////// Editor
// Refresh the editor using the data from the editor variable
function updateEditor() {
    const editorSelector = document.querySelector(".editor");
    editorSelector.innerHTML = "";
    // add items
    editor.forEach(function(item){
        editorSelector.insertAdjacentHTML("beforeend", returnItemHTML(item.key, item.value));
    });
    // event listeners for items
    const itemSelector = document.querySelectorAll(".item");
    itemSelector.forEach(function(element){
        // on input, run dictionary() and save the editor to the editor variable
        element.addEventListener("input", function() {
            editorToMemory();
            dictionary();
        });
        // on focus out, remove dictionary
        element.addEventListener("focusout", function() {
            removeDictionary();
        });
        // on focus in, run dictionary()
        element.addEventListener("focusin", function() {
            if (clickingField()) {
                dictionary();
            }
        });
        // on click, run dictionary()
        element.addEventListener("click", function() {
            // only run dictionary() if the user is clicking on an input
            if (clickingField()) {
                dictionary();
            }
        });
        // on click (remove button)
        element.querySelector(".remove").addEventListener("click", function() {
            removeItem(element);
            removeDictionary();
        });
    });
}

// Return the individual item HTML for the editor UI. Used primarily in updateEditor()
function returnItemHTML(key, value) {
    if (returnKeyType(key) === "number") {
        return '<div class="item"><div class="remove"></div><input class="key" value="'+key+'"><input type="number" class="value" value="'+value+'"></div>';
    } else {
        return '<div class="item"><div class="remove"></div><input class="key" value="'+key+'"><input class="value" value="'+value+'"></div>';
    }
}

// Save the editor keys and values to the editor variable
function editorToMemory() {
    let updatedEditor = [];
    const itemSelector = document.querySelectorAll(".item");
    itemSelector.forEach(function(element){
        let key = element.querySelector(".key").value;
        let value = element.querySelector(".value").value;
        updatedEditor.push(
            {
                "key": key,
                "value": value
            }
        );
    });
    editor = updatedEditor;
    localStorage.setItem("editor", JSON.stringify(editor));
}

// Add a new blank item to the editor UI. 
function newItem() {
    editor.push(
        {
            "key": "",
            "value": ""
        }
    );
    updateEditor();
    editorToMemory();
}

// Remove an item from the editor UI (accepts elements, not selectors!)
function removeItem(element) {
    element.remove();
    editorToMemory();
    updateEditor();
}

////////////// Dictionary
// Dictionary suggestions for input. This function shows and refreshest the list. It is removed with removeDictionary()
function dictionary() {
    const activeElement = document.activeElement;
    const key = activeElement.parentElement.querySelector(".key").value;
    const value = activeElement.parentElement.querySelector(".value").value;
    const currentlyEditing = activeElement.classList.contains("key") ? "key" : "value"; // whether the user is editing a key or a value (used for dictionary positioning)
    removeDictionary(); // remove any existing .dictionary elements
    if (returnDictionaryHTML(key, value, currentlyEditing) !== "") { // if there are no results, we don't need to show the dictionary
        // insert the dictionary below the appropriate field
        activeElement.parentElement.insertAdjacentHTML("beforeend", "<ul class='dictionary dictionary-" + currentlyEditing + "'>" + returnDictionaryHTML(key, value, currentlyEditing) + "</ul>");

        // give all of the dictionary results event listeners
        const dictionarySelector = document.querySelectorAll(".dictionary li");
        dictionarySelector.forEach(function(element) {
            element.addEventListener("mousedown", function() {
                dictionaryClicked(activeElement, element.dataset.value);
            });
        });

        // refresh simplebar scrollbar (needed because it's dynamic)
        const simpleBar = new SimpleBar(document.querySelector(".dictionary"));
        simpleBar.recalculate();
    }

    // update the input type of the value field depending on the value of the key field (see returnKeyType())
    if (returnKeyType(key) === "number") {
        // type="number"
        activeElement.parentElement.querySelector(".value").type = "number";
        activeElement.parentElement.querySelector(".value").setAttribute("onkeypress", "return isNumberKey(event)")
    } else {
        // type="text"
        activeElement.parentElement.querySelector(".value").type = "text";
        activeElement.parentElement.querySelector(".value").setAttribute("onkeypress", "return true")
    }
}

// Return the dictionary HTML used for dictionary()
// TODO: integrate this with returnKeyType() instead of doing the loops here
function returnDictionaryHTML(key, value, fieldType) {
    let output = "";
    if (key.length > 0) { // to prevent too many results for keys, we only show results after the first key press
        // key dictionaries
        if (fieldType === "key") {
            dictionaryDatabase.forEach(function(entry){
                if (entry.key.toLowerCase().includes(key.toLowerCase()) && entry.key.toLowerCase() !== key.toLowerCase()) {
                    output = output + returnDictionaryEntryHTML(entry.key);
                }
            });
        // value dictionaries
        } else if (fieldType === "value") {
            dictionaryDatabase.forEach(function(entry) {
                if (entry.key === key) {
                    if (entry.type === "boolean") { // booleans (simple true/false suggestion)
                        output = returnDictionaryEntryHTML("true") + returnDictionaryEntryHTML("false");
                    }
                    if (entry.type === "level" && key === bootLevelMagicWord) { // level suggestions
                        levelsDatabase.forEach(function(level) {
                            if (level.path.toLowerCase().includes(value.toLowerCase()) || level.name.toLowerCase().includes(value.toLowerCase())) {
                                output = output + returnLevelEntryHTML(level.path, level.name);
                            }
                        });
                    }
                }
            });
        }
    }
    return output;
}

// Return dictionary entry html
function returnDictionaryEntryHTML(text) {
    return "<li data-value='" + text + "'>" + text + "</li>";
}

// Return level entry HTML (different function because data-value and innerHTML are different)
function returnLevelEntryHTML(path, name) {
    return "<li data-value='" + path + "'>" + name + "</li>";
}

// Remove .dictionary
function removeDictionary() {
    if (document.querySelector(".dictionary")) { document.querySelector(".dictionary").remove(); }
}

// Handle dictionary result clicks
function dictionaryClicked(activeElement, value) { // needs to know the active input and replacement value
    activeElement.value = value; // set the field 
    removeDictionary();
    editorToMemory(); // save changes
}

// Return the value type expected for a key (for example, ShowDevLevelLoad expects a boolean)
function returnKeyType(key) {
    output = "string";
    for (let i = 0; i < dictionaryDatabase.length; i++) { // for loop used so we can break
        if (dictionaryDatabase[i].key === key) {
            output = dictionaryDatabase[i].type;
            break;
        }
    }
    return output;
}

// Generate a cmdline.txt file from the editor variable
// TODO: move into separate JS file (export.js or something idk)
function returnCmdline() {
    let cmdlineSets = "";
    let hasCustomLevel = false;
    let level = "";
    editor.forEach(function(item){
        let key = item.key;
        let value = item.value;
        if (key !== bootLevelMagicWord) {
            cmdlineSets = cmdlineSets + " -Set " + key + "=" + value;
        } else {
            hasCustomLevel = true;
            level = item.value;
        }
    });
    
    if (hasCustomLevel && level !== "") {
        return level + " " + "-csg -binary -Set UseHostComm=false -wiiprofilermem 0 -nexusip 0.0.0.0" + cmdlineSets + " -Set StartInMainMenu=false -Set EnableRenderProfiling=false -Set HUDDisplaySafeFrame=false -Set WiiRemoteSleepTime=5 -Set OutOfMemoryBoxOfDoom=false -Set DisplayAIMemoryInfo=false -Set MaximizeJigsawAIMemory=false -Set ApprenticeSkip=false -Set ShowDevLevelLoad=false -Set AudioAllowSpillover=false";
    } else {
        return defaultLevel + " " + "-csg -binary -Set UseHostComm=false -wiiprofilermem 0 -nexusip 0.0.0.0" + cmdlineSets + " -Set StartInMainMenu=false -Set EnableRenderProfiling=false -Set HUDDisplaySafeFrame=false -Set WiiRemoteSleepTime=5 -Set OutOfMemoryBoxOfDoom=false -Set DisplayAIMemoryInfo=false -Set MaximizeJigsawAIMemory=false -Set ApprenticeSkip=false -Set ShowDevLevelLoad=false -Set AudioAllowSpillover=false";
    }
}

////////////// Static element event listeners
// The functions for these event listeners should all be in different JS files (script tags should also be after editor.js)

// <div class="darken"></div>
document.querySelector(".darken").addEventListener("click", function() {
    closeOverlay();
});

// add option
document.querySelector(".option.add").addEventListener("click", function() {
    newItem();
});

// clear option
document.querySelector(".option.clear").addEventListener("click", function() {
    editor = [];
    updateEditor();
});

// mixins option
document.querySelector(".option.mixin").addEventListener("click", function() {
    document.querySelector(".overlay-mixins").classList.add("show-flex");
    document.querySelector(".darken").classList.add("show");
    mixinOverlay();
});

// presets option
document.querySelector(".option.preset").addEventListener("click", function() {
    document.querySelector(".overlay-presets").classList.add("show-flex");
    document.querySelector(".darken").classList.add("show");
    presetOverlay();
});

////////////// Initialize
updateEditor();const mixinsDatabase = [
    {
        "name": "Easy mode",
        "description": "Gives Mickey five of each sketch, abilities, and unlimited Paint/Thinner.",
        "mixin": [
            {
                "key": "PlayerEnableAllAbilities",
                "value": "true"
            },
            {
                "key": "PlayerInfiniteAmmo",
                "value": "true"
            }
        ]
    },
    {
        "name": "Half-speed rendering",
        "description": "Runs the game in slooooww mooootion.",
        "mixin": [
            {
                "key": "LockedFrameRate",
                "value": "0.0"
            },
            {
                "key": "LockedFrameRatePAL",
                "value": "0.0"
            }
        ]
    },
    {
        "name": "Bloom",
        "description": "Bloom shader properties. Initially set to the game defaults. To disable boom entirely, disable RenderBloomTweak.",
        "mixin": [
            {
                "key": "RenderBloomTweak",
                "value": "true"
            },
            {
                "key": "RenderBloomThresholdR",
                "value": "100"
            },
            {
                "key": "RenderBloomThresholdG",
                "value": "100"
            },
            {
                "key": "RenderBloomThresholdB",
                "value": "100"
            },
            {
                "key": "RenderBloomOffsetScale",
                "value": "1.783"
            },
            {
                "key": "RenderBloomScaleR",
                "value": "0"
            },
            {
                "key": "RenderBloomScaleG",
                "value": "0"
            },
            {
                "key": "RenderBloomScaleB",
                "value": "0"
            },
            {
                "key": "RenderBloomWeight0",
                "value": "30"
            },
            {
                "key": "RenderBloomWeight1",
                "value": "40"
            },
            {
                "key": "RenderBloomWeight2",
                "value": "50"
            },
            {
                "key": "RenderBloomWeight3",
                "value": "60"
            },
            {
                "key": "RenderBloomWeight4",
                "value": "50"
            },
            {
                "key": "RenderBloomWeight5",
                "value": "40"
            },
            {
                "key": "RenderBloomWeight6",
                "value": "30"
            }
        ]
    },
    {
        "name": "VFilter",
        "description": "An adjustable brightness filter. To set it back to default, disable RenderVFilterWeightEnable.",
        "mixin": [
            {
                "key": "RenderVFilterWeightEnable",
                "value": "true"
            },
            {
                "key": "RenderVFilterWeightTop",
                "value": "8"
            },
            {
                "key": "RenderVFilterWeightMiddle",
                "value": "48"
            },
            {
                "key": "RenderVFilterWeightBottom",
                "value": "8"
            }
        ]
    },
    {
        "name": "White void",
        "description": "Makes the void white. Can be useful for test levels; especially mickey_arcade.level.",
        "mixin": [
            {
                "key": "RenderBackgroundColorR",
                "value": "225.0"
            },
            {
                "key": "RenderBackgroundColorG",
                "value": "225.0"
            },
            {
                "key": "RenderBackgroundColorB",
                "value": "225.0"
            }
        ]
    },
    {
        "name": "Big ears",
        "description": "Gives Mickey comically big ears.",
        "mixin": [
            {
                "key": "MickeyEar_Right_Scale_X",
                "value": "2.12"
            },
            {
                "key": "MickeyEar_Right_Scale_Y",
                "value": "2.5"
            },
            {
                "key": "MickeyEar_Right_Scale_Z",
                "value": "2.5"
            },
            {
                "key": "MickeyEar_Left_Scale_X",
                "value": "2"
            },
            {
                "key": "MickeyEar_Left_Scale_Y",
                "value": "2.5"
            },
            {
                "key": "MickeyEar_Left_Scale_Z",
                "value": "2.5"
            }
        ]
    },
]

function mixinOverlay() {
    const mixinsContent = document.querySelector(".overlay-mixins .content");
    mixinsContent.innerHTML = returnMixinListHTML(mixinsDatabase);
    mixinsContent.scrollTop = 0;
    // event listeners
    document.querySelectorAll(".overlay .overlay-item").forEach(function(element) {
        element.addEventListener("click", function() {
            mixinClicked(mixinsDatabase[element.dataset.index].mixin);
        });
    });
}

function returnMixinListHTML(database) {
    let output = "";
    database.forEach(function(item, index) {
        const name = item.name;
        const description = item.description;
        const mixin = item.mixin;
        output = output + '<div class="overlay-item" data-index="'+index+'"><div class="name">'+name+'</div><div class="description">'+description+'</div></div>';
    });
    return output;
}

function mixinClicked(mixin) {
    const newEditor = editor.concat(mixin);
    editor = newEditor;
    console.log(mixin);
    updateEditor();
    editorToMemory();
    closeOverlay();
}const presetsDatabase = [
    {
        "name": "Recommended settings",
        "description": "Basic recommended settings for users interested in booting into levels. PlayerEnableAllAbilities is required to use the brush and the spin move in custom boot levels.",
        "preset": [
            {
                "key": "BOOT LEVEL",
                "value": ""
            },
            {
                "key": "PlayerEnableAllAbilities",
                "value": "true"
            }
        ]
    },
    {
        "name": "Default settings",
        "description": "The settings when the editor is loaded for the first time.",
        "preset": [
            {
                "key": "BOOT LEVEL",
                "value": "Levels/Main_Menu.level"
            },
            {
                "key": "PlayerEnableAllAbilities",
                "value": "false"
            },
            {
                "key": "WiiRemoteSleepTime",
                "value": "5"
            }
        ]
    },
    {
        "name": "cmdline.txt",
        "description": "The default cmdline.txt file from the game.",
        "preset": [
            {
                "key": "BOOT LEVEL",
                "value": "Levels/Main_Menu.level"
            },
            {
                "key": "UseHostComm",
                "value": "false"
            },
            {
                "key": "UseHostCommScreenshots",
                "value": "false"
            },
            {
                "key": "PlayerDisplayLocation",
                "value": "false"
            },
            {
                "key": "PauseMenuEnabled",
                "value": "true"
            },
            {
                "key": "StartInMainMenu",
                "value": "false"
            },
            {
                "key": "WiiWristStrapShow",
                "value": "true"
            },
            {
                "key": "DisableAudio",
                "value": "false"
            },
            {
                "key": "RenderUseBatching",
                "value": "true"
            },
            {
                "key": "DisplayBuildVersionHUD",
                "value": "false"
            },
            {
                "key": "DisplayDebugTextHUD",
                "value": "false"
            },
            {
                "key": "ColorMipmapLevels",
                "value": "false"
            },
            {
                "key": "EnableRenderProfiling",
                "value": "false"
            },
            {
                "key": "UseDebugLineBatcher",
                "value": "false"
            },
            {
                "key": "DisableIGC",
                "value": "false"
            },
            {
                "key": "HUDDisplaySafeFrame",
                "value": "false"
            },
            {
                "key": "bShowHUD",
                "value": "true"
            },
            {
                "key": "PlayerEnableAllAbilities",
                "value": "false"
            },
            {
                "key": "SphericalHarmonicLightingDebug",
                "value": "false"
            },
            {
                "key": "WiiRemoteSleepTime",
                "value": "5"
            },
            {
                "key": "DisplayDebugParticleText",
                "value": "false"
            },
            {
                "key": "UseSmallerDebugText",
                "value": "false"
            },
            {
                "key": "OutOfMemoryBoxOfDoom",
                "value": "false"
            },
            {
                "key": "DisplayAIMemoryInfo",
                "value": "false"
            },
            {
                "key": "MaximizeJigsawAIMemory",
                "value": "false"
            },
            {
                "key": "ApprenticeSkip",
                "value": "false"
            },
            {
                "key": "ShowDevLevelLoad",
                "value": "false"
            },
            {
                "key": "AudioAllowSpillover",
                "value": "false"
            },
            {
                "key": "GodModeOnPlayer",
                "value": "false"
            }
        ]
    }
]

function presetOverlay() {
    const mixinsContent = document.querySelector(".overlay-presets .content");
    mixinsContent.innerHTML = returnPresetListHTML(presetsDatabase);
    mixinsContent.scrollTop = 0;
    // event listeners
    document.querySelectorAll(".overlay .overlay-item").forEach(function(element) {
        element.addEventListener("click", function() {
            presetClicked(presetsDatabase[element.dataset.index].preset);
        });
    });
}

function returnPresetListHTML(database) {
    let output = "";
    database.forEach(function(item, index) {
        const name = item.name;
        const description = item.description;
        const preset = item.preset;
        output = output + '<div class="overlay-item" data-index="'+index+'"><div class="name">'+name+'</div><div class="description">'+description+'</div></div>';
    });
    return output;
}

function presetClicked(preset) {
    editor = preset;
    console.log(preset);
    updateEditor();
    editorToMemory();
    closeOverlay();
}