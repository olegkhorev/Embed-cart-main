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

class ProcessingResponseResultStruct {

    public $changeStatusResult;
    public $statusCMS;

    public function __construct($changeStatusResult, $statusCMS) {
        $this->changeStatusResult = $changeStatusResult;
        $this->statusCMS = $statusCMS;
    }

}
?>