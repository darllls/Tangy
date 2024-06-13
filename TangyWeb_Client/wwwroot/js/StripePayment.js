redirectToCheckout = function (sessionId) {
    var stripe = Stripe("pk_test_51PR9dQLh4MrFxD7em1Hr4rl1jxhDNEPVdDqCn5WftJdiAJikfbV2KyY3S4V4FatZiK4A1JXLriEWxkdCBfMvKIFF00BDG4Krub");
    stripe.redirectToCheckout({ sessionId: sessionId });
}