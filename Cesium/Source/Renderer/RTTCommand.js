import defined from '../Core/defined.js';
import defaultValue from '../Core/defaultValue.js';

function RTTCommand(options) {
  this._scene = options.scene;
  let name = options.name;
  this.canceled = options.canceled;

  this.outputTexture = defaultValue( options.outputTexture, new BABYLON.RenderTargetTexture(
    'render to texture', // name
    512, // texture size
    this._scene, // the scene
    true
  ));

  //只执行一次
  this.outputTexture.refreshRate = BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONCE;

  this.outputTexture.onBeforeRender = (e) => {
    if(defined(options.preExecute)) {
      options.preExecute(this);
      options.preExecute = null;
    }
  };
  this.outputTexture.onAfterRender = () => {
    if(defined(options.postExecute)) {
      options.postExecute(this.outputTexture);
      options.postExecute = null;
    }
  };
  // this.outputTexture.renderList.push(this.vertexArray);


  // this.execute();
}

RTTCommand.prototype.execute = function () {
  this._scene.customRenderTargets.push(this.outputTexture);
}

export default RTTCommand;
