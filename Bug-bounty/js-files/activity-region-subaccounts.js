(function(root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.ActivityRegionSubaccounts = factory();
    }
}(typeof self !== 'undefined' ? self : this, function() {
    function normalizeRegion(region) {
        if (region === undefined || region === null) {
            return '';
        }
        return String(region).trim().toLowerCase();
    }

    function filterSubaccountsForRegion(subaccounts, selectedRegion, masterRegion) {
        var effectiveRegion = normalizeRegion(selectedRegion) || normalizeRegion(masterRegion);
        var normalizedMasterRegion = normalizeRegion(masterRegion);

        if (!effectiveRegion) {
            return (subaccounts || []).slice();
        }

        return (subaccounts || []).filter(function(subaccount) {
            var subaccountRegion = normalizeRegion(subaccount.region);

            if (!subaccountRegion) {
                return effectiveRegion === normalizedMasterRegion;
            }

            return subaccountRegion === effectiveRegion;
        });
    }

    function filterUsernamesForSubaccounts(usernames, subaccounts) {
        if (!Array.isArray(subaccounts)) {
            return [];
        }

        var subaccountIds = {};
        for (var i = 0; i < subaccounts.length; i++) {
            var subaccount = subaccounts[i];
            if (subaccount && subaccount.record_id !== undefined && subaccount.record_id !== null) {
                subaccountIds[String(subaccount.record_id)] = true;
            }
        }

        return (usernames || []).filter(function(username) {
            return username && subaccountIds[String(username.owner)];
        });
    }

    return {
        filterSubaccountsForRegion: filterSubaccountsForRegion,
        filterUsernamesForSubaccounts: filterUsernamesForSubaccounts,
        normalizeRegion: normalizeRegion
    };
}));