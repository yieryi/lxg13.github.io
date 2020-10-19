import getStringFromTypedArray from "../Core/getStringFromTypedArray.js";
import parseGlb from "../ThirdParty/GltfPipeline/parseGlb.js";


function PBRModel(options) {
  // let gltf = options.gltf;
  // //json字符串
  // let babyScene = options.babyScene;
  // if(gltf instanceof Uint8Array) {
  //   // Binary glTF
  //   var parsedGltf = "data:" +JSON.stringify(parseGlb(gltf));
  //   console.log(parseGlb(gltf))
  //   console.log(babyScene)
  //   // BABYLON.SceneLoader.Append("", parsedGltf, scene, function () {
  //   //   scene.createDefaultCamera(true, true, true);
  //   // });
  // }
  // BABYLON.SceneLoader.Append("", gltf, scene, function () {
  //   scene.createDefaultCamera(true, true, true);
  // });

}

PBRModel.fromGltf = function (options) {

}

export default PBRModel;
