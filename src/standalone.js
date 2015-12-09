/**
 *
 * @author petr.sloup@klokantech.com (Petr Sloup)
 *
 * Copyright 2014 Klokan Technologies Gmbh (www.klokantech.com)
 */

goog.provide('klokantech.standalone.IiifViewer');

goog.require('klokantech.AllOLRequires');
goog.require('klokantech.IiifPrint');
goog.require('klokantech.IiifViewer');
goog.require('klokantech.SmoothMWZoomInteraction');



/**
 * @param {string|Element} element
 * @param {string|!Object.<string, *>} dataOrUrl
 * @param {Function=} opt_initCallback
 * @constructor
 */
klokantech.standalone.IiifViewer = function(element, dataOrUrl,
                                            opt_initCallback) {
  goog.base(this, element, dataOrUrl,
            opt_initCallback, undefined,
            new klokantech.SmoothMWZoomInteraction());
};
goog.inherits(klokantech.standalone.IiifViewer, klokantech.IiifViewer);

goog.exportSymbol('IiifViewer', klokantech.standalone.IiifViewer);
goog.exportSymbol('IiifViewer.prototype.getMap',
                  klokantech.IiifViewer.prototype.getMap);
goog.exportSymbol('IiifViewer.prototype.addPermalink',
                  klokantech.IiifViewer.prototype.addPermalink);
