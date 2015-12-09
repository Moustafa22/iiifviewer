/**
 *
 * @author petr.sloup@klokantech.com (Petr Sloup)
 *
 * Copyright 2014 Klokan Technologies Gmbh (www.klokantech.com)
 */

goog.provide('klokantech.IiifViewerExports');

goog.require('klokantech.IiifPrint');
goog.require('klokantech.IiifSource');
goog.require('klokantech.IiifViewer');


goog.exportSymbol('IiifViewer', klokantech.IiifViewer);
goog.exportSymbol('IiifViewer.prototype.getMap',
                  klokantech.IiifViewer.prototype.getMap);
goog.exportSymbol('IiifViewer.prototype.addPermalink',
                  klokantech.IiifViewer.prototype.addPermalink);

goog.exportSymbol('IiifSource', klokantech.IiifSource);
