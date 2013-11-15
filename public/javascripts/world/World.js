define([],

function() {


		function init(options) {

			logger.info("[INFO] Inicializando Mi Despegar Cancellation Confirmation.");

			// inicializar pagina de Login
			if (!_.isUndefined(options.pageInit)) {
				options.pageInit(localization, extraData);
			}

			localization.init(
				extraData.get('transaction-info').productType,
				extraData.get('transaction-info').locale
			);
			
			// servicios de autos
			commonServices.init(
				extraData.get('transaction-info').productType,
				extraData.get('transaction-info').locale
			);
			
			// header de Mi Despegar
			header.init(extraData.get('transaction-info'));
			
			tooltip = new overlay();
			
			// bind specific events
			bindEvents();
			
			if(!($("#tracking-isInVoidTime").data("isVoidTime"))){
				var totalValue = $("#tracking-totalTrackingValue").data("totalvalue");
				var currency = $("#tracking-currencyTrackingValue").data("currency");
				tracker.track("cancelacionVuelo", "displayPaginaConfirmacion", totalValue+" | "+currency);
			};

		}

		// API Publica
		return {

			init: init

		};

	});