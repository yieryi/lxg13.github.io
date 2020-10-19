/* This file is automatically rebuilt by the Cesium build process. */
define(['./when-7be8a9d0', './Check-95b5c836', './Math-1bdfdd19', './Cartesian2-e1152338', './Transforms-48138b95', './RuntimeError-c01fec73', './WebGLConstants-daaa9be0', './ComponentDatatype-2d146d74', './GeometryAttribute-405802d4', './GeometryAttributes-1db6d1b2', './IndexDatatype-a017e02f', './GeometryOffsetAttribute-fe9a211c', './VertexFormat-ec379456', './CylinderGeometryLibrary-37777586', './CylinderGeometry-0823c3bf'], function (when, Check, _Math, Cartesian2, Transforms, RuntimeError, WebGLConstants, ComponentDatatype, GeometryAttribute, GeometryAttributes, IndexDatatype, GeometryOffsetAttribute, VertexFormat, CylinderGeometryLibrary, CylinderGeometry) { 'use strict';

  function createCylinderGeometry(cylinderGeometry, offset) {
    if (when.defined(offset)) {
      cylinderGeometry = CylinderGeometry.CylinderGeometry.unpack(cylinderGeometry, offset);
    }
    return CylinderGeometry.CylinderGeometry.createGeometry(cylinderGeometry);
  }

  return createCylinderGeometry;

});
