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

class IntellectMoneyBase {

    protected function convertToPriceFormat($amount) {
        $amount = floatval($amount);
        return number_format($amount, 2, '.', '');
    }

}
