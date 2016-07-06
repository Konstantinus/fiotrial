sap.ui.controller("ztest_smart_template.view.Main", {
	onInit: function() {
		var oData = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZDEMO_SEARCH_HELP_SRV", true);
		sap.ui.getCore().setModel(oData);
		var oSelect = this.byId("ProcSelect");
		var oItemSelectTemplate = new sap.ui.core.Item({
			key: "{Process}",
			text: "{Description}"
		}); //Define the template for items, which will be inserted inside a select element
		oSelect.setModel(sap.ui.getCore().getModel(oData)); // set model your_data_model to Select element  
		oSelect.bindAggregation("items", "/ASRPROCESSSet", oItemSelectTemplate); //bind aggregation, 
	},
	OnLinkPress: function() {
		window.open(
			"https://erpcp-kv-0.sbrf.ua.loc:3443/sap/bc/webdynpro/sap/asr_process_execute_fpm?initiator_role=HRASRB&process_group=ORG2&sap-accessibility=&sap-client=800&sap-ie=EmulateIE8&sap-language=UK&sap-rtl=&sap-wd-configid=ASR_EXECUTE_4_STEP&without_start_object=X#",
			this);
	},
	OnGooglePress: function() {
		window.open("http://google.com.ua", this);
	},
	OnAddLinePress: function() {
		var oModel = sap.ui.getCore().getModel();
		var oEntry = {};
		var oHeaderSelect = this.byId("ProcSelect");
		var oItem = oHeaderSelect.getSelectedItem();
		oEntry.Process = oItem.getKey();
		if (this.byId("DateFrom").getValue()) {
			oEntry.DateFrom = this.byId("DateFrom").getValue();
			oEntry.DateFrom = oEntry.DateFrom[6]+oEntry.DateFrom[7]
			+oEntry.DateFrom[8]+oEntry.DateFrom[9]+
			oEntry.DateFrom[3]+oEntry.DateFrom[4]+
			oEntry.DateFrom[0]+oEntry.DateFrom[1];
		} else {
			alert("Заполните поле 'Дата с'");
			return;
		}
		if (this.byId("DateTo").getValue()) {
			oEntry.DateTo = this.byId("DateTo").getValue();
			oEntry.DateTo = oEntry.DateTo[6]+oEntry.DateTo[7]
			+oEntry.DateTo[8]+oEntry.DateTo[9]+
			oEntry.DateTo[3]+oEntry.DateTo[4]+
			oEntry.DateTo[0]+oEntry.DateTo[1];			
		} else {
			alert("Заполните поле 'Дата по'");
			return;
		};
		if (this.byId("Position").getValue()) {
			oEntry.Position = this.byId("Position").getValue();
		} else {
			alert("Заполните поле 'Должность'");
			return;
		};
		if (this.byId("Dept").getValue()) {
			oEntry.Dept = this.byId("Dept").getValue();
		} else {
			alert("Заполните поле 'Подразделение'");
			return;
		};	
		if (this.byId("Salary").getValue()) {
			oEntry.Salary = this.byId("Salary").getValue();
		} else {
			alert("Заполните поле 'ЗП до налогооблажения'");
			return;
		};		
		oModel.setHeaders({
			"content-type": "application/json;charset=utf-8"
		});
		oModel.create('Process_dataSet', oEntry, null, function() {
			alert("Create successful");
		}, function() {
			alert("Create failed");
		});
	},

});