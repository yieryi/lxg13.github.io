/* This file is automatically rebuilt by the Cesium build process. */
define(['./when-7be8a9d0', './Check-95b5c836', './Math-1bdfdd19', './Cartesian2-e1152338', './Transforms-48138b95', './RuntimeError-c01fec73', './WebGLConstants-daaa9be0', './ComponentDatatype-2d146d74', './GeometryAttribute-405802d4', './GeometryAttributes-1db6d1b2', './AttributeCompression-e971545c', './GeometryPipeline-3f8e43e9', './EncodedCartesian3-b3bb99d6', './IndexDatatype-a017e02f', './IntersectionTests-5a95a776', './Plane-22c766bf', './GeometryOffsetAttribute-fe9a211c', './VertexFormat-ec379456', './EllipseGeometryLibrary-654dc928', './GeometryInstance-3e74656a', './EllipseGeometry-b0ca2216'], function (when, Check, _Math, Cartesian2, Transforms, RuntimeError, WebGLConstants, ComponentDatatype, GeometryAttribute, GeometryAttributes, AttributeCompression, GeometryPipeline, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, GeometryOffsetAttribute, VertexFormat, EllipseGeometryLibrary, GeometryInstance, EllipseGeometry) { 'use strict';

  function createEllipseGeometry(ellipseGeometry, offset) {
    if (when.defined(offset)) {
      ellipseGeometry = EllipseGeometry.EllipseGeometry.unpack(ellipseGeometry, offset);
    }
    ellipseGeometry._center = Cartesian2.Cartesian3.clone(ellipseGeometry._center);
    ellipseGeometry._ellipsoid = Cartesian2.Ellipsoid.clone(ellipseGeometry._ellipsoid);
    return EllipseGeometry.EllipseGeometry.createGeometry(ellipseGeometry);
  }

  return createEllipseGeometry;

});
