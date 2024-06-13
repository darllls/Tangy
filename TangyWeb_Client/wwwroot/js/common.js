window.ShowToastr = (type, message) => {
    if (type === "success") {
        toastr.success(message, "Operation Successful", { timeOut: 5000 });
    }
    if (type === "error") {
        toastr.error(message, "Operation Failed", { timeOut: 5000 });
    }
}

window.ShowSweetAlert = (type, message) => {
    if (type === "success") {
        Swal.fire({
            title: "Success",
            text: "Operation Successful",
            icon: "success"
        });
    }
    if (type === "error") {
        Swal.fire({
            icon: "error",
            title: "Failure",
            text: "Operation Failed",
        });
    }
}

function ShowDeleteConfirmationModal() {
    $('#deleteConfirmationModal').modal('show');
}

function HideDeleteConfirmationModal() {
    $('#deleteConfirmationModal').modal('hide');
}

redirectToCheckout = function (sessionId) {
    var stripe = Stripe("pk_test_51PR9dQLh4MrFxD7em1Hr4rl1jxhDNEPVdDqCn5WftJdiAJikfbV2KyY3S4V4FatZiK4A1JXLriEWxkdCBfMvKIFF00BDG4Krub");
    stripe.redirectToCheckout({ sessionId: sessionId });
}