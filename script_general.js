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
var script = {"id":"rootPlayer","minHeight":0,"children":["this.MainViewer","this.Image_9E08BA03_8F0F_1724_41D9_26A928141C28","this.IconButton_9B6FBE61_8F05_0FE7_41C1_4107233CE6C5","this.Container_92B396E8_8F1D_1CE5_41DF_A841CD3B5040"],"backgroundColor":["#FFFFFF"],"minWidth":0,"start":"this.init()","left":447.5,"data":{"history":{},"defaultLocale":"pt","textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnTooltip":false,"rate":1,"stopBackgroundAudio":false,"volume":1,"pitch":1,"speechOnInfoWindow":false},"name":"Player760","locales":{"pt":"locale/pt.txt"}},"scrollBarMargin":2,"backgroundColorRatios":[0],"mediaActivationMode":"button","scrollBarColor":"#000000","buttonToggleMute":"this.IconButton_9B6FBE61_8F05_0FE7_41C1_4107233CE6C5","width":"100%","scripts":{"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPixels":TDV.Tour.Script.getPixels,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"executeJS":TDV.Tour.Script.executeJS,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"isPanorama":TDV.Tour.Script.isPanorama,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"existsKey":TDV.Tour.Script.existsKey,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"translate":TDV.Tour.Script.translate,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getKey":TDV.Tour.Script.getKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"startMeasurement":TDV.Tour.Script.startMeasurement,"registerKey":TDV.Tour.Script.registerKey,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"mixObject":TDV.Tour.Script.mixObject,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"init":TDV.Tour.Script.init,"getComponentByName":TDV.Tour.Script.getComponentByName,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"cloneBindings":TDV.Tour.Script.cloneBindings,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizStart":TDV.Tour.Script.quizStart,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"createTween":TDV.Tour.Script.createTween,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setLocale":TDV.Tour.Script.setLocale,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMediaByName":TDV.Tour.Script.getMediaByName,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizFinish":TDV.Tour.Script.quizFinish,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"clone":TDV.Tour.Script.clone,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getOverlays":TDV.Tour.Script.getOverlays,"getMainViewer":TDV.Tour.Script.getMainViewer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"showWindow":TDV.Tour.Script.showWindow,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"textToSpeech":TDV.Tour.Script.textToSpeech,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"downloadFile":TDV.Tour.Script.downloadFile,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"historyGoBack":TDV.Tour.Script.historyGoBack,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"playAudioList":TDV.Tour.Script.playAudioList,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showPopupImage":TDV.Tour.Script.showPopupImage,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setValue":TDV.Tour.Script.setValue,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"initAnalytics":TDV.Tour.Script.initAnalytics,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"initQuiz":TDV.Tour.Script.initQuiz,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"shareSocial":TDV.Tour.Script.shareSocial,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"openLink":TDV.Tour.Script.openLink,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMapLocation":TDV.Tour.Script.setMapLocation,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"resumePlayers":TDV.Tour.Script.resumePlayers,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags},"height":"100%","hash": "b7c081f0df51e00b09aae01de00d45b5f674f828c691293a8cc44171450816df", "definitions": [{"id":"Image_9E08BA03_8F0F_1724_41D9_26A928141C28","minHeight":1,"minWidth":1,"scaleMode":"fit_inside","verticalAlign":"middle","data":{"name":"BOT ZAP"},"horizontalAlign":"center","url":trans('Image_9E08BA03_8F0F_1724_41D9_26A928141C28.url'),"bottom":"0%","width":"4.761%","height":"8.249%","visible":false,"class":"Image","propagateClick":false,"backgroundOpacity":0,"left":"0.06%"},{"subtitlesTextShadowVerticalLength":1,"id":"MainViewer","subtitlesFontFamily":"Arial","subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingRight":6,"subtitlesTextShadowOpacity":1,"progressBorderRadius":2,"toolTipFontFamily":"Arial","vrPointerSelectionTime":2000,"playbackBarBorderColor":"#FFFFFF","vrPointerColor":"#FFFFFF","playbackBarBorderRadius":0,"progressLeft":"33%","toolTipPaddingBottom":4,"toolTipPaddingTop":4,"subtitlesFontColor":"#FFFFFF","data":{"name":"Main Viewer"},"playbackBarHeadBorderRadius":0,"playbackBarProgressBorderColor":"#000000","toolTipPaddingLeft":6,"toolTipBackgroundColor":"#F6F6F6","doubleClickAction":"none","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"width":"100%","subtitlesBottom":50,"playbackBarBackgroundOpacity":1,"height":"100%","subtitlesTop":0,"subtitlesTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","minHeight":50,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"minWidth":100,"playbackBarHeadBorderSize":0,"toolTipBorderColor":"#767676","subtitlesFontSize":"3vmin","toolTipShadowColor":"#333138","toolTipFontSize":"1.11vmin","playbackBarHeadShadow":true,"toolTipFontColor":"#606060","progressRight":"33%","progressOpacity":0.7,"progressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipTextShadowColor":"#000000","progressBarBackgroundColorDirection":"horizontal","surfaceReticleSelectionColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","firstTransitionDuration":0,"subtitlesBackgroundOpacity":0.2,"playbackBarBottom":5,"progressBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"playbackBarHeadWidth":6,"progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"playbackBarProgressBorderSize":0,"progressBottom":10,"subtitlesBorderColor":"#FFFFFF","playbackBarBackgroundColorDirection":"vertical","class":"ViewerArea","subtitlesGap":0,"playbackBarRight":0,"progressHeight":2,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBorderRadius":0,"progressBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBorderRadius":2,"propagateClick":false,"progressBarBorderSize":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowOpacity":0.7},{"id":"effect_910038B0_8F05_7364_41B2_4EDA6A770584","duration":500,"class":"FadeOutEffect"},{"id":"MainViewerVideoPlayer","viewerArea":"this.MainViewer","class":"VideoPlayer","displayPlaybackBar":true,"clickAction":"play_pause","displayPlayOverlay":true},{"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","class":"PanoramaPlayer","aaEnabled":true,"displayPlaybackBar":true,"touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","arrowKeysAction":"translate"},{"hfov":360,"id":"panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E","class":"Panorama","label":trans('panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E.label'),"vfov":180,"thumbnailUrl":"media/panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E_t.jpg","frames":[{"thumbnailUrl":"media/panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","height":4096,"class":"TiledImageResourceLevel","rowCount":8,"url":"media/panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E_0/{face}/0/{row}_{column}.jpg","colCount":48,"width":24576},{"tags":"ondemand","height":2048,"class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E_0/{face}/1/{row}_{column}.jpg","colCount":24,"width":12288},{"tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E_0/{face}/2/{row}_{column}.jpg","colCount":12,"width":6144},{"tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E_0/{face}/3/{row}_{column}.jpg","colCount":6,"width":3072}],"class":"ImageResource"}}],"data":{"label":"SALA BLACK"},"overlays":["this.overlay_9D1EF1D5_8C4A_BBFC_41C0_75D7B83BF8A3","this.overlay_9E46B513_8C4D_7875_41C0_5B196383BF51","this.overlay_9F907541_8C4D_58D4_41D6_DCDA67CE95F6","this.overlay_9D134B36_8C4D_C8BC_41C4_16500CD01CC0","this.overlay_9E984AF5_8C4D_49BD_41D1_4EE655417001","this.overlay_9E43C38F_8C4D_B86C_41C9_84108F77867E","this.overlay_9F953AEA_8C4D_49D4_41C1_11AECD16390F","this.overlay_ABD5E55D_8F7D_7DDF_41E0_535CEE79D640","this.overlay_9F100426_8F07_F36D_41A5_C29434F0E240","this.overlay_9867AF2A_8F3D_0D65_41D1_9F2A5EF84497","this.overlay_AC83B6EF_8F07_7CFB_41C6_A92D6813B3C1","this.overlay_A386A87E_8F0D_F3DC_4175_DCE290A49C9A"],"hfovMax":130},{"id":"mainPlayList","class":"PlayList","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E_camera","media":"this.panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","camera":"this.panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36_camera","media":"this.panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"VideoPlayListItem","end":"this.trigger('tourEnded')","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 2, '#000000'); this.changeOpacityWhilePlay(this.mainPlayList, 2, '0'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2)","media":"this.video_99DBD4C6_8F3D_132D_41D7_7B1D792CAFE6","player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 0)"}]},{"gap":10,"id":"Container_92B396E8_8F1D_1CE5_41DF_A841CD3B5040","minHeight":20,"backgroundColor":["#000000","#000000"],"minWidth":20,"data":{"name":"FUNDO BLACK"},"scrollBarMargin":2,"backgroundColorRatios":[0,1],"scrollBarColor":"#000000","top":"0%","overflow":"scroll","width":"100%","height":"100%","layout":"absolute","class":"Container","children":["this.Container_927243E5_8F1B_34EF_41DF_BD664D5033E2"],"propagateClick":false,"backgroundOpacity":0.87,"left":"0%"},{"id":"Image_9152116A_8F1B_15E5_41DD_97D3A920ED5F","minHeight":1,"minWidth":1,"right":"-0.18%","scaleMode":"fit_inside","verticalAlign":"middle","horizontalAlign":"center","url":trans('Image_9152116A_8F1B_15E5_41DD_97D3A920ED5F.url'),"data":{"name":"X"},"top":"0.26%","width":"18.78%","height":"25.712%","click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_910038B0_8F05_7364_41B2_4EDA6A770584, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_92B396E8_8F1D_1CE5_41DF_A841CD3B5040)","class":"Image","propagateClick":false,"backgroundOpacity":0},{"id":"panorama_879A5E2B_8BCE_C854_41A9_60314B2C057E_camera","class":"PanoramaCamera","initialPosition":{"yaw":152.63,"class":"PanoramaCameraPosition","pitch":-0.36},"displayMovements":[{"duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"duration":3000,"class":"TargetRotationalCameraDisplayMovement","targetStereographicFactor":0,"easing":"cubic_in_out","targetPitch":-0.36}],"displayOriginPosition":{"hfov":165,"stereographicFactor":1,"class":"RotationalCameraDisplayPosition","yaw":152.63,"pitch":-90},"enterPointingToHorizon":true},{"id":"IconButton_9B6FBE61_8F05_0FE7_41C1_4107233CE6C5","minHeight":0,"minWidth":0,"right":"0.02%","verticalAlign":"middle","horizontalAlign":"center","mode":"toggle","data":{"name":"BOT SOM"},"top":"0.06%","width":40,"rollOverIconURL":"skin/IconButton_9B6FBE61_8F05_0FE7_41C1_4107233CE6C5_rollover.png","height":40,"class":"IconButton","pressedIconURL":"skin/IconButton_9B6FBE61_8F05_0FE7_41C1_4107233CE6C5_pressed.png","transparencyActive":true,"propagateClick":false,"iconURL":"skin/IconButton_9B6FBE61_8F05_0FE7_41C1_4107233CE6C5.png","backgroundOpacity":0},{"id":"video_9FC86102_8F07_F525_41C3_B79827C568F7","label":trans('video_9FC86102_8F07_F525_41C3_B79827C568F7.label'),"video":"this.videores_9C0AEA80_8F0B_3725_41E0_2E9BE319811E","thumbnailUrl":"media/video_9FC86102_8F07_F525_41C3_B79827C568F7_t.jpg","width":1080,"height":1080,"data":{"label":"0209"},"chromaSmoothing":0,"class":"Video","chromaColor":"#3DD845","chromaThreshold":0.27},{"id":"Image_916F4BE4_8F1B_14ED_41D5_1CE37CE15676","minHeight":1,"minWidth":1,"right":"0.57%","scaleMode":"fit_inside","verticalAlign":"middle","horizontalAlign":"center","url":trans('Image_916F4BE4_8F1B_14ED_41D5_1CE37CE15676.url'),"data":{"name":"TUTO"},"top":"0%","width":"99.1%","height":"100%","class":"Image","propagateClick":false,"backgroundOpacity":0},{"id":"panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36_camera","class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_80F080D8_8BCE_B9F3_41D3_B83A43EFD6B8","enterPointingToHorizon":true},{"id":"effect_A9A8D7F2_8F05_1CE4_41D4_0452DC3468AE","from":"left","duration":700,"class":"SlideInEffect"},{"id":"Container_927243E5_8F1B_34EF_41DF_BD664D5033E2","minHeight":20,"minWidth":20,"data":{"name":"Container"},"scrollBarMargin":2,"scrollBarColor":"#000000","top":"29.41%","overflow":"scroll","width":"34.761%","height":"41.65%","layout":"absolute","class":"Container","children":["this.Image_916F4BE4_8F1B_14ED_41D5_1CE37CE15676","this.Image_9152116A_8F1B_15E5_41DD_97D3A920ED5F"],"propagateClick":false,"gap":10,"backgroundOpacity":0,"left":"33.01%"},{"id":"video_99DBD4C6_8F3D_132D_41D7_7B1D792CAFE6","label":trans('video_99DBD4C6_8F3D_132D_41D7_7B1D792CAFE6.label'),"video":"this.videores_97F1BB4B_8F0B_153B_41DE_3C024CEDAD7A","thumbnailUrl":"media/video_99DBD4C6_8F3D_132D_41D7_7B1D792CAFE6_t.jpg","width":856,"height":480,"data":{"label":"CLIQUE AQUI"},"chromaSmoothing":0,"class":"Video","chromaColor":"#0FFE22","chromaThreshold":0.17},{"hfov":360,"id":"panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36","class":"Panorama","label":trans('panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36.label'),"vfov":180,"thumbnailUrl":"media/panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36_t.jpg","frames":[{"thumbnailUrl":"media/panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","height":4096,"class":"TiledImageResourceLevel","rowCount":8,"url":"media/panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36_0/{face}/0/{row}_{column}.jpg","colCount":48,"width":24576},{"tags":"ondemand","height":2048,"class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36_0/{face}/1/{row}_{column}.jpg","colCount":24,"width":12288},{"tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36_0/{face}/2/{row}_{column}.jpg","colCount":12,"width":6144},{"tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_80DB63AB_8BCE_D855_41C3_3AE27BBF3A36_0/{face}/3/{row}_{column}.jpg","colCount":6,"width":3072}],"class":"ImageResource"}}],"data":{"label":"SALA BRANCA"},"hfovMax":130},{"id":"effect_9490DAB4_8F05_176C_41DA_8DF1CF72ED2C","from":"left","duration":700,"class":"SlideInEffect"},{"id":"overlay_9D1EF1D5_8C4A_BBFC_41C0_75D7B83BF8A3","class":"HotspotPanoramaOverlay","data":{"label":"PORTA 01"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_9D5AC1EB_8C4A_BBD4_41D5_3229E03CBA1E"],"items":[{"hfov":10.5,"class":"HotspotPanoramaOverlayImage","distance":100,"image":"this.AnimatedImageResource_A48B14E5_8F05_7CEF_41C2_9297BFE5E4CD","pitch":4.77,"yaw":113.86,"vfov":10.5,"data":{"label":"PORTA 01"},"scaleMode":"fit_inside"}],"enabled":false,"maps":[],"enabledInCardboard":true},{"id":"overlay_9E46B513_8C4D_7875_41C0_5B196383BF51","class":"HotspotPanoramaOverlay","data":{"label":"PORTA 02"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_9E488516_8C4D_787F_41D2_797E5DA3AD64"],"items":[{"hfov":10.5,"class":"HotspotPanoramaOverlayImage","distance":100,"image":"this.AnimatedImageResource_A48B34E6_8F05_7CED_41D6_938957DC026C","pitch":4.28,"yaw":-156.89,"vfov":10.5,"data":{"label":"PORTA 02"},"scaleMode":"fit_inside"}],"enabled":false,"maps":[],"enabledInCardboard":true},{"id":"overlay_9F907541_8C4D_58D4_41D6_DCDA67CE95F6","class":"HotspotPanoramaOverlay","data":{"label":"PORTA 03"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_9F905542_8C4D_58D4_41CE_DF9CF4AD130D"],"items":[{"hfov":10.5,"class":"HotspotPanoramaOverlayImage","distance":100,"image":"this.AnimatedImageResource_A48BD4E6_8F05_7CED_4186_C50DF2A3F8BA","pitch":4.15,"yaw":-67.42,"vfov":10.5,"data":{"label":"PORTA 03"},"scaleMode":"fit_inside"}],"enabled":false,"maps":[],"enabledInCardboard":true},{"id":"overlay_9D134B36_8C4D_C8BC_41C4_16500CD01CC0","class":"HotspotPanoramaOverlay","data":{"label":"PORTA 04"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_9D129B36_8C4D_C8BC_41C1_6D3E64F123EB"],"items":[{"hfov":10.5,"class":"HotspotPanoramaOverlayImage","distance":100,"image":"this.AnimatedImageResource_A48BF4E6_8F05_7CED_41DB_FF1E5315C0BD","pitch":4.48,"yaw":21.94,"vfov":10.5,"data":{"label":"PORTA 04"},"scaleMode":"fit_inside"}],"enabled":false,"maps":[],"enabledInCardboard":true},{"id":"overlay_9E984AF5_8C4D_49BD_41D1_4EE655417001","class":"HotspotPanoramaOverlay","data":{"label":"LOGO MAPSX"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_9DF71B91_8C4D_4875_41A9_9EFC54B0AFBD"],"items":[{"hfov":25.9,"class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_9FC2FECF_8C4B_C9EC_41C5_2817CD4539D5","pitch":1.92,"yaw":-21.63,"data":{"label":"LOGO MAPSX"},"vfov":25.28,"scaleMode":"fit_inside"}],"maps":[],"enabledInCardboard":true},{"id":"overlay_9E43C38F_8C4D_B86C_41C9_84108F77867E","class":"HotspotPanoramaOverlay","data":{"label":"LOGO MAPSX"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_9E43E38F_8C4D_B86C_41C3_67E30C5D6F28"],"items":[{"hfov":25.9,"class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_9FC2FECF_8C4B_C9EC_41C5_2817CD4539D5","pitch":1.6,"yaw":-112.13,"data":{"label":"LOGO MAPSX"},"vfov":25.28,"scaleMode":"fit_inside"}],"maps":[],"enabledInCardboard":true},{"id":"overlay_9F953AEA_8C4D_49D4_41C1_11AECD16390F","class":"HotspotPanoramaOverlay","data":{"label":"LOGO MAPSX"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_9F952AEA_8C4D_49D4_41CC_CD3199EB4242"],"items":[{"hfov":25.9,"class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_9FC2FECF_8C4B_C9EC_41C5_2817CD4539D5","pitch":1.24,"yaw":67.25,"data":{"label":"LOGO MAPSX"},"vfov":25.28,"scaleMode":"fit_inside"}],"maps":[],"enabledInCardboard":true},{"id":"overlay_ABD5E55D_8F7D_7DDF_41E0_535CEE79D640","video":"this.videores_9C0AEA80_8F0B_3725_41E0_2E9BE319811E","vertices":[{"yaw":143.27,"class":"PanoramaPoint","pitch":8.18},{"yaw":173.87,"class":"PanoramaPoint","pitch":8.47},{"yaw":175.36,"class":"PanoramaPoint","pitch":-22.95},{"yaw":142.38,"class":"PanoramaPoint","pitch":-23.26}],"stateChange":"if(this.overlay_ABD5E55D_8F7D_7DDF_41E0_535CEE79D640.get('state') == 'playing'){ this.pauseGlobalAudios([this.overlay_ABD5E55D_8F7D_7DDF_41E0_535CEE79D640], true); } else { this.resumeGlobalAudios(); }","data":{"label":"APRESENTADORA"},"end":"this.setOverlaysVisibility([this.overlay_9D1EF1D5_8C4A_BBFC_41C0_75D7B83BF8A3,this.overlay_9E46B513_8C4D_7875_41C0_5B196383BF51,this.overlay_9F907541_8C4D_58D4_41D6_DCDA67CE95F6,this.overlay_9D134B36_8C4D_C8BC_41C4_16500CD01CC0], true, 0); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_A9A8D7F2_8F05_1CE4_41D4_0452DC3468AE, 'showEffect', false)}.bind(this); visibleFunc(this.Image_9E08BA03_8F0F_1724_41D9_26A928141C28)","image":"this.res_9DE7456A_8F0B_3DE5_41B6_DCF68ED0973D","class":"QuadVideoPanoramaOverlay","click":"this.setOverlaysVisibility([this.overlay_AC83B6EF_8F07_7CFB_41C6_A92D6813B3C1,this.overlay_A386A87E_8F0D_F3DC_4175_DCE290A49C9A], true, 0); if(this.overlay_ABD5E55D_8F7D_7DDF_41E0_535CEE79D640.get('state') != 'playing'){ this.overlay_ABD5E55D_8F7D_7DDF_41E0_535CEE79D640.play(); } else { this.overlay_ABD5E55D_8F7D_7DDF_41E0_535CEE79D640.pause(); }","chromaSmoothing":0,"useHandCursor":true,"chromaColor":"#3DD845","distance":50,"chromaThreshold":0.27,"cues":[]},{"id":"overlay_9F100426_8F07_F36D_41A5_C29434F0E240","video":"this.videores_9C0AEA80_8F0B_3725_41E0_2E9BE319811E","vertices":[{"yaw":142.89,"class":"PanoramaPoint","pitch":9.12},{"yaw":173.56,"class":"PanoramaPoint","pitch":9.32},{"yaw":174.82,"class":"PanoramaPoint","pitch":-22.1},{"yaw":142.06,"class":"PanoramaPoint","pitch":-22.32}],"stateChange":"if(this.overlay_9F100426_8F07_F36D_41A5_C29434F0E240.get('state') == 'playing'){ this.pauseGlobalAudios([this.overlay_9F100426_8F07_F36D_41A5_C29434F0E240], true); } else { this.resumeGlobalAudios(); }","end":"this.setOverlaysVisibility([this.overlay_9D1EF1D5_8C4A_BBFC_41C0_75D7B83BF8A3,this.overlay_9E46B513_8C4D_7875_41C0_5B196383BF51,this.overlay_9F907541_8C4D_58D4_41D6_DCDA67CE95F6,this.overlay_9D134B36_8C4D_C8BC_41C4_16500CD01CC0], true, 0); this.setOverlaysVisibility([this.overlay_9867AF2A_8F3D_0D65_41D1_9F2A5EF84497], true, 0); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_9490DAB4_8F05_176C_41DA_8DF1CF72ED2C, 'showEffect', false)}.bind(this); visibleFunc(this.Image_9E08BA03_8F0F_1724_41D9_26A928141C28)","enabled":false,"data":{"label":"APRESENTADORA 02"},"image":"this.res_9DE7456A_8F0B_3DE5_41B6_DCF68ED0973D","class":"QuadVideoPanoramaOverlay","click":"if(this.overlay_9F100426_8F07_F36D_41A5_C29434F0E240.get('state') != 'playing'){ this.overlay_9F100426_8F07_F36D_41A5_C29434F0E240.play(); } else { this.overlay_9F100426_8F07_F36D_41A5_C29434F0E240.pause(); }","chromaSmoothing":0,"useHandCursor":true,"distance":50,"chromaColor":"#3DD845","chromaThreshold":0.27,"cues":[]},{"id":"overlay_9867AF2A_8F3D_0D65_41D1_9F2A5EF84497","video":"this.videores_97F1BB4B_8F0B_153B_41DE_3C024CEDAD7A","vertices":[{"yaw":153.84,"class":"PanoramaPoint","pitch":15.57},{"yaw":-173.79,"class":"PanoramaPoint","pitch":15.51},{"yaw":-174.43,"class":"PanoramaPoint","pitch":-1.48},{"yaw":154.41,"class":"PanoramaPoint","pitch":-1.42}],"data":{"label":"Video"},"loop":true,"image":"this.res_96C58731_8F0B_1D67_4182_27CD38868733","class":"QuadVideoPanoramaOverlay","chromaSmoothing":0,"useHandCursor":true,"chromaColor":"#0FFE22","distance":50,"chromaThreshold":0.17,"cues":[],"autoplay":true},{"id":"overlay_AC83B6EF_8F07_7CFB_41C6_A92D6813B3C1","class":"HotspotPanoramaOverlay","data":{"label":"CLIQUE PARA PAUSAR"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_AB12F73D_8F07_7D5F_41C1_2F64878BBF28"],"items":["this.HotspotPanoramaOverlayTextImage_AC87D6EA_8F07_7CE5_41D4_A0F43268B8EB"],"enabled":false,"maps":[],"enabledInCardboard":true},{"id":"overlay_A386A87E_8F0D_F3DC_4175_DCE290A49C9A","class":"HotspotPanoramaOverlay","data":{"label":"botão x"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_A546F8DC_8F0D_F4DD_41DA_C0322F7A9341"],"items":[{"hfov":3.1,"class":"HotspotPanoramaOverlayImage","distance":50,"image":"this.res_A5AE8800_8F0D_1325_41D9_1A62BEA6554C","pitch":9.23,"yaw":148.14,"data":{"label":"bot\u00e3o x"},"vfov":3.28,"scaleMode":"fit_inside"}],"maps":[],"enabledInCardboard":true},{"id":"videores_9C0AEA80_8F0B_3725_41E0_2E9BE319811E","height":858,"class":"VideoResource","levels":["this.videolevel_A4C45440_8F05_7325_41A4_2798FD8633C1"],"width":858},{"id":"sequence_80F080D8_8BCE_B9F3_41D3_B83A43EFD6B8","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out"}],"class":"PanoramaCameraSequence"},{"id":"videores_97F1BB4B_8F0B_153B_41DE_3C024CEDAD7A","height":480,"class":"VideoResource","levels":["this.videolevel_A4C44426_8F05_736D_41DE_BC7D9CC43153"],"width":856},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_9D5AC1EB_8C4A_BBD4_41D5_3229E03CBA1E","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"AnimatedImageResource_A48B14E5_8F05_7CEF_41C2_9297BFE5E4CD","frameCount":24,"class":"AnimatedImageResource","rowCount":6,"frameDuration":41,"finalFrame":"first","colCount":4,"levels":[{"height":1200,"class":"ImageResourceLevel","url":"media/res_9FC17ECE_8C4B_C9EC_41C7_F1CB05EE3C38_0.png","width":800}]},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_9E488516_8C4D_787F_41D2_797E5DA3AD64","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"AnimatedImageResource_A48B34E6_8F05_7CED_41D6_938957DC026C","frameCount":24,"class":"AnimatedImageResource","rowCount":6,"frameDuration":41,"finalFrame":"first","colCount":4,"levels":[{"height":1200,"class":"ImageResourceLevel","url":"media/res_9FC17ECE_8C4B_C9EC_41C7_F1CB05EE3C38_0.png","width":800}]},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_9F905542_8C4D_58D4_41CE_DF9CF4AD130D","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"AnimatedImageResource_A48BD4E6_8F05_7CED_4186_C50DF2A3F8BA","frameCount":24,"class":"AnimatedImageResource","rowCount":6,"frameDuration":41,"finalFrame":"first","colCount":4,"levels":[{"height":1200,"class":"ImageResourceLevel","url":"media/res_9FC17ECE_8C4B_C9EC_41C7_F1CB05EE3C38_0.png","width":800}]},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_9D129B36_8C4D_C8BC_41C1_6D3E64F123EB","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"AnimatedImageResource_A48BF4E6_8F05_7CED_41DB_FF1E5315C0BD","frameCount":24,"class":"AnimatedImageResource","rowCount":6,"frameDuration":41,"finalFrame":"first","colCount":4,"levels":[{"height":1200,"class":"ImageResourceLevel","url":"media/res_9FC17ECE_8C4B_C9EC_41C7_F1CB05EE3C38_0.png","width":800}]},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_9DF71B91_8C4D_4875_41A9_9EFC54B0AFBD","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"res_9FC2FECF_8C4B_C9EC_41C5_2817CD4539D5","class":"ImageResource","levels":[{"height":1210,"class":"ImageResourceLevel","url":"media/res_9FC2FECF_8C4B_C9EC_41C5_2817CD4539D5_0.jpg","width":1197}]},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_9E43E38F_8C4D_B86C_41C3_67E30C5D6F28","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_9F952AEA_8C4D_49D4_41CC_CD3199EB4242","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"res_9DE7456A_8F0B_3DE5_41B6_DCF68ED0973D","class":"ImageResource","levels":[{"height":1080,"class":"ImageResourceLevel","url":"media/res_9DE7456A_8F0B_3DE5_41B6_DCF68ED0973D_0.jpg","width":1080}]},{"id":"res_96C58731_8F0B_1D67_4182_27CD38868733","class":"ImageResource","levels":[{"height":480,"class":"ImageResourceLevel","url":"media/res_96C58731_8F0B_1D67_4182_27CD38868733_0.jpg","width":856}]},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_AB12F73D_8F07_7D5F_41C1_2F64878BBF28","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"HotspotPanoramaOverlayTextImage_AC87D6EA_8F07_7CE5_41D4_A0F43268B8EB","data":{"label":"CLIQUE PARA PAUSAR"},"hfov":14.21,"class":"HotspotPanoramaOverlayImage","distance":50,"image":{"class":"ImageResource","levels":["this.imlevel_AA1166E8_8F7F_3CE5_41D5_DE2C87AD1DB4"]},"roll":-1.13,"pitch":8.91,"vfov":2.52,"yaw":174.55},{"id":"HotspotPanoramaOverlayArea_A546F8DC_8F0D_F4DD_41DA_C0322F7A9341","class":"HotspotPanoramaOverlayArea","click":"this.setOverlaysVisibility([this.overlay_9D1EF1D5_8C4A_BBFC_41C0_75D7B83BF8A3,this.overlay_9E46B513_8C4D_7875_41C0_5B196383BF51,this.overlay_9F907541_8C4D_58D4_41D6_DCDA67CE95F6,this.overlay_9D134B36_8C4D_C8BC_41C4_16500CD01CC0,this.overlay_9F100426_8F07_F36D_41A5_C29434F0E240], true, 0); this.setOverlaysVisibility([this.overlay_ABD5E55D_8F7D_7DDF_41E0_535CEE79D640], false, 0)","mapColor":"any","displayTooltipInTouchScreens":true},{"id":"res_A5AE8800_8F0D_1325_41D9_1A62BEA6554C","class":"ImageResource","levels":[{"height":146,"class":"ImageResourceLevel","url":"media/res_A5AE8800_8F0D_1325_41D9_1A62BEA6554C_0.png","width":146}]},{"id":"videolevel_A4C45440_8F05_7325_41A4_2798FD8633C1","height":858,"class":"VideoResourceLevel","posterURL":trans('videolevel_A4C45440_8F05_7325_41A4_2798FD8633C1.posterURL'),"framerate":30,"type":"video/mp4","bitrate":1656,"url":trans('videolevel_A4C45440_8F05_7325_41A4_2798FD8633C1.url'),"codec":"h264","width":858},{"id":"videolevel_A4C44426_8F05_736D_41DE_BC7D9CC43153","height":480,"class":"VideoResourceLevel","posterURL":trans('videolevel_A4C44426_8F05_736D_41DE_BC7D9CC43153.posterURL'),"framerate":60,"type":"video/mp4","bitrate":927,"url":trans('videolevel_A4C44426_8F05_736D_41DE_BC7D9CC43153.url'),"codec":"h264","width":856},{"id":"imlevel_AA1166E8_8F7F_3CE5_41D5_DE2C87AD1DB4","height":167.43,"class":"ImageResourceLevel","url":trans('imlevel_AA1166E8_8F7F_3CE5_41D5_DE2C87AD1DB4.url'),"width":947.41}],"layout":"absolute","class":"Player","defaultMenu":["fullscreen","mute","rotation"],"propagateClick":false,"gap":10,"watermark":false};
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