<!DOCTYPE html>
<?php
// include language configuration file based on selected language
$lang = "en";
if(isset($_GET['lang'])){ 
	$lang = $_GET['lang']; 
} 
require_once("language/".$lang.".php");
?>
<html lang="<?php echo $lang?>">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="user-scalable=no, initial-scale = 1, width=device-width">
    <meta name="format-detection" content="telephone=no">
    <title><?=TITLE?></title>
    <link href="css/index.css" rel="stylesheet">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="js/jquery.viewportchecker.min.js"></script>
    <script src="js/materialize.min.js"></script>
</head>
<?php
include('simple_html_dom.php');
$tokenAddress = '0xa74476443119A942dE498590Fe1f2454d7D4aC0d';

//кол-во держателей
$html = file_get_html('https://etherscan.io/token/'.$tokenAddress);
$ret = $html->find('#ContentPlaceHolder1_tr_tokenHolders .col-md-8'); 
$pizza  = strval($ret[0]);
$pieces = explode(" ", $pizza);
$holdersNum = $pieces[2];
$holdersNum = str_replace(",", " ", $holdersNum);

$html = file_get_html('https://bloxy.info/ru/txs/events_sc/'.$tokenAddress.'?signature_id=6');
/*$ret = $html->find('.panel-body strong');
$pieces = explode(" ", $ret[0]);
echo $pieces[2];
$totalTxns = floatval($pieces[2]);
echo $totalTxns;*/
$ret = $html->find('ul.pagination',0)->last_child()->prev_sibling()->plaintext;
$html = file_get_html('https://bloxy.info/ru/txs/events_sc/0xa74476443119a942de498590fe1f2454d7d4ac0d?page='.$ret.'&signature_id=6');
$res = count($html->find('table.table-striped tbody tr'));
$totalTxns = ($ret - 1) * 10 + $res;
$totalTxns = number_format($totalTxns, 0, '.', ' ');
?>
<body>

    <div id="q"></div>
<div class="container">
    <div class="block block-main">
        <div class="wrap-header">
            <header>
                <div class="wrap-drop">
                    <div class="dropdown-trigger drop" data-target='dropdown-main'><span class="flag"> 
						<?php if ($lang == 'en') :?><img src="img/eng.svg" alt=""></span> ENG<?php endif;?>
						<?php if ($lang == 'ru') :?><img src="img/rus.svg" alt=""></span> RUS<?php endif;?>
						<?php if ($lang == 'es') :?><img src="img/spain.svg" alt=""></span> ESP<?php endif;?>
                    </div>
                    <ul id='dropdown-main' class='dropdown-content'>
                        <li>
							<?php if ($lang == 'en') :?>
								<a href="?lang=ru"><span class="flag"><img src="img/rus.svg" alt=""></span> RUS</a>
							<?php else :?>
								<a href="?lang=en"><span class="flag"><img src="img/eng.svg" alt=""></span> ENG</a>
							<?php endif;?>					
                        </li>
                        <li>
							<?php if ($lang == 'es') :?>
								<a href="?lang=ru"><span class="flag"><img src="img/rus.svg" alt=""></span> RUS</a>
							<?php else :?>
								<a href="?lang=es"><span class="flag"><img src="img/spain.svg" alt=""></span> ESP</a>
							<?php endif;?>
                        </li>
                    </ul>
                </div>
                <div class="menu-burger ">
                    <div class="wrap-menu-icon js-wrap-menu-icon">
                        <span class="menu-icon-elem1"></span>
                        <span class="menu-icon-elem2"></span>
                        <span class="menu-icon-elem3"></span>
                    </div>
                </div>
                <nav class="js-wrap-menu">
                    <ul class="nav-menu">
                        <li><a href=".static" class="scroll_block"><?=MENU_STATISTICS?></a></li>
                        <li><a href=".buy" class="scroll_block"><?=MENU_BUY?></a></li>
                        <li><a href="#" target="_blank"><?=MENU_FUND?></a></li>
                        <li><a href="#" target="_blank">WhitePaper</a></li>
                        <li><a href="#" target="_blank">WhiteLabelEx</a></li>
                    </ul>
                </nav>
            </header>
        </div>

        <div class="box-content">
            <div class="wrap-logo">
                <div class="logo">
                    <img src="img/logo.png" alt="">
                </div>
                <div class="logo-name">StandardCoin</div>
            </div>
            <h1><?=LANG_H1?></h1>
            <p><?=IN_CIRCULATION?><span class="bold totalSupply"><?=UPDATING?></span></p>
            <div class="wrap-btn">
                <a href=".buy" class="scroll_block btn"><?=MENU_BUY?> StandardCoin</a>
            </div>
        </div>
    </div>
    <div class="block margin-top">
        <div class="box-content static">
            <div class="h2"><?=MENU_STATISTICS?></div>
            <div class="p">StandardCoin <?=IN_DIGITS?></div>
            <div class="wrap-statistic">
                <div class="col-stat show-left">
                    <div class="elem-stat">
                        <div class="icon-elem">
                            <img src="img/icon1.svg" alt="">
                        </div>
                        <div class="text">1 STDC = 1 USD</div>
                        <div class="label"><?=EXCHANGE_RATE?></div>
                    </div>
                    <div class="elem-stat">
                        <div class="icon-elem">
                            <img src="img/icon2.svg" alt="">
                        </div>
                        <div class="text spincrement totalSupply"><?=UPDATING?></div>
                        <div class="label"><?=CAPITALIZATION?></div>
                    </div>
                </div>
                <div class="col-stat show-right">
                    <div class="elem-stat">
                        <div class="icon-elem">
                            <img src="img/icon3.svg" alt="">
                        </div>
                        <div id="holders" class="text spincrement"><?php echo $holdersNum;?></div>
                        <div class="label"><?=USERS?></div>
                    </div>
                    <div class="elem-stat">
                        <div class="icon-elem">
                            <img src="img/icon4.svg" alt="">
                        </div>
                        <div id="transfers" class="text spincrement"><?php echo $totalTxns;?></div>
                        <div class="label"><?=TRANSACTIONS?></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="block">
        <div class="box-content buy">
            <div class="h2"><?=MENU_BUY?> StandardCoin</div>
            <div class="p"><?=BLOCK_BUY?></div>
            <div class="wrap-calc">
                <div class="calc-row">
                    <div class="calc-col border">
                        <div class="calc-label"><?=YOU_SEND?></div>
                        <div class="wrap-calc-input">
                            <input type="number" class="calc-input" placeholder="<?=ENTER_AMOUNT?>">
                        </div>
                    </div>
                    <div class="calc-col">
                        <div class="calc-label"><?=CUR_RATE?><span>100$</span></div>
                        <div class="calc-name-currency">Ethereum (ETH) <img src="img/ether.svg" alt=""></div>
                    </div>
                </div>
                <div class="calc-row">
                    <div class="calc-col border">
                        <div class="calc-label"><?=YOU_GET?></div>
                        <div class="wrap-calc-input">
                            <input type="number" class="calc-input" placeholder="<?=ENTER_AMOUNT?>">
                        </div>
                    </div>
                    <div class="calc-col">
                        <div class="calc-label"><?=CUR_EXCHANGE_RATE?></div>
                        <div class="calc-name-currency">StandardCoin (STDC) <img src="img/mini-logo.svg" alt=""></div>
                    </div>
                </div>
                <a id="buy" class="btn white show-tada"><?=BUY_WITH_METAMASK?></a>
                <a href="#" class="instruct" target="_blank"><img src="img/instr.svg" alt=""><?=INSTRUCTION?></a>
            </div>
        </div>
    </div>
    <div class="block block-down">
        <div class="box-content">
            <div class="h2"><?=FOLLOW_US?></div>
            <div class="p"><?=SIGN_UP?></div>
<!--             <div class="form-news">
                <div class="wrap-update">
                    <label for="update">Введите Ваш E-mail</label>
                    <input type="text" id="update" placeholder="your-email@gmail.com">
                </div>
                <div class="btn show-inup js-success">Подписаться</div>
                <div class="success-form">
                    <div class="wrap-icon">
                        <img src="img/checked.svg" alt="">
                    </div>
                    <div class="success-text">Ваша подписка активирована</div>
                </div>
            </div> -->
            <!-- Begin Mailchimp Signup Form -->
            <div id="mc_embed_signup" class="form-news">
            <form action="https://neovesting.us19.list-manage.com/subscribe/post?u=5e9ccc927588e4d5fbbb924f3&amp;id=7b961b14f6" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
            <div class="mc-field-group wrap-update">
                <label for="update"><?=ENTER_EMAIL?></label>
                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="your-email@gmail.com">
            </div>
                <div id="mce-responses" class="clear">
                </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_5e9ccc927588e4d5fbbb924f3_7b961b14f6" tabindex="-1" value=""></div>
                <div class="clear "><input type="submit" value="<?=SUBSCRIBE?>" name="subscribe" id="mc-embedded-subscribe" class="button btn show-inup js-success btn"></div>
                <div class="success-form">
                    <div class="wrap-icon">
                        <img src="img/checked.svg" alt="">
                    </div>
                    <div class="success-text"><?=SUBSCRIBTION_ACTIVATED?></div>
                </div>
                </div>
            </form>
            </div>
            <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->
            <div class="wrap-icons">
                <ul>
                    <li><a href="#" target="_blank"><img src="img/fb.svg" alt=""></a></li>
                    <li><a href="#" target="_blank"><img src="img/github.svg" alt=""></a></li>
                    <li><a href="#" target="_blank"><img src="img/etherscan.svg" alt=""></a></li>
                    <li><a href="#" target="_blank"><img src="img/twit.svg" alt=""></a></li>
                    <li><a href="#" target="_blank"><img src="img/tele.svg" alt=""></a></li>
                    <li><a href="#" target="_blank"><img src="img/bit.svg" alt=""></a></li>
                </ul>
            </div>
        </div>
    </div>

    <footer>
        <div class="box-content">
            <div class="wrap-footer">
                <div class="footer-text">2018 © StandardCoin. <?=ALL_RIGHTS_RESERVED?></div>
                <ul class="nav-menu">
                    <li><a href=".static" class="scroll_block"><?=MENU_STATISTICS?></a></li>
                    <li><a href=".buy" class="scroll_block"><?=MENU_BUY?></a></li>
                    <li><a href="#" target="_blank"><?=MENU_FUND?></a></li>
                    <li><a href="#" target="_blank">WhitePaper</a></li>
                    <li><a href="#" target="_blank">WhiteLabelEx</a></li>
                </ul>
            </div>
        </div>
    </footer>

</div>

<script>
//    var tokenAddress = "0x2a81f3573a6f2eb485add34442acf8aa738de905";
    if ($(window).width() > 993) {
        $('.show-left').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated slideInLeft',
            offset: 280
        });

        $('.show-right').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated slideInRight',
            offset: 280
        });

        $('.show-tada').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated zoomIn',
        });

        $('.show-inup').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated slideInUp',
        });
    }




</script>

<script src="js/main.js"></script>
<script src="js/web3.js"></script>
<script src="js/integration.js"></script>
</body>
</html>





