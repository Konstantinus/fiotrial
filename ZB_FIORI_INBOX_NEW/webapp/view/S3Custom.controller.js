jQuery.sap.require("cross.fnd.fiori.inbox.util.Forward");
jQuery.sap.require("cross.fnd.fiori.inbox.util.SupportInfo");
jQuery.sap.require("cross.fnd.fiori.inbox.util.Conversions");
jQuery.sap.require("cross.fnd.fiori.inbox.attachment.util.AttachmentFormatters");
jQuery.sap.require("cross.fnd.fiori.inbox.util.DataManager");
jQuery.sap.require("sap.ca.scfld.md.controller.BaseDetailController");
jQuery.sap.require("sap.ca.ui.message.message");
jQuery.sap.require("sap.ca.ui.model.type.DateTime");
jQuery.sap.require("cross.fnd.fiori.inbox.util.Resubmit");
jQuery.sap.require("cross.fnd.fiori.inbox.util.Parser");
jQuery.sap.require("cross.fnd.fiori.inbox.util.ConfirmationDialogManager");
jQuery.sap.require("cross.fnd.fiori.inbox.util.EmployeeCard");
jQuery.sap.require("cross.fnd.fiori.inbox.util.ComponentCache");
sap.ui.controller("cross.fnd.fiori.inbox.ZB_FIORI_INBOX_NEW.view.S3Custom", {
	//    extHookOnDataLoaded: null,
	//    extHookGetEntitySetsToExpand: null,
	//    extHookChangeFooterButtons: null,
	//    oModel2: null,
	//    oDetailData2: null,
	//    oGenericComponent: null,
	//    oGenericAttachmentComponent: null,
	//    oConfirmationDialogManager: cross.fnd.fiori.inbox.util.ConfirmationDialogManager,
	//    fnFormatterSupportsProperty: cross.fnd.fiori.inbox.Conversions.formatterSupportsProperty,
	//    oMapCountProperty: {
	//        "Comments": "CommentsCount",
	//        "Attachments": "AttachmentsCount",
	//        "ProcessingLogs": "ProcessingLogsCount"
	//    },
	//    bShowAdditionalAttributes: null,
	//    sCustomTaskTitleAttribute: "CustomTaskTitle",
	//    sCustomNumberValueAttribute: "CustomNumberValue",
	//    sCustomNumberUnitValueAttribute: "CustomNumberUnitValue",
	//    sCustomObjectAttributeValue: "CustomObjectAttributeValue",
	//    onExit: function () {
	//        this.oComponentCache.destroyCacheContent();
	//        delete this.oComponentCache;
	//        if (sap.ca.scfld.md.controller.BaseDetailController.prototype.onExit) {
	//            sap.ca.scfld.md.controller.BaseDetailController.prototype.onExit.call(this);
	//        }
	//    },
	//    onInit: function () {
	//        sap.ca.scfld.md.controller.BaseDetailController.prototype.onInit.call(this);
	//        var v = this.getView();
	//        this.i18nBundle = v.getModel("i18n").getResourceBundle();
	//        this.sResubmitUniqueId = this.createId() + "DLG_RESUBMIT";
	//        var e = sap.ca.scfld.md.app.Application.getImpl().getComponent().getEventBus();
	//        e.subscribe("cross.fnd.fiori.inbox", "open_supportinfo", this.onSupportInfoOpenEvent, this);
	//        e.subscribe("cross.fnd.fiori.inbox.dataManager", "taskCollectionFailed", jQuery.proxy(this.onTaskCollectionFailed, this));
	//        e.subscribe("cross.fnd.fiori.inbox.dataManager", "showReleaseLoaderOnInfoTab", jQuery.proxy(this.onShowReleaseLoaderOnInfoTab, this));
	//        e.subscribe("cross.fnd.fiori.inbox.dataManager", "showReleaseLoader", jQuery.proxy(this.onShowReleaseLoader, this));
	//        e.subscribe("cross.fnd.fiori.inbox.dataManager", "UIExecutionLinkRequest", jQuery.proxy(this.onShowReleaseLoader, this));
	//        this.aCA = [];
	//        this.aTaskDefinitionData = [];
	//        this.aUIExecutionLinkCatchedData = [];
	//        this.oRouter.attachRoutePatternMatched(this.handleNavToDetail, this);
	//        this.oHeaderFooterOptions = {};
	//        this.oTabBar = v.byId("tabBar");
	//        if (this.oTabBar) {
	//            this.oTabBar.bindProperty("visible", "detail>/showGenericComponent", function (V) {
	//                if (V === undefined) {
	//                    return false;
	//                }
	//                return !V;
	//            });
	//        }
	//        var d = sap.ca.scfld.md.app.Application.getImpl().getComponent().getDataManager();
	//        if (d) {
	//            var c = d.getCacheSize();
	//            if (c) {
	//                this.oComponentCache = new cross.fnd.fiori.inbox.ComponentCache(c);
	//            } else {
	//                this.oComponentCache = new cross.fnd.fiori.inbox.ComponentCache();
	//            }
	//        } else {
	//            this.oComponentCache = new cross.fnd.fiori.inbox.ComponentCache();
	//        }
	//    },
	//    onTaskCollectionFailed: function () {
	//        this.getView().setBusy(false);
	//    },
	//    onShowReleaseLoaderOnInfoTab: function (c, e, v) {
	//        var i = this.getView().byId("infoTabContent");
	//        if (i) {
	//            i.setBusyIndicatorDelay(0).setBusy(v.bValue);
	//        }
	//    },
	//    onShowReleaseLoader: function (c, e, v) {
	//        this.getView().setBusyIndicatorDelay(1000);
	//        this.getView().setBusy(v.bValue);
	//    },
	//    createGenericAttachmentComponent: function (v) {
	//        var a = v.byId("attachmentComponent");
	//        if (!jQuery.isEmptyObject(this.oGenericAttachmentComponent)) {
	//            this.oGenericAttachmentComponent.destroy();
	//            delete this.oGenericAttachmentComponent;
	//        }
	//        this.oGenericAttachmentComponent = sap.ui.getCore().createComponent({
	//            name: "cross.fnd.fiori.inbox.attachment",
	//            settings: { attachmentHandle: this.fnCreateAttachmentHandle(this.sCtxPath) }
	//        });
	//        this.oGenericAttachmentComponent.uploadURL(this.fnGetUploadUrl(this.sCtxPath));
	//        a.setPropagateModel(true);
	//        a.setComponent(this.oGenericAttachmentComponent);
	//    },
	//    createGenericCommentsComponent: function (v) {
	//        var c = v.byId("commentsContainer");
	//        if (!jQuery.isEmptyObject(this.oGenericCommentsComponent)) {
	//            this.oGenericCommentsComponent.destroy();
	//            delete this.oGenericCommentsComponent;
	//        }
	//        this.oGenericCommentsComponent = sap.ui.getCore().createComponent({
	//            name: "cross.fnd.fiori.inbox.comments",
	//            componentData: { oModel: this.oModel2 }
	//        });
	//        this.oGenericCommentsComponent.setContainer(c);
	//        c.setComponent(this.oGenericCommentsComponent);
	//        this.oGenericCommentsComponent.getEventBus().subscribe(null, "commentAdded", jQuery.proxy(this.onCommentPost, this));
	//        this.oGenericCommentsComponent.getEventBus().subscribe(null, "businessCardRequested", jQuery.proxy(this.onEmployeeLaunchCommentSender, this));
	//    },
	//    handleNavToDetail: function (e) {
	//        this.oRoutingParameters = e.getParameters().arguments;
	//        if (e.getParameter("name") === "detail" || e.getParameter("name") === "detail_deep") {
	//            this.bIsTableViewActive = e.getParameter("name") === "detail_deep";
	//            var i = e.getParameter("arguments").InstanceID;
	//            if (i.search(":") == i.length - 1) {
	//                return;
	//            }
	//            if (jQuery.isEmptyObject(this.getView().getModel().oData)) {
	//                var p = {
	//                    SAP__Origin: e.getParameters().arguments.SAP__Origin,
	//                    InstanceID: e.getParameters().arguments.InstanceID + ":",
	//                    contextPath: e.getParameters().arguments.contextPath
	//                };
	//                this.oRouter.navTo("detail", p, true);
	//                return;
	//            }
	//            if (!this.stayOnDetailScreen || sap.ui.Device.system.phone) {
	//                var d = this.oTabBar.getItems()[0];
	//                this.oTabBar.setSelectedItem(d);
	//            } else {
	//                this.stayOnDetailScreen = false;
	//            }
	//            var r = {
	//                sCtxPath: "/" + e.getParameters().arguments.contextPath,
	//                sInstanceID: i,
	//                sSAP__Origin: e.getParameter("arguments").SAP__Origin,
	//                bCommentCreated: false
	//            };
	//            this.refreshData(r);
	//        }
	//    },
	//    fnGetUploadUrl: function (c) {
	//        return this.oContext.getModel().sServiceUrl + c + "/Attachments";
	//    },
	//    fnCreateAttachmentHandle: function (c) {
	//        var a = {
	//            fnOnAttachmentChange: jQuery.proxy(this.onAttachmentChange, this),
	//            fnOnAttachmentUploadComplete: jQuery.proxy(this.onAttachmentUploadComplete, this),
	//            fnOnAttachmentDeleted: jQuery.proxy(this.onAttachmentDeleted, this),
	//            detailModel: this.oModel2,
	//            uploadUrl: this.fnGetUploadUrl(this.sCtxPath)
	//        };
	//        return a;
	//    },
	//    fnRenderComponent: function (c) {
	//        var d = this.oModel2.getData();
	//        var t = d ? d["TaskDefinitionID"] : "";
	//        var s = d ? d["SAP__Origin"] : "";
	//        var k = t.concat(s);
	//        var C = this.oComponentCache.getComponentByKey(k);
	//        var p = {
	//            sServiceUrl: c.ServiceURL,
	//            sAnnoFileURI: c.AnnotationURL,
	//            sErrorMessageNoData: this.i18nBundle.getText("annotationcomponent.load.error"),
	//            sApplicationPath: c.ApplicationPath
	//        };
	//        var o = {
	//            startupParameters: { oParameters: p },
	//            inboxHandle: {
	//                attachmentHandle: this.fnCreateAttachmentHandle(this.sCtxPath),
	//                tabSelectHandle: { fnOnTabSelect: jQuery.proxy(this.onTabSelect, this) },
	//                inboxDetailView: this
	//            }
	//        };
	//        var v = this.getView();
	//        if (!jQuery.isEmptyObject(this.oGenericComponent)) {
	//            if (!this.oComponentCache.getComponentById(this.oGenericComponent.getId())) {
	//                this.oGenericComponent.destroy();
	//            }
	//        }
	//        if (jQuery.isEmptyObject(C)) {
	//            if (c.ApplicationPath != "") {
	//                jQuery.sap.registerModulePath(c.ComponentName, c.ApplicationPath[0] == "/" ? c.ApplicationPath : "/" + c.ApplicationPath);
	//            }
	//            try {
	//                C = sap.ui.getCore().createComponent({
	//                    name: c.ComponentName,
	//                    componentData: o
	//                });
	//                if (C && C.getIsCacheable && C.getIsCacheable() === true) {
	//                    try {
	//                        this.oComponentCache.cacheComponent(k, C);
	//                    } catch (e) {
	//                        $.sap.log.error(e);
	//                    }
	//                }
	//            } catch (E) {
	//                $.sap.log.error("Cannot create component for smart template rendering. Showing standard task in the detail screen as a fallback");
	//                return false;
	//            }
	//        } else {
	//            if (C && C.updateBinding) {
	//                C.updateBinding(o);
	//            }
	//        }
	//        v.byId("genericComponentContainer").setComponent(C);
	//        this.oGenericComponent = C;
	//        return true;
	//    },
	//    fnParseComponentParameters: function (r) {
	//        var p = cross.fnd.fiori.inbox.util.Parser.fnParseComponentParameters(r);
	//        this.isGenericComponentRendered = !jQuery.isEmptyObject(p) ? this.fnRenderComponent(p) : false;
	//        this.oModel2.setProperty("/showGenericComponent", this.isGenericComponentRendered);
	//        this.fnShowHideDetailScrollBar(!this.isGenericComponentRendered);
	//    },
	//    fnShowHideDetailScrollBar: function (s) {
	//        if (s) {
	//            this.byId("mainPage").setEnableScrolling(true);
	//        } else {
	//            this.byId("mainPage").setEnableScrolling(false);
	//        }
	//    },
	//    switchToOutbox: function () {
	//        return this.oDataManager.bOutbox ? true : false;
	//    },
	//    refreshData: function (r) {
	//        if (!this.bIsControllerInited) {
	//            var c = sap.ca.scfld.md.app.Application.getImpl().getComponent();
	//            this.oDataManager = c.getDataManager();
	//            if (!this.oDataManager) {
	//                var o = this.getView().getModel();
	//                this.oDataManager = new cross.fnd.fiori.inbox.util.DataManager(o, this);
	//                c.setDataManager(this.oDataManager);
	//            }
	//            this.oDataManager.attachItemRemoved(jQuery.proxy(this._handleItemRemoved, this));
	//            this.oDataManager.attachRefreshDetails(jQuery.proxy(this._handleDetailRefresh, this));
	//            this.bIsControllerInited = true;
	//        }
	//        sap.ca.scfld.md.app.Application.getImpl().getComponent().getEventBus().publish("cross.fnd.fiori.inbox", "storeNextItemsToSelect", {
	//            "sOrigin": r.sSAP__Origin,
	//            "sInstanceID": r.sInstanceID
	//        });
	//        this.clearCustomAttributes();
	//        var v = this.getView();
	//        this.oContext = new sap.ui.model.Context(v.getModel(), r.sCtxPath);
	//        v.setBindingContext(this.oContext);
	//        this.sCtxPath = r.sCtxPath;
	//        var i = jQuery.extend(true, {}, v.getModel().getData(this.oContext.getPath(), this.oContext));
	//        if (this._getShowAdditionalAttributes() === true) {
	//            i = this._processCustomAttributesData(i);
	//        }
	//        this.oModel2 = new sap.ui.model.json.JSONModel(i);
	//        this.oModel2.setProperty("/sServiceUrl", v.getModel().sServiceUrl);
	//        v.setModel(this.oModel2, "detail");
	//        this._updateHeaderTitle(i);
	//        var g = v.byId("genericComponentContainer");
	//        if (g.getComponentInstance()) {
	//            g.getComponentInstance().destroy();
	//        }
	//        var t = this;
	//        var s = function (D, C) {
	//            if (t.extHookOnDataLoaded) {
	//                t.extHookOnDataLoaded(D);
	//            }
	//            t.oModel2.setData(D, true);
	//            t.oDetailData2 = D;
	//            var S = t.byId("tabBar").getSelectedKey();
	//            if (S === "NOTES") {
	//                t.fnSetIconForCommentsFeedInput();
	//                this.fnFetchDataOnTabSelect("Comments");
	//            } else if (S === "ATTACHMENTS") {
	//                this.fnFetchDataOnTabSelect("Attachments");
	//            } else if (S === "PROCESSINGLOGS") {
	//                this.fnFetchDataOnTabSelect("ProcessingLogs");
	//            } else if (S === "OBJECTLINKS") {
	//                t.fnFetchObjectLinks();
	//            } else if (S === "DESCRIPTION") {
	//                t.byId("DescriptionContent").rerender();
	//            }
	//            if (!this._getShowAdditionalAttributes()) {
	//                if (D.CustomAttributeData.results.length > 0) {
	//                    t.oModel2.setProperty("/CustomAttributeData", D.CustomAttributeData.results);
	//                }
	//            } else if (this._getShowAdditionalAttributes() === true) {
	//                if (t.oModel2.getData().CustomAttributeDefinitionData == null && C) {
	//                    t.oModel2.setProperty("/CustomAttributeDefinitionData", C);
	//                }
	//            }
	//            jQuery.proxy(t._createCustomAttributesOnDataLoaded(C), t);
	//        };
	//        if (this.oHeaderFooterOptions) {
	//            this.oHeaderFooterOptions = jQuery.extend(this.oHeaderFooterOptions, {
	//                oPositiveAction: null,
	//                oNegativeAction: null,
	//                buttonList: [],
	//                oJamOptions: null,
	//                oEmailSettings: null,
	//                oUpDownOptions: null,
	//                onBack: this.bIsTableViewActive ? jQuery.proxy(this.fnNavBackToTableVw, this) : null
	//            });
	//            this.refreshHeaderFooterOptions();
	//        }
	//        if (this.oModel2 != null) {
	//            this.fnClearCachedData();
	//        }
	//        var k = r.sSAP__Origin + r.sInstanceID;
	//        var d = false;
	//        var u = false;
	//        var I = i.TaskSupports.UIExecutionLink;
	//        this.oDataManager.readDecisionOptions(i.SAP__Origin, i.InstanceID, i.TaskDefinitionID, jQuery.proxy(function (D) {
	//            d = true;
	//            var U = this.oDataManager.getDataFromCache("UIExecutionLink", i);
	//            if (u) {
	//                if (I) {
	//                    U = U ? U : {};
	//                    this.createDecisionButtons(D, U, r.sSAP__Origin);
	//                } else {
	//                    this.createDecisionButtons(D, {}, r.sSAP__Origin);
	//                }
	//            }
	//        }, this), jQuery.proxy(function (e) {
	//            jQuery.sap.log.error("Error while loading decision options");
	//            var U = this.oDataManager.getDataFromCache("UIExecutionLink", i);
	//            d = true;
	//            if (u) {
	//                if (I) {
	//                    U = U ? U : {};
	//                    this.createDecisionButtons([], U, r.sSAP__Origin);
	//                } else {
	//                    this.createDecisionButtons([], {}, r.sSAP__Origin);
	//                }
	//            }
	//        }, this), false);
	//        this.oDataManager.fetchUIExecutionLink(i, jQuery.proxy(function (U) {
	//            u = true;
	//            i.UIExecutionLink = U;
	//            var D = this.oDataManager.getDataFromCache("DecisionOptions", i);
	//            if (d) {
	//                if (I) {
	//                    D = D ? D : [];
	//                    this.createDecisionButtons(D, U, r.sSAP__Origin);
	//                } else {
	//                    D = D ? D : [];
	//                    this.createDecisionButtons(D, {}, r.sSAP__Origin);
	//                }
	//            }
	//            U = I ? U : {};
	//            var b = this.fnHandleIntentValidationAndNavigation(U, r, s);
	//            if (!b) {
	//                this.fnParseComponentParameters(I ? U.GUI_Link : "");
	//            }
	//        }, this), jQuery.proxy(function (e) {
	//            u = true;
	//            this.fnParseComponentParameters("");
	//            var D = this.oDataManager.getDataFromCache("DecisionOptions", i);
	//            if (d) {
	//                D = D ? D : [];
	//                this.createDecisionButtons(D, {}, r.sSAP__Origin);
	//            }
	//            this.fnHandleIntentValidationAndNavigation({}, r, s);
	//        }, this));
	//    },
	//    fnHandleIntentValidationAndNavigation: function (U, r, s) {
	//        var u = U.GUI_Link;
	//        var i = false, t = this;
	//        this.oURLParsingService = this.oURLParsingService || sap.ushell && sap.ushell.Container && sap.ushell.Container.getService && sap.ushell.Container.getService("URLParsing");
	//        if (this.oURLParsingService && this.oURLParsingService.isIntentUrl(u)) {
	//            var p = this.oURLParsingService.parseShellHash(u);
	//            if (p) {
	//                this.xNavService = this.xNavService || sap.ushell && sap.ushell.Container && sap.ushell.Container.getService && sap.ushell.Container.getService("CrossApplicationNavigation");
	//                if (this.xNavService) {
	//                    i = true;
	//                    var e = jQuery.extend({ "openMode": "embedIntoDetails" }, p.params);
	//                    var R = jQuery.extend({ "openMode": "replaceDetails" }, p.params);
	//                    var E = jQuery.extend({ "openMode": "external" }, p.params);
	//                    this.xNavService.isNavigationSupported([
	//                        {
	//                            target: {
	//                                semanticObject: p.semanticObject,
	//                                action: p.action
	//                            },
	//                            params: e
	//                        },
	//                        {
	//                            target: {
	//                                semanticObject: p.semanticObject,
	//                                action: p.action
	//                            },
	//                            params: R
	//                        },
	//                        {
	//                            target: {
	//                                semanticObject: p.semanticObject,
	//                                action: p.action
	//                            },
	//                            params: E
	//                        }
	//                    ], sap.ca.scfld.md.app.Application.getImpl().getComponent()).done(function (a) {
	//                        var b = a[0].supported;
	//                        var c = a[1].supported;
	//                        var d = a[2].supported;
	//                        var f = [
	//                            u,
	//                            p,
	//                            b,
	//                            c,
	//                            d,
	//                            U,
	//                            r,
	//                            s
	//                        ];
	//                        if (b || c || d) {
	//                            t.fnHandleIntentNavigation.apply(t, f);
	//                        } else {
	//                            t.fnViewTaskInDefaultView(U, r, s);
	//                        }
	//                    }).fail(function () {
	//                        t.fnViewTaskInDefaultView(U, r, s);
	//                    });
	//                }
	//            }
	//        }
	//        if (!i) {
	//            t.fnViewTaskInDefaultView(U, r, s);
	//        }
	//        return i;
	//    },
	//    fnHandleIntentNavigation: function (u, p, e, r, E, U, R, s) {
	//        if (e && !r && !E) {
	//            p.params.openMode = "embedIntoDetails";
	//            this.fnRenderIntentBasedApp(p, U, R, s);
	//        } else {
	//            var b = !e && r && !E;
	//            p.params.openMode = b ? "replaceDetails" : "external";
	//            this.oEmbedModeIntentParams = {};
	//            this.oEmbedModeIntentParams[R.sSAP__Origin + "_" + R.sInstanceID] = jQuery.extend({ "OpenInEmbedMode": b }, p);
	//            this.fnViewTaskInDefaultView(U, R, s);
	//        }
	//    },
	//    fnRenderIntentBasedApp: function (p, U, r, s) {
	//        var t = this;
	//        var n = "#" + p.semanticObject + "-" + p.action;
	//        var g = this.byId("genericComponentContainer").getComponentInstance();
	//        if (g) {
	//            g.destroy();
	//        }
	//        var N = sap.ushell.Container.getService("CrossApplicationNavigation");
	//        var c = { onTaskUpdate: jQuery.proxy(t.fnDelegateTaskRefresh, t) };
	//        var P = "?" + t.fnCreateURLParameters(p.params);
	//        N.createComponentInstance(n + P, { componentData: c }, t.getOwnerComponent()).done(function (C) {
	//            t.byId("genericComponentContainer").setComponent(C);
	//            t.oModel2.setProperty("/showGenericComponent", true);
	//        }).fail(function (e) {
	//            t.oModel2.setProperty("/showGenericComponent", false);
	//            jQuery.sap.log.error(e);
	//            t.fnViewTaskInDefaultView(U, r, s);
	//        });
	//    },
	//    fnCreateURLParameters: function (d) {
	//        return Object.keys(d).map(function (k) {
	//            return [
	//                k,
	//                d[k]
	//            ].map(encodeURIComponent).join("=");
	//        }).join("&");
	//    },
	//    fnDelegateTaskRefresh: function () {
	//        var n = this.oRoutingParameters;
	//        var s = n.SAP__Origin;
	//        var i = n.InstanceID;
	//        if (n && s && i) {
	//            this.oDataManager.fnUpdateSingleTask(s, i);
	//        }
	//    },
	//    fnNavigateToApp: function (p, e) {
	//        if (!e) {
	//            this.xNavService.toExternal({
	//                target: {
	//                    semanticObject: p.semanticObject,
	//                    action: p.action
	//                },
	//                params: p.params
	//            });
	//        } else {
	//            var o = p.params.openMode;
	//            this.fnEmbedApplicationInDetailView(p, o);
	//        }
	//    },
	//    fnViewTaskInDefaultView: function (U, r, s) {
	//        this.oModel2.setProperty("/showGenericComponent", false);
	//        this.fnGetDetailsForSelectedTask(U, r, s);
	//    },
	//    fnGetDetailsForSelectedTask: function (U, r, s) {
	//        var t = this;
	//        var e = ["Description"];
	//        if (!this._getShowAdditionalAttributes()) {
	//            e.push("CustomAttributeData");
	//        }
	//        if (this.extHookGetEntitySetsToExpand) {
	//            var E = this.extHookGetEntitySetsToExpand();
	//            e.push.apply(e, E);
	//        }
	//        if (!U.GUI_Link) {
	//            U.GUI_Link = "";
	//        }
	//        var i = t.oModel2.getData();
	//        if (!t.isGenericComponentRendered) {
	//            if (t.fnFormatterSupportsProperty(i.TaskSupports.Attachments, i.SupportsAttachments)) {
	//                t.fnCountUpdater("Attachments", i.SAP__Origin, i.InstanceID);
	//            }
	//            if (t.fnFormatterSupportsProperty(i.TaskSupports.Comments, i.SupportsComments)) {
	//                this.fnCountUpdater("Comments", i.SAP__Origin, i.InstanceID);
	//            }
	//            if (i.TaskSupports.ProcessingLogs) {
	//                t.fnCountUpdater("ProcessingLogs", i.SAP__Origin, i.InstanceID);
	//            }
	//            if (i.TaskSupports.TaskObject && t.oDataManager.bShowTaskObjects) {
	//                t.fnCountUpdater("ObjectLinks", i.SAP__Origin, i.InstanceID);
	//            }
	//            t.oDataManager.readDataOnTaskSelection(r.sCtxPath, e, r.sSAP__Origin, r.sInstanceID, i.TaskDefinitionID, function (d, c) {
	//                d.UIExecutionLink = U;
	//                s.call(t, d, c);
	//            });
	//        } else {
	//            t.oDataManager.setDetailPageLoaded(true);
	//            if (t.byId("attachmentComponent") && t.fnFormatterSupportsProperty(t.oModel2.getData().TaskSupports.Attachments, t.oModel2.getData().SupportsAttachments)) {
	//                t.fnCountUpdater("Attachments", t.oModel2.getData().SAP__Origin, t.oModel2.getData().InstanceID);
	//            }
	//            if (t.byId("commentsContainer") && t.fnFormatterSupportsProperty(t.oModel2.getData().TaskSupports.Comments, t.oModel2.getData().SupportsComments)) {
	//                t.fnCountUpdater("Comments", t.oModel2.getData().SAP__Origin, t.oModel2.getData().InstanceID);
	//            }
	//        }
	//    },
	//    clearCustomAttributes: function () {
	//        if (this.aCA.length > 0) {
	//            for (var i = 0; i < this.aCA.length; i++)
	//                this.aCA[i].destroy();
	//            this.aCA = [];
	//        }
	//    },
	//    onAttachmentChange: function (e) {
	//        var u = e.getSource();
	//        var f = e.getParameters().getParameters().files[0].name;
	//        if (u.getHeaderParameters()) {
	//            u.destroyHeaderParameters();
	//        }
	//        var l = f.lastIndexOf(".");
	//        if (l != -1) {
	//            f = f.substr(0, l);
	//        }
	//        u.addHeaderParameter(new sap.m.UploadCollectionParameter({
	//            name: "x-csrf-token",
	//            value: this.getXsrfToken()
	//        }));
	//        u.addHeaderParameter(new sap.m.UploadCollectionParameter({
	//            name: "slug",
	//            value: f
	//        }));
	//        u.addParameter(new sap.m.UploadCollectionParameter({
	//            name: "x-csrf-token",
	//            value: this.getXsrfToken()
	//        }));
	//        u.addParameter(new sap.m.UploadCollectionParameter({
	//            name: "slug",
	//            value: f
	//        }));
	//        u.addHeaderParameter(new sap.m.UploadCollectionParameter({
	//            name: "Accept",
	//            value: "application/json"
	//        }));
	//        u.addParameter(new sap.m.UploadCollectionParameter({
	//            name: "Accept",
	//            value: "application/json"
	//        }));
	//    },
	//    onAttachmentUploadComplete: function (e) {
	//        var i = this.oModel2.getData();
	//        var t = this;
	//        t.oEventSource = e.getSource();
	//        var c = function () {
	//            this.oEventSource.updateAggregation("items");
	//            this.oEventSource.rerender();
	//        };
	//        if (e.getParameters().getParameters().status == 201) {
	//            var f = jQuery.parseJSON(e.getParameters().files[0].responseRaw).d;
	//            if (i.Attachments && i.Attachments.results) {
	//                i.Attachments.results.unshift(f);
	//            } else {
	//                i.Attachments = { results: [f] };
	//            }
	//            i.AttachmentsCount = i.Attachments.results.length;
	//            this.oModel2.setData(i);
	//            sap.ca.ui.message.showMessageToast(this.i18nBundle.getText("dialog.success.attachmentUpload"));
	//            this._updateHistoryTabCount(i.SAP__Origin, i.InstanceID);
	//        } else {
	//            var E = this.i18nBundle.getText("dialog.error.attachmentUpload");
	//            sap.ca.ui.message.showMessageBox({
	//                type: sap.ca.ui.message.Type.ERROR,
	//                message: E,
	//                details: ""
	//            }, jQuery.proxy(c, t));
	//        }
	//    },
	//    onAttachmentDeleted: function (e) {
	//        var a = e.getParameters().documentId;
	//        var I = this.oModel2.getData();
	//        var u = this._getUploadCollectionControl();
	//        this._setBusyIncdicatorOnDetailControls(u, true);
	//        this.oDataManager.deleteAttachment(I.SAP__Origin, I.InstanceID, a, $.proxy(function () {
	//            var A = I.Attachments.results;
	//            $.each(A, function (i, o) {
	//                if (o.ID === a) {
	//                    A.splice(i, 1);
	//                    return false;
	//                }
	//            });
	//            I.Attachments.results = A;
	//            I.AttachmentsCount = A.length;
	//            if (I.AttachmentsCount === 0) {
	//                u.setNoDataText(this.i18nBundle.getText("view.Attachments.noAttachments"));
	//            }
	//            this._setBusyIncdicatorOnDetailControls(u, false);
	//            this.oModel2.setData(I);
	//            this._updateHistoryTabCount(I.SAP__Origin, I.InstanceID);
	//            sap.ca.ui.message.showMessageToast(this.i18nBundle.getText("dialog.success.attachmentDeleted"));
	//        }, this), $.proxy(function (E) {
	//            this._setBusyIncdicatorOnDetailControls(u, false);
	//            var s = this.i18nBundle.getText("dialog.error.attachmentDelete");
	//            sap.ca.ui.message.showMessageBox({
	//                type: sap.ca.ui.message.Type.ERROR,
	//                message: s,
	//                details: ""
	//            });
	//        }, this));
	//    },
	//    getXsrfToken: function () {
	//        var t = this.getView().getModel().getHeaders()["x-csrf-token"];
	//        if (!t) {
	//            this.getView().getModel().refreshSecurityToken(function (e, o) {
	//                t = o.headers["x-csrf-token"];
	//            }, function () {
	//                sap.ca.ui.message.showMessageBox({
	//                    type: sap.ca.ui.message.Type.ERROR,
	//                    message: "Could not get XSRF token",
	//                    details: ""
	//                });
	//            }, false);
	//        }
	//        return t;
	//    },
	//    onFileUploadFailed: function (e) {
	//        var E = this.i18nBundle.getText("dialog.error.attachmentUpload");
	//        sap.ca.ui.message.showMessageBox({
	//            type: sap.ca.ui.message.Type.ERROR,
	//            message: E,
	//            details: e.getParameters().exception
	//        });
	//    },
	//    addShareOnJamAndEmail: function () {
	//        if (this.oDataManager.bOutbox === true) {
	//            return;
	//        }
	//        var j = { fGetShareSettings: jQuery.proxy(this.getJamSettings, this) };
	//        var e = {
	//            sSubject: this.getMailSubject(),
	//            fGetMailBody: jQuery.proxy(this.getMailBody, this)
	//        };
	//        this.oHeaderFooterOptions = jQuery.extend(this.oHeaderFooterOptions, {
	//            oJamOptions: j,
	//            oEmailSettings: e
	//        });
	//    },
	//    _getDescriptionForShare: function (d) {
	//        var D = this.oModel2.getData();
	//        var b = "\n\n" + this.i18nBundle.getText("share.email.body.detailsOfTheItem") + "\n\n";
	//        var o = sap.ui.core.format.DateFormat.getDateInstance();
	//        if (D.TaskTitle != "") {
	//            b += this.i18nBundle.getText("item.taskTitle", D.TaskTitle) + "\n";
	//        }
	//        if (D.Priority != "") {
	//            b += this.i18nBundle.getText("item.priority", cross.fnd.fiori.inbox.Conversions.formatterPriority.call(this.getView(), D.SAP__Origin, D.Priority)) + "\n";
	//        }
	//        if (D.CompletionDeadLine) {
	//            b += this.i18nBundle.getText("item.dueDate", o.format(D.CompletionDeadLine, true)) + "\n";
	//        }
	//        if (d) {
	//            b += this.i18nBundle.getText("item.description", d) + "\n";
	//        } else if (D.Description && D.Description.Description && D.Description.Description != "") {
	//            b += this.i18nBundle.getText("item.description", this._getTrimmedString(D.Description.Description)) + "\n";
	//        }
	//        var c = D.CreatedByName;
	//        if (c == "") {
	//            c = D.CreatedBy;
	//        }
	//        if (c != "") {
	//            b += this.i18nBundle.getText("item.createdBy", c) + "\n";
	//        }
	//        if (D.CreatedOn) {
	//            b += this.i18nBundle.getText("item.createdOn", o.format(D.CreatedOn, true)) + "\n";
	//        }
	//        if (D.CompletedOn) {
	//            b += this.i18nBundle.getText("item.completedOn", o.format(D.CompletedOn, true)) + "\n";
	//        }
	//        return b;
	//    },
	//    _getDescriptionForShareInMail: function (d) {
	//        var b = this._getDescriptionForShare(d);
	//        b += this.i18nBundle.getText("share.email.body.link", window.location.href.split("(").join("%28").split(")").join("%29")) + "\n";
	//        return b;
	//    },
	//    getJamSettings: function () {
	//        return {
	//            object: {
	//                id: window.location.href,
	//                share: this.getJamDescription()
	//            }
	//        };
	//    },
	//    getJamDescription: function () {
	//        var b = this._getDescriptionForShare();
	//        return b;
	//    },
	//    getMailSubject: function () {
	//        var d = this.oModel2.getData();
	//        var p = cross.fnd.fiori.inbox.Conversions.formatterPriority.call(this.getView(), d.SAP__Origin, d.Priority);
	//        var c = d.CreatedByName;
	//        var t = d.TaskTitle;
	//        return cross.fnd.fiori.inbox.Conversions.formatterMailSubject.call(this, p, c, t);
	//    },
	//    getMailBody: function () {
	//        if (jQuery.browser.msie) {
	//            return window.location.href.split("(").join("%28").split(")").join("%29");
	//        }
	//        var f = this._getDescriptionForShareInMail();
	//        var m = this.getMailSubject();
	//        var F = sap.m.URLHelper.normalizeEmail(null, m, f);
	//        if (F.length > 2000) {
	//            var d = this.oModel2.getData();
	//            var M = this._getDescriptionForShareInMail(" ");
	//            var s = sap.m.URLHelper.normalizeEmail(null, m, M);
	//            var i = 2000 - s.length;
	//            var D = "";
	//            if (d.Description && d.Description.Description) {
	//                D = window.encodeURIComponent(this._getTrimmedString(d.Description.Description));
	//            }
	//            D = D.substring(0, i);
	//            var b = false;
	//            while (!b || D.length == 0) {
	//                b = true;
	//                try {
	//                    D = window.decodeURIComponent(D);
	//                } catch (e) {
	//                    D = D.substring(0, D.length - 1);
	//                    b = false;
	//                }
	//            }
	//            D = D.substring(0, D.length - 3) + "...";
	//            var t = this._getDescriptionForShareInMail(D);
	//            return t;
	//        }
	//        return f;
	//    },
	//    _getTrimmedString: function (t) {
	//        return t.replace(/\s+/g, " ").trim();
	//    },
	//    _handleItemRemoved: function (e) {
	//        if (sap.ui.Device.system.phone && !this.getView().getParent().getParent().isMasterShown()) {
	//            if (!this.stayOnDetailScreen) {
	//                this.oRouter.navTo("master", {}, sap.ui.Device.system.phone);
	//                window.history.back();
	//            } else {
	//                var r = {
	//                    sCtxPath: this.getView().getBindingContext().getPath(),
	//                    sInstanceID: this.oModel2.getData().InstanceID,
	//                    sSAP__Origin: this.oModel2.getData().SAP__Origin,
	//                    bCommentCreated: true
	//                };
	//                this.refreshData(r);
	//                this.stayOnDetailScreen = false;
	//            }
	//        }
	//    },
	//    _handleDetailRefresh: function (e) {
	//        var i = e.getParameter("bIsTableViewActive");
	//        var v = this.getView();
	//        if (i) {
	//            var I = jQuery.extend(true, {}, v.getModel().getData(this.oContext.getPath(), this.oContext));
	//            var a = e.getParameter("sAction");
	//            var s = e.getParameter("sStatus");
	//            if (I.Status === "COMPLETED" || I.Status === "FOR_RESUBMISSION" || a && a === "FORWARD" && (s && s === "Success")) {
	//                this.fnNavBackToTableVw();
	//            } else {
	//                this.oModel2.setData(I, true);
	//                var d = this.oDataManager.getDataFromCache("DecisionOptions", I);
	//                d = d ? d : [];
	//                var u = this.oDataManager.getDataFromCache("UIExecutionLink", I);
	//                u = u ? u : {};
	//                var b = I.TaskSupports.UIExecutionLink;
	//                u = b ? u : {};
	//                this.createDecisionButtons(d, u, this.oModel2.getData().SAP__Origin);
	//            }
	//        } else {
	//            var r = {
	//                sCtxPath: this.getView().getBindingContext().getPath(),
	//                sInstanceID: this.oModel2.getData().InstanceID,
	//                sSAP__Origin: this.oModel2.getData().SAP__Origin,
	//                bCommentCreated: true
	//            };
	//            this.refreshData(r);
	//        }
	//    },
	//    _updateHeaderTitle: function (d) {
	//        if (d) {
	//            var t = this._getShowAdditionalAttributes() === true ? cross.fnd.fiori.inbox.Conversions.formatterTaskTitle.call(this.getView(), d.TaskTitle, d.CustomAttributeData) : d.TaskTitle;
	//            this.oHeaderFooterOptions = jQuery.extend(this.oHeaderFooterOptions, { sDetailTitle: t });
	//            this.refreshHeaderFooterOptions();
	//        }
	//    },
	//    _isTaskConfirmable: function (i) {
	//        if (i.Status == "EXECUTED") {
	//            return true;
	//        } else {
	//            return false;
	//        }
	//    },
	//    createDecisionButtons: function (d, u, o) {
	//        var p = null;
	//        var n = null;
	//        var b = [];
	//        var t = this;
	//        var I = this.oModel2.getData();
	//        if (!this.switchToOutbox()) {
	//            if (!this._isTaskConfirmable(I)) {
	//                for (var i = 0; i < d.length; i++) {
	//                    var D = d[i];
	//                    D.InstanceID = I.InstanceID;
	//                    D.SAP__Origin = o;
	//                    if (D.Nature === "POSITIVE") {
	//                        p = {
	//                            sBtnTxt: D.DecisionText,
	//                            onBtnPressed: function (e) {
	//                                return function () {
	//                                    t.showDecisionDialog(t.oDataManager.FUNCTION_IMPORT_DECISION, e, true);
	//                                };
	//                            }(D)
	//                        };
	//                    } else if (D.Nature === "NEGATIVE") {
	//                        n = {
	//                            sBtnTxt: D.DecisionText,
	//                            onBtnPressed: function (e) {
	//                                return function () {
	//                                    t.showDecisionDialog(t.oDataManager.FUNCTION_IMPORT_DECISION, e, true);
	//                                };
	//                            }(D)
	//                        };
	//                    } else {
	//                        b.push({
	//                            sBtnTxt: D.DecisionText,
	//                            onBtnPressed: function (e) {
	//                                return function () {
	//                                    t.showDecisionDialog(t.oDataManager.FUNCTION_IMPORT_DECISION, e, true);
	//                                };
	//                            }(D)
	//                        });
	//                    }
	//                }
	//            }
	//            if (this._isTaskConfirmable(I)) {
	//                p = {
	//                    sI18nBtnTxt: "XBUT_CONFIRM",
	//                    onBtnPressed: function (e) {
	//                        return function () {
	//                            t.showConfirmationDialog(t.oDataManager.FUNCTION_IMPORT_CONFIRM, I);
	//                        };
	//                    }(I)
	//                };
	//            }
	//            if (t.fnFormatterSupportsProperty(I.TaskSupports.Claim, I.SupportsClaim)) {
	//                b.push({
	//                    sI18nBtnTxt: "XBUT_CLAIM",
	//                    onBtnPressed: function (e) {
	//                        if (sap.ui.Device.system.phone) {
	//                            t.stayOnDetailScreen = true;
	//                        }
	//                        t.sendAction("Claim", I, null);
	//                    }
	//                });
	//            }
	//            if (t.fnFormatterSupportsProperty(I.TaskSupports.Release, I.SupportsRelease)) {
	//                b.push({
	//                    sI18nBtnTxt: "XBUT_RELEASE",
	//                    onBtnPressed: function (e) {
	//                        if (sap.ui.Device.system.phone) {
	//                            t.stayOnDetailScreen = true;
	//                        }
	//                        t.sendAction("Release", I, null);
	//                    }
	//                });
	//            }
	//            if (t.fnFormatterSupportsProperty(I.TaskSupports.Forward, I.SupportsForward)) {
	//                b.push({
	//                    sI18nBtnTxt: "XBUT_FORWARD",
	//                    onBtnPressed: jQuery.proxy(this.onForwardPopUp, this)
	//                });
	//            }
	//            if (I.TaskSupports) {
	//                if (I.TaskSupports.Resubmit) {
	//                    b.push({
	//                        sI18nBtnTxt: "XBUT_RESUBMIT",
	//                        onBtnPressed: jQuery.proxy(this.showResubmitPopUp, this)
	//                    });
	//                }
	//            }
	//            if (sap.ui.Device.system.desktop && u && u.GUI_Link && u.GUI_Link !== "" && !t.isGenericComponentRendered) {
	//                b.push({
	//                    sI18nBtnTxt: "XBUT_OPEN",
	//                    onBtnPressed: function (e) {
	//                        t.checkStatusAndOpenTaskUI();
	//                    }
	//                });
	//            }
	//            if (window.plugins && window.plugins.calendar) {
	//                var a = this.oModel2.getData();
	//                var c = a.CompletionDeadLine;
	//                if (c) {
	//                    var A = function (e) {
	//                        if (e < new Date()) {
	//                            this.oConfirmationDialogManager.showDecisionDialog({
	//                                question: this.i18nBundle.getText("dialog.warning.mq.CalendarEventInThePast"),
	//                                title: this.i18nBundle.getText("dialog.warning.mq.CalendarEventInThePast.title"),
	//                                confirmButtonLabel: this.i18nBundle.getText("XBUT_OK"),
	//                                noteMandatory: false,
	//                                confirmActionHandler: jQuery.proxy(this.createCalendarEvent, this)
	//                            });
	//                        } else {
	//                            this.createCalendarEvent();
	//                        }
	//                    };
	//                    b.push({
	//                        sI18nBtnTxt: "XBUT_CALENDAR",
	//                        onBtnPressed: jQuery.proxy(A, this, c)
	//                    });
	//                }
	//            }
	//        }
	//        if (this.switchToOutbox() && I.TaskSupports.CancelResubmission) {
	//            b.push({
	//                sI18nBtnTxt: "XBUT_RESUME",
	//                onBtnPressed: function (e) {
	//                    t.sendAction("CancelResubmission", I, null);
	//                }
	//            });
	//        }
	//        var B = {};
	//        B.oPositiveAction = p;
	//        B.oNegativeAction = n;
	//        B.aButtonList = b;
	//        if (this.extHookChangeFooterButtons) {
	//            this.extHookChangeFooterButtons(B);
	//            p = B.oPositiveAction;
	//            n = B.oNegativeAction;
	//            b = B.aButtonList;
	//        }
	//        this.oHeaderFooterOptions = jQuery.extend(this.oHeaderFooterOptions, {
	//            oPositiveAction: p,
	//            oNegativeAction: n,
	//            buttonList: b,
	//            bSuppressBookmarkButton: true
	//        });
	//        this.addShareOnJamAndEmail();
	//        this.refreshHeaderFooterOptions();
	//    },
	//    startForwardFilter: function (l, q) {
	//        q = q.toLowerCase();
	//        var f = l.getBindingContext().getProperty("DisplayName").toLowerCase();
	//        var d = l.getBindingContext().getProperty("Department").toLowerCase();
	//        return f.indexOf(q) != -1 || d.indexOf(q) != -1;
	//    },
	//    closeForwardPopUp: function (r) {
	//        if (r && r.bConfirmed) {
	//            var i = this.oModel2.getData();
	//            var o = i.SAP__Origin;
	//            var I = i.InstanceID;
	//            this.oDataManager.doForward(o, I, r.oAgentToBeForwarded.UniqueName, r.sNote, jQuery.proxy(function () {
	//                sap.ca.ui.message.showMessageToast(this.i18nBundle.getText("dialog.success.forward", r.oAgentToBeForwarded.DisplayName));
	//            }, this));
	//        }
	//    },
	//    onForwardPopUp: function () {
	//        var i = this.oModel2.getData();
	//        var o = i.SAP__Origin;
	//        var I = i.InstanceID;
	//        cross.fnd.fiori.inbox.util.Forward.open(jQuery.proxy(this.startForwardFilter, this), jQuery.proxy(this.closeForwardPopUp, this));
	//        var h = cross.fnd.fiori.inbox.Conversions.formatterTaskSupportsValue(i.TaskSupports.PotentialOwners, i.HasPotentialOwners);
	//        if (h) {
	//            this.oDataManager.readPotentialOwners(o, I, jQuery.proxy(this._PotentialOwnersSuccess, this));
	//        } else {
	//            this._PotentialOwnersSuccess({ results: [] });
	//        }
	//    },
	//    _PotentialOwnersSuccess: function (r) {
	//        cross.fnd.fiori.inbox.util.Forward.setAgents(r.results);
	//        cross.fnd.fiori.inbox.util.Forward.setOrigin(this.oModel2.getData().SAP__Origin);
	//    },
	//    showResubmitPopUp: function () {
	//        cross.fnd.fiori.inbox.util.Resubmit.open(this.sResubmitUniqueId, this, this.getView());
	//    },
	//    handleResubmitPopOverOk: function (e) {
	//        var i = this.oModel2.getData();
	//        var o = i.SAP__Origin;
	//        var I = i.InstanceID;
	//        var c = sap.ui.core.Fragment.byId(this.sResubmitUniqueId, "DATE_RESUBMIT");
	//        var s = c.getSelectedDates();
	//        if (s.length > 0) {
	//            var d = s[0].getStartDate();
	//            var f = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "YYYY-MM-ddTHH:mm:ss" });
	//            this.oDataManager.doResubmit(o, I, "datetime'" + f.format(d) + "'", jQuery.proxy(function () {
	//                sap.ca.ui.message.showMessageToast(this.i18nBundle.getText("dialog.success.resubmit"));
	//            }, this));
	//            cross.fnd.fiori.inbox.util.Resubmit.close();
	//        }
	//    },
	//    showEmployeeCard: function (o, c, s) {
	//        this._setBusyIncdicatorOnDetailControls(this.getView(), true);
	//        this.oDataManager.readUserInfo(o, c, jQuery.proxy(function (r) {
	//            this._setBusyIncdicatorOnDetailControls(this.getView(), false);
	//            cross.fnd.fiori.inbox.util.EmployeeCard.displayEmployeeCard(s, r);
	//        }, this), jQuery.proxy(function (e) {
	//            this._setBusyIncdicatorOnDetailControls(this.getView(), false);
	//        }, this), true);
	//    },
	//    onEmployeeLaunchTask: function (e) {
	//        var i = this.oModel2.getData();
	//        this.showEmployeeCard(i.SAP__Origin, i.CreatedBy, cross.fnd.fiori.inbox.Conversions.getSelectedControl(e));
	//    },
	//    onEmployeeLaunchCommentSender: function (c, e, E) {
	//        this.showEmployeeCard(this.oModel2.getData().SAP__Origin, E.getSource().getBindingContext("detail").getProperty("CreatedBy"), cross.fnd.fiori.inbox.Conversions.getSelectedControl(E));
	//    },
	//    onEmployeeLaunchCommentIcon: function (e) {
	//        var o = e.getSource().getBindingContext().getProperty("SAP__Origin");
	//        var c = e.getSource().getBindingContext("detail").getModel().getProperty(e.getSource().getBindingContext("detail").getPath()).CreatedBy;
	//        if (!o) {
	//            var i = this.oModel2.getData();
	//            o = i.SAP__Origin;
	//        }
	//        this.showEmployeeCard(o, c, cross.fnd.fiori.inbox.Conversions.getSelectedControl(e));
	//    },
	//    onAttachmentShow: function (e) {
	//        var c = e.getSource().getBindingContext("detail");
	//        var m = cross.fnd.fiori.inbox.attachment.getRelativeMediaSrc(c.getProperty().__metadata.media_src);
	//        sap.m.URLHelper.redirect(m, true);
	//    },
	//    showDecisionDialog: function (f, d, s) {
	//        this.oConfirmationDialogManager.showDecisionDialog({
	//            question: this.i18nBundle.getText("XMSG_DECISION_QUESTION", d.DecisionText),
	//            showNote: s,
	//            title: this.i18nBundle.getText("XTIT_SUBMIT_DECISION"),
	//            confirmButtonLabel: this.i18nBundle.getText("XBUT_SUBMIT"),
	//            noteMandatory: d.CommentMandatory,
	//            confirmActionHandler: jQuery.proxy(function (d, n) {
	//                this.sendAction(f, d, n);
	//            }, this, d)
	//        });
	//    },
	//    showConfirmationDialog: function (f, i) {
	//        this.oConfirmationDialogManager.showDecisionDialog({
	//            question: this.i18nBundle.getText("XMSG_CONFIRM_QUESTION"),
	//            showNote: false,
	//            title: this.i18nBundle.getText("XTIT_SUBMIT_CONFIRM"),
	//            confirmButtonLabel: this.i18nBundle.getText("XBUT_CONFIRM"),
	//            confirmActionHandler: jQuery.proxy(function (i, n) {
	//                this.sendAction(f, i, n);
	//            }, this, i)
	//        });
	//    },
	//    onCommentPost: function (c, e, E) {
	//        var C = E.getParameter("value");
	//        if (C && C.length > 0) {
	//            this.sendAction("AddComment", null, C);
	//        }
	//    },
	//    sendAction: function (f, d, n) {
	//        var t = this;
	//        var s;
	//        switch (f) {
	//        case "Release":
	//            s = "dialog.success.release";
	//            break;
	//        case "Claim":
	//            s = "dialog.success.reserve";
	//            break;
	//        case "AddComment":
	//            s = "dialog.success.addComment";
	//            break;
	//        case "Confirm":
	//            s = "dialog.success.completed";
	//            break;
	//        case "CancelResubmission":
	//            s = "dialog.success.cancelResubmission";
	//            break;
	//        default:
	//            s = "dialog.success.complete";
	//        }
	//        switch (f) {
	//        case "AddComment": {
	//                var i = this.oModel2.getData();
	//                var c = this._getIconTabControl("Comments");
	//                this._setBusyIncdicatorOnDetailControls(c, true);
	//                this.oDataManager.addComment(i.SAP__Origin, i.InstanceID, n, jQuery.proxy(function (a, r) {
	//                    if (i.Comments && i.Comments.results) {
	//                        i.Comments.results.push(a);
	//                    } else {
	//                        i.Comments = { results: [a] };
	//                    }
	//                    i.CommentsCount = i.Comments.results.length;
	//                    this._setBusyIncdicatorOnDetailControls(c, false);
	//                    this.oModel2.setData(i);
	//                    jQuery.sap.delayedCall(500, this, function () {
	//                        sap.ca.ui.message.showMessageToast(this.i18nBundle.getText(s));
	//                    });
	//                    this._updateHistoryTabCount(i.SAP__Origin, i.InstanceID);
	//                }, this), jQuery.proxy(function (e) {
	//                    this._setBusyIncdicatorOnDetailControls(c, false);
	//                }, this));
	//                break;
	//            }
	//        default: {
	//                this.oDataManager.sendAction(f, d, n, jQuery.proxy(function (D) {
	//                    jQuery.sap.delayedCall(500, this, function () {
	//                        sap.ca.ui.message.showMessageToast(this.i18nBundle.getText(s));
	//                    });
	//                }, this, d));
	//            }
	//        }
	//    },
	//    refreshHeaderFooterOptions: function () {
	//        this._oHeaderFooterOptions = jQuery.extend(this._oHeaderFooterOptions, this.oHeaderFooterOptions);
	//        this.setHeaderFooterOptions(this._oHeaderFooterOptions);
	//    },
	//    fnNavBackToTableVw: function () {
	//        sap.ca.scfld.md.app.Application.getImpl().getComponent().getEventBus().publish("cross.fnd.fiori.inbox", "refreshTask", { "contextPath": this.sCtxPath });
	//        this.oRouter.navTo("table_view", {}, true);
	//    },
	//    checkStatusAndOpenTaskUI: function () {
	//        var t = this.oModel2.getData();
	//        this.oDataManager.checkStatusAndOpenTask(t.SAP__Origin, t.InstanceID, jQuery.proxy(this.openTaskUI, this));
	//    },
	//    openTaskUI: function () {
	//        var t = this.oModel2.getData();
	//        var a = this._getActionHelper();
	//        var k = t.SAP__Origin + "_" + t.InstanceID;
	//        var i = this.oEmbedModeIntentParams ? this.oEmbedModeIntentParams[k] : null;
	//        if (i) {
	//            this.fnNavigateToApp(i, i.OpenInEmbedMode);
	//        } else {
	//            a.fnValidateOpenTaskURLAndRedirect(this.oModel2.getData().GUI_Link || this.oModel2.getData().UIExecutionLink.GUI_Link);
	//        }
	//    },
	//    fnEmbedApplicationInDetailView: function (p) {
	//        var n = "#" + p.semanticObject + "-" + p.action;
	//        var i = new sap.ui.model.json.JSONModel({
	//            NavigationIntent: n,
	//            params: p.params
	//        });
	//        this.getOwnerComponent().setModel(i, "intentModel");
	//        var P = {
	//            SAP__Origin: this.oRoutingParameters.SAP__Origin,
	//            InstanceID: this.oRoutingParameters.InstanceID,
	//            contextPath: this.oRoutingParameters.contextPath
	//        };
	//        this.oRouter.navTo("replace_detail", P, true);
	//    },
	//    onTabSelect: function (c) {
	//        var s = c.getParameters().selectedKey;
	//        switch (s) {
	//        case "NOTES":
	//            this.fnDelegateCommentsCreation();
	//            this.fnFetchDataOnTabSelect("Comments");
	//            this.fnSetIconForCommentsFeedInput();
	//            this.fnHandleNoTextCreation("Comments");
	//            break;
	//        case "ATTACHMENTS":
	//            this.fnDelegateAttachmentsCreation();
	//            this.fnFetchDataOnTabSelect("Attachments");
	//            this.fnHandleNoTextCreation("Attachments");
	//            break;
	//        case "PROCESSINGLOGS":
	//            this.fnFetchDataOnTabSelect("ProcessingLogs");
	//            this.createTimeLine();
	//            this.byId("timeline").setGrowingThreshold(10);
	//            break;
	//        case "OBJECTLINKS":
	//            var m = this.oModel2 ? this.oModel2.getData() : "";
	//            if (m.TaskSupports.TaskObject === true && !m.ObjectLinks && m.ObjectLinksCount > 0) {
	//                this.fnFetchObjectLinks();
	//            }
	//            break;
	//        }
	//    },
	//    fnDelegateCommentsCreation: function () {
	//        if (this.isGenericComponentRendered) {
	//            return;
	//        }
	//        var i = this.oModel2.getData();
	//        if (this.getView().byId("commentsContainer") && this.fnFormatterSupportsProperty(i.TaskSupports.Comments, i.SupportsComments)) {
	//            this.createGenericCommentsComponent(this.getView());
	//        }
	//    },
	//    fnDelegateAttachmentsCreation: function () {
	//        var i = this.oModel2.getData();
	//        if (this.getView().byId("attachmentComponent") && this.fnFormatterSupportsProperty(i.TaskSupports.Attachments, i.SupportsAttachments)) {
	//            this.createGenericAttachmentComponent(this.getView());
	//        }
	//    },
	//    createTimeLine: function () {
	//        var t = this.byId("timeline");
	//        if (t) {
	//            var T = new sap.suite.ui.commons.TimelineItem({
	//                icon: {
	//                    path: "detail>ActionName",
	//                    formatter: cross.fnd.fiori.inbox.Conversions.formatterActionIcon
	//                },
	//                userName: {
	//                    parts: [
	//                        { path: "detail>PerformedByName" },
	//                        { path: "detail>ActionName" }
	//                    ],
	//                    formatter: cross.fnd.fiori.inbox.Conversions.formatterActionUsername
	//                },
	//                title: {
	//                    path: "detail>ActionName",
	//                    formatter: cross.fnd.fiori.inbox.Conversions.formatterActionText
	//                },
	//                dateTime: "{detail>Timestamp}"
	//            });
	//            t.bindAggregation("content", {
	//                path: "detail>/ProcessingLogs/results",
	//                template: T
	//            });
	//        }
	//    },
	//    fnSetIconForCommentsFeedInput: function () {
	//        if (this.oGenericCommentsComponent.fnIsFeedInputPresent() && !this.oGenericCommentsComponent.fnGetFeedInputIcon()) {
	//            if (sap.ushell.Container != undefined) {
	//                var s = this.oModel2.getData().SAP__Origin;
	//                var u = sap.ushell.Container.getUser().getId();
	//                this.oDataManager.getCurrentUserImage(s, u, jQuery.proxy(this.oGenericCommentsComponent.fnSetFeedInputIcon, this.oGenericCommentsComponent));
	//            }
	//        }
	//    },
	//    fnCountUpdater: function (k, s, i) {
	//        var t = this;
	//        switch (k) {
	//        case "Attachments":
	//            this.oDataManager.fnGetCount(s, i, function (n) {
	//                t.oModel2.setProperty("/AttachmentsCount", n);
	//            }, "Attachments");
	//            break;
	//        case "Comments":
	//            this.oDataManager.fnGetCount(s, i, function (n) {
	//                t.oModel2.setProperty("/CommentsCount", n);
	//            }, "Comments");
	//            break;
	//        case "ProcessingLogs":
	//            this.oDataManager.fnGetCount(s, i, function (n) {
	//                t.oModel2.setProperty("/ProcessingLogsCount", n);
	//                t.fnHandleNoTextCreation("ProcessingLogs");
	//            }, "ProcessingLogs");
	//            break;
	//        case "ObjectLinks":
	//            this.oDataManager.fnGetCount(s, i, function (n) {
	//                t.oModel2.setProperty("/ObjectLinksCount", n);
	//                t.fnHandleNoTextCreation("ObjectLinks");
	//            }, "TaskObjects");
	//            break;
	//        }
	//    },
	//    fnHandleNoTextCreation: function (e) {
	//        var t = this;
	//        var m = this.oModel2.getData();
	//        switch (e) {
	//        case "Comments":
	//            if (m.hasOwnProperty("CommentsCount") && m.CommentsCount > 0)
	//                t.oGenericCommentsComponent.setNoDataText(t.i18nBundle.getText("XMSG_LOADING"));
	//            else if (m.hasOwnProperty("CommentsCount") && m.CommentsCount == 0)
	//                t.oGenericCommentsComponent.setNoDataText(t.i18nBundle.getText("view.CreateComment.noComments"));
	//            break;
	//        case "Attachments":
	//            var g = t._getUploadCollectionControl();
	//            if (g) {
	//                if (m.hasOwnProperty("AttachmentsCount") && m.AttachmentsCount > 0)
	//                    g.setNoDataText(t.i18nBundle.getText("XMSG_LOADING"));
	//                else if (m.hasOwnProperty("AttachmentsCount") && m.AttachmentsCount == 0)
	//                    g.setNoDataText(t.i18nBundle.getText("view.Attachments.noAttachments"));
	//            }
	//            break;
	//        case "ProcessingLogs":
	//            var h = t.byId("timeline");
	//            if (m.ProcessingLogsCount && m.ProcessingLogsCount > 0)
	//                h.setNoDataText(t.i18nBundle.getText("XMSG_LOADING"));
	//            else if (m.ProcessingLogsCount && m.ProcessingLogsCount == 0)
	//                h.setNoDataText(t.i18nBundle.getText("view.ProcessLogs.noProcessLog"));
	//            break;
	//        case "ObjectLinks":
	//            var o = t.byId("MIBObjectLinksList");
	//            if (m.ObjectLinksCount && m.ObjectLinksCount > 0)
	//                o.setNoDataText(t.i18nBundle.getText("XMSG_LOADING"));
	//            else if (m.ObjectLinksCount && m.ObjectLinksCount == 0)
	//                o.setNoDataText(t.i18nBundle.getText("view.ObjectLinks.noObjectLink"));
	//            break;
	//        default:
	//            break;
	//        }
	//    },
	//    fnClearCachedData: function () {
	//        this.oModel2.setProperty("/AttachmentsCount", "");
	//        this.oModel2.setProperty("/CommentsCount", "");
	//        this.oModel2.setProperty("/ProcessingLogsCount", "");
	//        this.oModel2.setProperty("/ObjectLinksCount", "");
	//        this.oModel2.setProperty("/ProcessingLogs", "");
	//        this.oModel2.setProperty("/Attachments", "");
	//        this.oModel2.setProperty("/Comments", "");
	//    },
	//    fnFetchDataOnTabSelect: function (n) {
	//        var p = this.sCtxPath + "/" + n;
	//        var P = null;
	//        if (n === "Attachments") {
	//            P = { $orderby: "CreatedAt desc" };
	//        }
	//        var m = this.oModel2.getData();
	//        var d = m[n] && m[n].results ? true : false;
	//        var t = this._getIconTabControl(n);
	//        var s = function (a) {
	//            this.fnUpdateDataAfterFetchComplete(m, d, n, a);
	//            this._setBusyIncdicatorOnDetailControls(t, false);
	//        };
	//        var e = function (E) {
	//            this._setBusyIncdicatorOnDetailControls(t, false);
	//            this.oDataManager.oDataRequestFailed(E);
	//        };
	//        if (!d && m[this.oMapCountProperty[n]] > 0) {
	//            this._setBusyIncdicatorOnDetailControls(t, true);
	//        }
	//        this.oDataManager.oDataRead(p, P, jQuery.proxy(s, this), jQuery.proxy(e, this));
	//    },
	//    fnUpdateDataAfterFetchComplete: function (m, d, n, a) {
	//        if (d) {
	//            jQuery.extend(true, m[n], a);
	//        } else {
	//            m[n] = a;
	//        }
	//        m[this.oMapCountProperty[n]] = a.results.length;
	//        this.oModel2.setData(m);
	//    },
	//    _getIconTabControl: function (n) {
	//        switch (n) {
	//        case "Comments":
	//            return this.oGenericCommentsComponent.getAggregation("rootControl").byId("MIBCommentList");
	//        case "Attachments":
	//            return this._getUploadCollectionControl();
	//        case "ProcessingLogs":
	//            return this.getView().byId("timeline");
	//        case "TaskObjects":
	//            return this.getView().byId("MIBObjectLinksList");
	//        }
	//    },
	//    fnFetchObjectLinks: function () {
	//        var o = 0;
	//        var t = this._getIconTabControl("TaskObjects");
	//        this._setBusyIncdicatorOnDetailControls(t, true);
	//        var s = function (d) {
	//            for (var i = 0; i < d.results.length; i++) {
	//                if (!d.results[i].Label) {
	//                    o = o + 1;
	//                    d.results[i].Label = this.i18nBundle.getText("object.link.label") + " " + o;
	//                }
	//            }
	//            this._setBusyIncdicatorOnDetailControls(t, false);
	//            this.oModel2.setProperty("/ObjectLinks", d);
	//        };
	//        var e = function (E) {
	//            this._setBusyIncdicatorOnDetailControls(t, false);
	//        };
	//        this.oDataManager.oDataRead(this.sCtxPath + "/" + "TaskObjects", null, jQuery.proxy(s, this), jQuery.proxy(e, this));
	//    },
	//    onSupportInfoOpenEvent: function (c, e, s) {
	//        if (s.source === "MAIN") {
	//            var C = null;
	//            var I = this.oModel2.getData();
	//            if (this.aTaskDefinitionData) {
	//                for (var i = 0; i < this.aTaskDefinitionData.length; i++) {
	//                    if (I && I.TaskDefinitionID === this.aTaskDefinitionData[i].TaskDefinitionID) {
	//                        if (this.aTaskDefinitionData[i].CustomAttributeDefinitionData.results) {
	//                            C = this.aTaskDefinitionData[i].CustomAttributeDefinitionData.results;
	//                        }
	//                    }
	//                }
	//            }
	//            cross.fnd.fiori.inbox.util.SupportInfo.setTask(I, C);
	//        }
	//    },
	//    _createCustomAttributesElements: function (d, c) {
	//        var C = this.getView().byId("customAttributesContainer");
	//        var a = this.aCA;
	//        for (var i = 0; i < c.length; i++) {
	//            var A = c[i].Name;
	//            var l = c[i].Type;
	//            var D = c[i].Label;
	//            var o;
	//            var s = true;
	//            if (this._getShowAdditionalAttributes() === true && (A.toLowerCase() === this.sCustomTaskTitleAttribute.toLowerCase() || A.toLowerCase() === this.sCustomNumberValueAttribute.toLowerCase() || A.toLowerCase() === this.sCustomNumberUnitValueAttribute.toLowerCase() || A.toLowerCase() === this.sCustomObjectAttributeValue.toLowerCase())) {
	//                s = false;
	//            }
	//            if (s) {
	//                if (A && l && D) {
	//                    for (var j = 0; j < d.CustomAttributeData.length; j++) {
	//                        if (this._getShowAdditionalAttributes() === true) {
	//                            o = this.getView().getModel().getProperty("/" + d.CustomAttributeData[j]);
	//                        } else {
	//                            o = d.CustomAttributeData[j];
	//                        }
	//                        if (o.Name === A) {
	//                            var n = new sap.ui.layout.form.FormElement("", {});
	//                            n.setLayoutData(new sap.ui.layout.ResponsiveFlowLayoutData("", {
	//                                linebreak: true,
	//                                margin: false
	//                            }));
	//                            var L = new sap.m.Label("", { text: D });
	//                            L.setLayoutData(new sap.ui.layout.ResponsiveFlowLayoutData("", {
	//                                weight: 3,
	//                                minWidth: 192
	//                            }));
	//                            n.setLabel(L);
	//                            var v = cross.fnd.fiori.inbox.Conversions.fnCustomAttributeTypeFormatter(o.Value, l);
	//                            var t = new sap.m.Text("", { text: v });
	//                            t.setLayoutData(new sap.ui.layout.ResponsiveFlowLayoutData("", { weight: 5 }));
	//                            n.addField(t);
	//                            C.addFormElement(n);
	//                            a.push(n);
	//                            break;
	//                        }
	//                    }
	//                }
	//            }
	//        }
	//        this.byId("DescriptionContent").rerender();
	//    },
	//    _createCustomAttributesOnDataLoaded: function (c) {
	//        if (this.aCA.length === 0 && this.oModel2.getData().CustomAttributeData && this.oModel2.getData().CustomAttributeData.length > 0 && c && c.length > 0) {
	//            jQuery.proxy(this._createCustomAttributesElements(this.oModel2.getData(), c), this);
	//        }
	//    },
	//    _getUploadCollectionControl: function () {
	//        var u;
	//        if (this.isGenericComponentRendered && this.oAttachmentComponentView) {
	//            u = this.oAttachmentComponentView.byId("uploadCollection");
	//        } else if (this.oGenericAttachmentComponent && !this.isGenericComponentRendered) {
	//            u = this.oGenericAttachmentComponent.view.byId("uploadCollection");
	//        }
	//        return u;
	//    },
	//    _setBusyIncdicatorOnDetailControls: function (c, s) {
	//        if (c) {
	//            if (s) {
	//                c.setBusyIndicatorDelay(1000);
	//            }
	//            c.setBusy(s);
	//        }
	//    },
	//    _updateHistoryTabCount: function (s, i) {
	//        this.oDataManager.fnGetCount(s, i, jQuery.proxy(function (c) {
	//            this.oModel2.setProperty("/ProcessingLogsCount", c);
	//        }, this), "ProcessingLogs");
	//    },
	//    _processCustomAttributesData: function (i) {
	//        if (i.CustomAttributeData && i.CustomAttributeData.__list) {
	//            i.CustomAttributeData = i.CustomAttributeData.__list;
	//        }
	//        var d = this.oDataManager.getCustomAttributeDefinitions()[i.TaskDefinitionID];
	//        if (d && d instanceof Array) {
	//            i.CustomAttributeDefinitionData = d;
	//        }
	//        return i;
	//    },
	//    _getShowAdditionalAttributes: function () {
	//        if (this.bShowAdditionalAttributes == null) {
	//            this.bShowAdditionalAttributes = this.oDataManager.getShowAdditionalAttributes();
	//        }
	//        return this.bShowAdditionalAttributes;
	//    },
	//    createCalendarEvent: function () {
	//        var t = this;
	//        var d = this.oModel2.getData();
	//        var D = d.CompletionDeadLine;
	//        if (D) {
	//            D.setDate(D.getDate() - 1);
	//            var n = D.getFullYear();
	//            var a = D.getMonth();
	//            var b = D.getDate();
	//            var c = D.getHours();
	//            var e = D.getMinutes();
	//            var f = D.getSeconds();
	//            var s = new Date(n, a, b, c, e, f);
	//            var g = new Date(n, a, b, c, e + 60, f);
	//            var h = d.TaskTitle;
	//            var i = this.getMailBody();
	//            var j = function (o) {
	//                sap.m.MessageToast.show(t.i18nBundle.getText("dialog.success.mq.calendarEventCreated"));
	//            };
	//            var k = function (o) {
	//                var E = t.i18nBundle.getText("dialog.error.mq.calendarPluginError");
	//                sap.ca.ui.message.showMessageBox({
	//                    type: sap.ca.ui.message.Type.ERROR,
	//                    message: E,
	//                    details: o
	//                });
	//            };
	//            var l = function (o) {
	//                if (typeof o === "string" || o.length == 0) {
	//                    window.plugins.calendar.createEvent(h, null, i, s, g, j, k);
	//                } else {
	//                    sap.m.MessageToast.show(t.i18nBundle.getText("dialog.error.mq.calendarThereIsAnEventAlready"));
	//                }
	//            };
	//            var m = function (o) {
	//                window.plugins.calendar.createEvent(h, null, i, s, g, j, k);
	//            };
	//            window.plugins.calendar.findEvent(h, null, null, s, g, l, m);
	//            D.setDate(D.getDate() + 1);
	//        }
	//    },
	//    _getActionHelper: function () {
	//        if (!this._oActionHelper) {
	//            jQuery.sap.require("cross.fnd.fiori.inbox.util.ActionHelper");
	//            this._oActionHelper = new cross.fnd.fiori.inbox.util.ActionHelper(this, this.getView());
	//        }
	//        return this._oActionHelper;
	//    }
	OnGetBtnPress: function(evt) {
		var t = this;
		var _sCtxPath = t.sCtxPath;
		var ind = _sCtxPath.indexOf("InstanceID");
		ind = ind + 12;
		var ind2 = ind + 12;
		var workitem_id = "";
		for (ind; ind < ind2; ind++) {
			workitem_id = workitem_id + _sCtxPath[ind];
		};
		this.byId("WI_ID").setValue(workitem_id);
		var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZDEMO_SEARCH_HELP_SRV", true);
		var oEntry = {};
		oEntry.WorkitemId = workitem_id;
		oModel.setHeaders({
			"content-type": "application/json;charset=utf-8"
		});
		var filter = "$filter=WorkitemId eq '" + workitem_id + "'";
		oModel.read('PositionSet', null, [filter], true, jQuery.proxy(this.fnSuccess, this), function(oError) {
			alert(oError.message);
		});
	},
	fnSuccess: function(oData, oResponse) {
		var dataResults = oResponse.data.results;
		var dataLength = oResponse.data.results.length;
		var dataObject = {
			DocFlowSet: []
		};
		for (var i = 0; i < dataLength; i++) {
			var record = dataResults[i];
			dataObject.DocFlowSet.push(record);
		}
		this.byId("Position").setValue(dataObject.DocFlowSet[0].Pos);
		this.byId("Salary").setValue(dataObject.DocFlowSet[0].Salary);
		this.byId("Dept").setValue(dataObject.DocFlowSet[0].Dept);
		var DateFrom = 
		               dataObject.DocFlowSet[0].DateFrom[6] + 
		               dataObject.DocFlowSet[0].DateFrom[7] +		               
		               '/' +
		               dataObject.DocFlowSet[0].DateFrom[4] + 
		               dataObject.DocFlowSet[0].DateFrom[5] +		               
		               '/' +
		               dataObject.DocFlowSet[0].DateFrom[0] + 
		               dataObject.DocFlowSet[0].DateFrom[1] +
		               dataObject.DocFlowSet[0].DateFrom[2] +
		               dataObject.DocFlowSet[0].DateFrom[3];
		this.byId("DateFrom").setValue(DateFrom);
		var DateTo = 
		               dataObject.DocFlowSet[0].DateTo[6] + 
		               dataObject.DocFlowSet[0].DateTo[7] +		               
		               '/' +
		               dataObject.DocFlowSet[0].DateTo[4] + 
		               dataObject.DocFlowSet[0].DateTo[5] +		               
		               '/' +
		               dataObject.DocFlowSet[0].DateTo[0] + 
		               dataObject.DocFlowSet[0].DateTo[1] +
		               dataObject.DocFlowSet[0].DateTo[2] +
		               dataObject.DocFlowSet[0].DateTo[3];	
		this.byId("DateTo").setValue(DateTo);              
	},
	OnSetBtnPress: function(evt) {
		var t = this;

	}
});