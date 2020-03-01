
// Get the canvas DOM element
var canvas = document.getElementById('renderCanvas');
// Load the 3D engine
var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});
// CreateScene function that creates and return the scene
var createScene = function(){
    var scene = new BABYLON.Scene(engine);
    scene.debugLayer.show();
    //physics engine
   // var gravityVector = new BABYLON.Vector3(0,-9.81, 0);
   // var physicsPlugin = new BABYLON.CannonJSPlugin();
   // scene.enablePhysics(gravityVector, physicsPlugin);
  //  scene.enablePhysics(new BABYLON.Vector3(0,-10,0), new BABYLON.AmmoJSPlugin());

    //
    scene.clearColor = new BABYLON.Color3.White();
    var camera = new BABYLON.ArcRotateCamera("arcCam",BABYLON.Tools.ToRadians(0),BABYLON.Tools.ToRadians(0),10.0,BABYLON.Vector3.Zero(),scene);
    camera.attachControl(canvas,true);
  //  var light = new BABYLON.PointLight("PointLight",new BABYLON.Vector3(0,0,0),scene);
  //  light.parent = camera;
  //  light.intensity = 10;// original 1.5
    var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
//	light.diffuse = new BABYLON.Color3(1, 1, 1);
  //  light.specular = new BABYLON.Color3(1, 1, 1);
    light.intensity = 10;

    BABYLON.SceneLoader.ImportMesh("","","./model/slider_rail_forBabylonjs_join2.babylon",
        scene,function(newMeshes,particleSystems,skeltons) {
         //   importedMeshes = newMeshes.meshes;
    });
    
    var mesh= scene.getMeshByID("Tray_start_stand");
    console.log("the name is :"+mesh); 

    return scene;
}
// call the createScene function
var scene = createScene();
// run the render loop
engine.runRenderLoop(function(){
    scene.render();
});
// the canvas/window resize event handler
window.addEventListener('resize', function(){
    engine.resize();
});