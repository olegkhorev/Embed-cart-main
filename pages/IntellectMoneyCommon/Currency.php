<?php
/**
* Embed-Cart
* Copyright (c) Oleg Khorev
*
* Released under the MIT License.
* https://github.com/olegkhorev/Embed-cart-main
*/
?>
<?php

namespace PaySystem;

class Currency {

    const RUB = "RUB";
    const RUR = "RUR";
    const TST = "TST";
    const USD = "USD";
    const EUR = "EUR";

    public static function getCurrencyFromString($currency) {
        $result = false;
        $reflectionClass = new \ReflectionClass(__CLASS__);
        foreach ($reflectionClass->getConstants() as $value) {
            if (strcasecmp($currency, $value) == 0) {
                $result = $value;
            }
        }
        return $result;
    }

}
