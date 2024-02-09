(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","minHeight":0,"children":["this.MainViewer"],"backgroundColor":["#FFFFFF"],"minWidth":0,"start":"this.init()","data":{"locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnTooltip":false,"rate":1,"stopBackgroundAudio":false,"volume":1,"pitch":1,"speechOnInfoWindow":false},"name":"Player760","defaultLocale":"pt","history":{}},"scrollBarMargin":2,"backgroundColorRatios":[0],"mediaActivationMode":"button","scrollBarColor":"#000000","width":"100%","scripts":{"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPixels":TDV.Tour.Script.getPixels,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"executeJS":TDV.Tour.Script.executeJS,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getKey":TDV.Tour.Script.getKey,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"isPanorama":TDV.Tour.Script.isPanorama,"quizShowScore":TDV.Tour.Script.quizShowScore,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"existsKey":TDV.Tour.Script.existsKey,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"unregisterKey":TDV.Tour.Script.unregisterKey,"translate":TDV.Tour.Script.translate,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"startMeasurement":TDV.Tour.Script.startMeasurement,"registerKey":TDV.Tour.Script.registerKey,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"mixObject":TDV.Tour.Script.mixObject,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"init":TDV.Tour.Script.init,"getComponentByName":TDV.Tour.Script.getComponentByName,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"cloneBindings":TDV.Tour.Script.cloneBindings,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizStart":TDV.Tour.Script.quizStart,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"createTween":TDV.Tour.Script.createTween,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setLocale":TDV.Tour.Script.setLocale,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMediaByName":TDV.Tour.Script.getMediaByName,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizFinish":TDV.Tour.Script.quizFinish,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getOverlays":TDV.Tour.Script.getOverlays,"getMainViewer":TDV.Tour.Script.getMainViewer,"clone":TDV.Tour.Script.clone,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"showWindow":TDV.Tour.Script.showWindow,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"textToSpeech":TDV.Tour.Script.textToSpeech,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"downloadFile":TDV.Tour.Script.downloadFile,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"historyGoBack":TDV.Tour.Script.historyGoBack,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"playAudioList":TDV.Tour.Script.playAudioList,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showPopupImage":TDV.Tour.Script.showPopupImage,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setValue":TDV.Tour.Script.setValue,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"initAnalytics":TDV.Tour.Script.initAnalytics,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"initQuiz":TDV.Tour.Script.initQuiz,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"shareSocial":TDV.Tour.Script.shareSocial,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"openLink":TDV.Tour.Script.openLink,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMapLocation":TDV.Tour.Script.setMapLocation,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"resumePlayers":TDV.Tour.Script.resumePlayers,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags},"height":"100%","hash": "79f517d61b8929d55e88c797f0289fda40385f1ca95123524e6675ece119aa9c", "definitions": [{"hfov":360,"id":"panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E","class":"Panorama","label":trans('panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E.label'),"vfov":180,"thumbnailUrl":"media/panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E_t.jpg","frames":[{"thumbnailUrl":"media/panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","height":4096,"class":"TiledImageResourceLevel","rowCount":8,"url":"media/panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E_0/{face}/0/{row}_{column}.jpg","colCount":48,"width":24576},{"tags":"ondemand","height":2048,"class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E_0/{face}/1/{row}_{column}.jpg","colCount":24,"width":12288},{"tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E_0/{face}/2/{row}_{column}.jpg","colCount":12,"width":6144},{"tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E_0/{face}/3/{row}_{column}.jpg","colCount":6,"width":3072}],"class":"ImageResource"}}],"data":{"label":"SALA BLACK"},"overlays":["this.overlay_9D1EF1D5_8C4A_BBFC_41C0_75D7B83BF8A3","this.overlay_9E46B513_8C4D_7875_41C0_5B196383BF51","this.overlay_9D5FCC91_8C4D_4875_41DF_C432B8101F3B","this.overlay_9F907541_8C4D_58D4_41D6_DCDA67CE95F6","this.overlay_9D134B36_8C4D_C8BC_41C4_16500CD01CC0","this.overlay_9E984AF5_8C4D_49BD_41D1_4EE655417001","this.overlay_9E43C38F_8C4D_B86C_41C9_84108F77867E","this.overlay_9F953AEA_8C4D_49D4_41C1_11AECD16390F","this.overlay_9C249D85_8CB6_C85D_41B5_DE4AD4F70319"],"hfovMax":130},{"subtitlesTextShadowVerticalLength":1,"id":"MainViewer","subtitlesFontFamily":"Arial","subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingRight":6,"subtitlesTextShadowOpacity":1,"progressBorderRadius":2,"toolTipFontFamily":"Arial","vrPointerSelectionTime":2000,"playbackBarBorderColor":"#FFFFFF","vrPointerColor":"#FFFFFF","playbackBarBorderRadius":0,"progressLeft":"33%","toolTipPaddingBottom":4,"toolTipPaddingTop":4,"subtitlesFontColor":"#FFFFFF","data":{"name":"Main Viewer"},"playbackBarHeadBorderRadius":0,"playbackBarProgressBorderColor":"#000000","toolTipPaddingLeft":6,"toolTipBackgroundColor":"#F6F6F6","doubleClickAction":"none","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"width":"100%","subtitlesBottom":50,"playbackBarBackgroundOpacity":1,"height":"100%","subtitlesTop":0,"subtitlesTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","minHeight":50,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"minWidth":100,"playbackBarHeadBorderSize":0,"toolTipBorderColor":"#767676","subtitlesFontSize":"3vmin","toolTipShadowColor":"#333138","toolTipFontSize":"1.11vmin","playbackBarHeadShadow":true,"toolTipFontColor":"#606060","progressRight":"33%","progressOpacity":0.7,"progressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipTextShadowColor":"#000000","progressBarBackgroundColorDirection":"horizontal","surfaceReticleSelectionColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","firstTransitionDuration":0,"subtitlesBackgroundOpacity":0.2,"playbackBarBottom":5,"progressBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"playbackBarHeadWidth":6,"progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"playbackBarProgressBorderSize":0,"progressBottom":10,"subtitlesBorderColor":"#FFFFFF","playbackBarBackgroundColorDirection":"vertical","class":"ViewerArea","subtitlesGap":0,"playbackBarRight":0,"progressHeight":2,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBorderRadius":0,"progressBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBorderRadius":2,"propagateClick":false,"progressBarBorderSize":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowOpacity":0.7},{"id":"MainViewerVideoPlayer","viewerArea":"this.MainViewer","class":"VideoPlayer","displayPlaybackBar":true,"clickAction":"play_pause","displayPlayOverlay":true},{"id":"panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36_camera","class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_80F080D8_8BCE_B9F3_41D3_B83A43EFD6B8","enterPointingToHorizon":true},{"id":"panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E_camera","class":"PanoramaCamera","initialPosition":{"yaw":152.63,"class":"PanoramaCameraPosition","pitch":-0.36},"displayMovements":[{"duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"duration":3000,"class":"TargetRotationalCameraDisplayMovement","targetStereographicFactor":0,"easing":"cubic_in_out","targetPitch":-0.36}],"displayOriginPosition":{"hfov":165,"stereographicFactor":1,"class":"RotationalCameraDisplayPosition","yaw":152.63,"pitch":-90},"enterPointingToHorizon":true},{"hfov":360,"id":"panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36","class":"Panorama","label":trans('panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36.label'),"vfov":180,"thumbnailUrl":"media/panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36_t.jpg","frames":[{"thumbnailUrl":"media/panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","height":4096,"class":"TiledImageResourceLevel","rowCount":8,"url":"media/panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36_0/{face}/0/{row}_{column}.jpg","colCount":48,"width":24576},{"tags":"ondemand","height":2048,"class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36_0/{face}/1/{row}_{column}.jpg","colCount":24,"width":12288},{"tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36_0/{face}/2/{row}_{column}.jpg","colCount":12,"width":6144},{"tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36_0/{face}/3/{row}_{column}.jpg","colCount":6,"width":3072}],"class":"ImageResource"}}],"data":{"label":"SALA BRANCA"},"hfovMax":130},{"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","class":"PanoramaPlayer","aaEnabled":true,"displayPlaybackBar":true,"touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","arrowKeysAction":"translate"},{"id":"mainPlayList","class":"PlayList","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E_camera","media":"this.panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","camera":"this.panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36_camera","media":"this.panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"VideoPlayListItem","end":"this.trigger('tourEnded')","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 2, '#000000'); this.changeOpacityWhilePlay(this.mainPlayList, 2, '0'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2)","media":"this.video_9C1CC568_8CB5_58D3_41DA_03D91FC5514C","player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 0)"}]},{"id":"video_9C1CC568_8CB5_58D3_41DA_03D91FC5514C","label":trans('video_9C1CC568_8CB5_58D3_41DA_03D91FC5514C.label'),"video":"this.videores_9D13BC56_8C4B_48FF_41C5_9D440964B328","thumbnailUrl":"media/video_9C1CC568_8CB5_58D3_41DA_03D91FC5514C_t.jpg","width":1080,"height":1080,"data":{"label":"0209(1)"},"chromaSmoothing":0,"class":"Video","chromaColor":"#3DD845","chromaThreshold":0.27},{"id":"overlay_9D1EF1D5_8C4A_BBFC_41C0_75D7B83BF8A3","class":"HotspotPanoramaOverlay","data":{"label":"PORTA 01"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_9D5AC1EB_8C4A_BBD4_41D5_3229E03CBA1E"],"items":[{"hfov":10.5,"class":"HotspotPanoramaOverlayImage","distance":100,"image":"this.AnimatedImageResource_82000A83_8F0F_1724_41C6_DF671999368B","pitch":4.77,"yaw":113.86,"vfov":10.5,"data":{"label":"PORTA 01"},"scaleMode":"fit_inside"}],"maps":[],"enabledInCardboard":true},{"id":"overlay_9E46B513_8C4D_7875_41C0_5B196383BF51","class":"HotspotPanoramaOverlay","data":{"label":"PORTA 02"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_9E488516_8C4D_787F_41D2_797E5DA3AD64"],"items":[{"hfov":10.5,"class":"HotspotPanoramaOverlayImage","distance":100,"image":"this.AnimatedImageResource_82005A84_8F0F_172C_41B2_9A6C0873F6AF","pitch":4.28,"yaw":-156.89,"vfov":10.5,"data":{"label":"PORTA 02"},"scaleMode":"fit_inside"}],"maps":[],"enabledInCardboard":true},{"id":"overlay_9D5FCC91_8C4D_4875_41DF_C432B8101F3B","class":"HotspotPanoramaOverlay","data":{"label":"LOGO MAPSX"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_9D5F7C92_8C4D_4877_41D7_83A993F07A6C"],"items":[{"hfov":25.9,"class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_9FC2FECF_8C4B_C9EC_41C5_2817CD4539D5","pitch":2.15,"yaw":157.73,"data":{"label":"LOGO MAPSX"},"vfov":25.28,"scaleMode":"fit_inside"}],"maps":[],"enabledInCardboard":true},{"id":"overlay_9F907541_8C4D_58D4_41D6_DCDA67CE95F6","class":"HotspotPanoramaOverlay","data":{"label":"PORTA 03"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_9F905542_8C4D_58D4_41CE_DF9CF4AD130D"],"items":[{"hfov":10.5,"class":"HotspotPanoramaOverlayImage","distance":100,"image":"this.AnimatedImageResource_82006A84_8F0F_172C_41D6_C4E0220D92BE","pitch":4.15,"yaw":-67.42,"vfov":10.5,"data":{"label":"PORTA 03"},"scaleMode":"fit_inside"}],"maps":[],"enabledInCardboard":true},{"id":"overlay_9D134B36_8C4D_C8BC_41C4_16500CD01CC0","class":"HotspotPanoramaOverlay","data":{"label":"PORTA 04"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_9D129B36_8C4D_C8BC_41C1_6D3E64F123EB"],"items":[{"hfov":10.5,"class":"HotspotPanoramaOverlayImage","distance":100,"image":"this.AnimatedImageResource_8201BA84_8F0F_172C_41E0_7BFF2DBF3B2B","pitch":4.48,"yaw":21.94,"vfov":10.5,"data":{"label":"PORTA 04"},"scaleMode":"fit_inside"}],"maps":[],"enabledInCardboard":true},{"id":"overlay_9E984AF5_8C4D_49BD_41D1_4EE655417001","class":"HotspotPanoramaOverlay","data":{"label":"LOGO MAPSX"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_9DF71B91_8C4D_4875_41A9_9EFC54B0AFBD"],"items":[{"hfov":25.9,"class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_9FC2FECF_8C4B_C9EC_41C5_2817CD4539D5","pitch":1.92,"yaw":-21.63,"data":{"label":"LOGO MAPSX"},"vfov":25.28,"scaleMode":"fit_inside"}],"maps":[],"enabledInCardboard":true},{"id":"overlay_9E43C38F_8C4D_B86C_41C9_84108F77867E","class":"HotspotPanoramaOverlay","data":{"label":"LOGO MAPSX"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_9E43E38F_8C4D_B86C_41C3_67E30C5D6F28"],"items":[{"hfov":25.9,"class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_9FC2FECF_8C4B_C9EC_41C5_2817CD4539D5","pitch":1.6,"yaw":-112.13,"data":{"label":"LOGO MAPSX"},"vfov":25.28,"scaleMode":"fit_inside"}],"maps":[],"enabledInCardboard":true},{"id":"overlay_9F953AEA_8C4D_49D4_41C1_11AECD16390F","class":"HotspotPanoramaOverlay","data":{"label":"LOGO MAPSX"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_9F952AEA_8C4D_49D4_41CC_CD3199EB4242"],"items":[{"hfov":25.9,"class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_9FC2FECF_8C4B_C9EC_41C5_2817CD4539D5","pitch":1.24,"yaw":67.25,"data":{"label":"LOGO MAPSX"},"vfov":25.28,"scaleMode":"fit_inside"}],"maps":[],"enabledInCardboard":true},{"id":"overlay_9C249D85_8CB6_C85D_41B5_DE4AD4F70319","video":"this.videores_9D13BC56_8C4B_48FF_41C5_9D440964B328","stateChange":"if(this.overlay_9C249D85_8CB6_C85D_41B5_DE4AD4F70319.get('state') == 'playing'){ this.pauseGlobalAudios([this.overlay_9C249D85_8CB6_C85D_41B5_DE4AD4F70319], true); } else { this.resumeGlobalAudios(); }","autoplay":true,"data":{"label":"APRESENTADORA"},"hfov":31.47,"class":"VideoPanoramaOverlay","click":"if(this.overlay_9C249D85_8CB6_C85D_41B5_DE4AD4F70319.get('state') != 'playing'){ this.overlay_9C249D85_8CB6_C85D_41B5_DE4AD4F70319.play(); } else { this.overlay_9C249D85_8CB6_C85D_41B5_DE4AD4F70319.pause(); }","distance":50,"vfov":32.62,"useHandCursor":true,"pitch":-6.01,"image":"this.res_9FC23ED0_8C4B_C9F4_41D9_E9C1FB27B5E6","yaw":157.97,"chromaThreshold":0.27,"cues":[],"chromaSmoothing":0,"chromaColor":"#3DD845"},{"id":"sequence_80F080D8_8BCE_B9F3_41D3_B83A43EFD6B8","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out"}],"class":"PanoramaCameraSequence"},{"id":"videores_9D13BC56_8C4B_48FF_41C5_9D440964B328","height":858,"class":"VideoResource","gain":0.77,"levels":["this.videolevel_83E95A4E_8F0F_173C_41D2_F6DAFC242326"],"width":858},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_9D5AC1EB_8C4A_BBD4_41D5_3229E03CBA1E","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"AnimatedImageResource_82000A83_8F0F_1724_41C6_DF671999368B","frameCount":24,"class":"AnimatedImageResource","rowCount":6,"frameDuration":41,"finalFrame":"first","colCount":4,"levels":[{"height":1200,"class":"ImageResourceLevel","url":"media/res_9FC17ECE_8C4B_C9EC_41C7_F1CB05EE3C38_0.png","width":800}]},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_9E488516_8C4D_787F_41D2_797E5DA3AD64","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"AnimatedImageResource_82005A84_8F0F_172C_41B2_9A6C0873F6AF","frameCount":24,"class":"AnimatedImageResource","rowCount":6,"frameDuration":41,"finalFrame":"first","colCount":4,"levels":[{"height":1200,"class":"ImageResourceLevel","url":"media/res_9FC17ECE_8C4B_C9EC_41C7_F1CB05EE3C38_0.png","width":800}]},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_9D5F7C92_8C4D_4877_41D7_83A993F07A6C","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"res_9FC2FECF_8C4B_C9EC_41C5_2817CD4539D5","class":"ImageResource","levels":[{"height":1210,"class":"ImageResourceLevel","url":"media/res_9FC2FECF_8C4B_C9EC_41C5_2817CD4539D5_0.jpg","width":1197}]},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_9F905542_8C4D_58D4_41CE_DF9CF4AD130D","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"AnimatedImageResource_82006A84_8F0F_172C_41D6_C4E0220D92BE","frameCount":24,"class":"AnimatedImageResource","rowCount":6,"frameDuration":41,"finalFrame":"first","colCount":4,"levels":[{"height":1200,"class":"ImageResourceLevel","url":"media/res_9FC17ECE_8C4B_C9EC_41C7_F1CB05EE3C38_0.png","width":800}]},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_9D129B36_8C4D_C8BC_41C1_6D3E64F123EB","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"AnimatedImageResource_8201BA84_8F0F_172C_41E0_7BFF2DBF3B2B","frameCount":24,"class":"AnimatedImageResource","rowCount":6,"frameDuration":41,"finalFrame":"first","colCount":4,"levels":[{"height":1200,"class":"ImageResourceLevel","url":"media/res_9FC17ECE_8C4B_C9EC_41C7_F1CB05EE3C38_0.png","width":800}]},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_9DF71B91_8C4D_4875_41A9_9EFC54B0AFBD","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_9E43E38F_8C4D_B86C_41C3_67E30C5D6F28","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_9F952AEA_8C4D_49D4_41CC_CD3199EB4242","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"res_9FC23ED0_8C4B_C9F4_41D9_E9C1FB27B5E6","class":"ImageResource","levels":[{"height":1080,"class":"ImageResourceLevel","url":"media/res_9FC23ED0_8C4B_C9F4_41D9_E9C1FB27B5E6_0.jpg","width":1080}]},{"id":"videolevel_83E95A4E_8F0F_173C_41D2_F6DAFC242326","height":858,"class":"VideoResourceLevel","posterURL":trans('videolevel_83E95A4E_8F0F_173C_41D2_F6DAFC242326.posterURL'),"framerate":60,"type":"video/mp4","bitrate":3176,"url":trans('videolevel_83E95A4E_8F0F_173C_41D2_F6DAFC242326.url'),"codec":"h264","width":858}],"layout":"absolute","class":"Player","defaultMenu":["fullscreen","mute","rotation"],"propagateClick":false,"gap":10,"watermark":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.8.js.map
})();
//Generated with v2023.2.8, Fri Feb 9 2024