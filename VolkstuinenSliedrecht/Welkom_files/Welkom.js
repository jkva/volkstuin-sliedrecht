// Created by iWeb 3.0.4 local-build-20140502

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,222),url:'Welkom_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Welkom_files/stroke_1.png'},{rect:new IWRect(5,-5,402,10),url:'Welkom_files/stroke_2.png'},{rect:new IWRect(407,-5,11,10),url:'Welkom_files/stroke_3.png'},{rect:new IWRect(407,5,11,222),url:'Welkom_files/stroke_4.png'},{rect:new IWRect(407,227,11,10),url:'Welkom_files/stroke_5.png'},{rect:new IWRect(5,227,402,10),url:'Welkom_files/stroke_6.png'},{rect:new IWRect(-5,227,10,10),url:'Welkom_files/stroke_7.png'}],new IWSize(413,232))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welkom_files/WelkomMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
