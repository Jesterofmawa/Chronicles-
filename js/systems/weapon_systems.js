let weaponGrip = "one-handed";

function getWeaponDamage(weapon, grip) {

    if (
        grip === "two-handed" &&
        weapon.twoHandedDamage
    ) {
        return weapon.twoHandedDamage;
    }

    return weapon.damage || "1d6";
}