/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Credit-Cards-and-Payment\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-checkout-card': '&#xe900;',
		'icon-checkout': '&#xe901;',
		'icon-AliPay-card': '&#xe902;',
		'icon-AliPay': '&#xe903;',
		'icon-Amazon-card': '&#xe904;',
		'icon-Amazon': '&#xe905;',
		'icon-AmericanExpress-card': '&#xe906;',
		'icon-AmericanExpress': '&#xe907;',
		'icon-Apple-card': '&#xe908;',
		'icon-Apple': '&#xe909;',
		'icon-Bancontact-card': '&#xe90a;',
		'icon-Bancontact': '&#xe927;',
		'icon-Bitcoin-card': '&#xe928;',
		'icon-Bitcoin': '&#xe929;',
		'icon-Bitpay-card': '&#xe92a;',
		'icon-Bitpay': '&#xe92b;',
		'icon-Cirrus-card': '&#xe92c;',
		'icon-Cirrus': '&#xe92d;',
		'icon-Clickandbuy-card': '&#xe92e;',
		'icon-Clickandbuy': '&#xe92f;',
		'icon-Coinkite-card': '&#xe930;',
		'icon-Coinkite': '&#xe931;',
		'icon-DinersClub-card': '&#xe932;',
		'icon-DinersClub': '&#xe933;',
		'icon-DirectDebit-card': '&#xe95a;',
		'icon-DirectDebit': '&#xe95b;',
		'icon-Discover-card': '&#xe95c;',
		'icon-Discover': '&#xe95d;',
		'icon-Dwolla-card': '&#xe95e;',
		'icon-Dwolla': '&#xe95f;',
		'icon-Ebay-card': '&#xe960;',
		'icon-Ebay': '&#xe961;',
		'icon-Eway-card': '&#xe962;',
		'icon-Eway': '&#xe963;',
		'icon-GiroPay-card': '&#xe964;',
		'icon-GiroPay': '&#xe965;',
		'icon-GoogleWallet-card': '&#xe96f;',
		'icon-GoogleWallet': '&#xe970;',
		'icon-Ingenico-card': '&#xe971;',
		'icon-Ingenico': '&#xe972;',
		'icon-JCB-card': '&#xe973;',
		'icon-JCB': '&#xe974;',
		'icon-Klarna-card': '&#xe975;',
		'icon-Klarna': '&#xe976;',
		'icon-Laser-card': '&#xe977;',
		'icon-Laser': '&#xe978;',
		'icon-Maestro-card': '&#xe979;',
		'icon-Maestro': '&#xe97a;',
		'icon-MasterCard-card': '&#xe97b;',
		'icon-MasterCard': '&#xe97c;',
		'icon-Monero-card': '&#xe97d;',
		'icon-Monero': '&#xe97e;',
		'icon-Neteller-card': '&#xe97f;',
		'icon-Neteller': '&#xe980;',
		'icon-Ogone-card': '&#xe981;',
		'icon-Ogone': '&#xe987;',
		'icon-OkPay-card': '&#xe988;',
		'icon-OkPay': '&#xe990;',
		'icon-Paybox-card': '&#xe991;',
		'icon-Paybox': '&#xe992;',
		'icon-Paymill-card': '&#xe993;',
		'icon-Paymill': '&#xe994;',
		'icon-Payone-card': '&#xe995;',
		'icon-Payone': '&#xe996;',
		'icon-Payoneer-card': '&#xe997;',
		'icon-Payoneer': '&#xe998;',
		'icon-Paypal-card': '&#xe999;',
		'icon-Paypal': '&#xe99a;',
		'icon-PaysafeCard-card': '&#xe99b;',
		'icon-PaysafeCard': '&#xe99c;',
		'icon-PayU-card': '&#xe99d;',
		'icon-PayU': '&#xe99e;',
		'icon-Payza-card': '&#xe99f;',
		'icon-Payza': '&#xe9a0;',
		'icon-Ripple-card': '&#xe9a1;',
		'icon-Ripple': '&#xe9a2;',
		'icon-Sage-card': '&#xe9a3;',
		'icon-Sage': '&#xe9a4;',
		'icon-Sepa-card': '&#xe9a5;',
		'icon-Sepa': '&#xe9a6;',
		'icon-Shopify-card': '&#xe9a7;',
		'icon-Shopify': '&#xe9a8;',
		'icon-Skrill': '&#xe9b3;',
		'icon-Solo-card': '&#xe9b4;',
		'icon-Solo': '&#xe9b5;',
		'icon-Square-card': '&#xe9b6;',
		'icon-Square': '&#xe9b7;',
		'icon-Stripe-card': '&#xe9b8;',
		'icon-Stripe': '&#xe9b9;',
		'icon-Switch-card': '&#xe9ba;',
		'icon-Switch': '&#xe9bb;',
		'icon-Ukash-card': '&#xe9bc;',
		'icon-Ukash': '&#xe9bd;',
		'icon-UnionPay-card': '&#xe9be;',
		'icon-UnionPay': '&#xe9bf;',
		'icon-Verifone-card': '&#xe9c0;',
		'icon-Verifone': '&#xe9c1;',
		'icon-VeriSign-card': '&#xe9c2;',
		'icon-VeriSign': '&#xe9d4;',
		'icon-Visa-card': '&#xe9d5;',
		'icon-Visa': '&#xe9d6;',
		'icon-WebMoney-card': '&#xe9d7;',
		'icon-WebMoney': '&#xe9d8;',
		'icon-WesternUnion-card': '&#xe9d9;',
		'icon-WesternUnion': '&#xe9ea;',
		'icon-WorldPay-card': '&#xe9eb;',
		'icon-WorldPay': '&#xe9ec;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
