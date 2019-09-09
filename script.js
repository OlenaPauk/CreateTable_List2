$(function () {
    jQuery.extend(jQuery.validator.messages, {
        required: "",
        min: jQuery.validator.format("")
    });
    let f1 = document.forms['f1'];
    let f2 = document.forms['f2'];
    let f3 = document.forms['f3'];
    let f4 = document.forms['f4'];
    let f5 = document.forms['f5'];
    let f6 = document.forms['f6'];
    let f7 = document.forms['f7'];
    let f8 = document.forms['f8'];
    let f9 = document.forms['f9'];
    let getSel = x => document.querySelector(x);

    let flagBold = false;
    let flagItalic = false;
    let flagUnderline = false;
    let flagStrikethrough = false;
    let flagColors;
    let flagBackground;
    let colorsList = ["lawngreen", "	limegreen", "green", "springgreen", "olive",
        "darkolivegreen", "aqua", "paleturquoise",
        "darkcyan", "darkblue", "darkslateblue", "plum", "darkorchid",
        "indigo", "white", "black", "gray", "sandybrown", "maroon", "	goldenrod", "yellow"]


    $('.bold').click(function () {
        flagBold
            ? $('.container1').css('font-weight', 'normal')//true
            : $('.container1').css('font-weight', 'bold');//false
        flagBold = !flagBold;
    })

    $('.italic').click(function () {
        flagItalic
            ? $('.container1').css('font-style', 'normal')//true
            : $('.container1').css('font-style', 'italic');//false
        flagItalic = !flagItalic;
    })

    $('.underline').click(function () {
        flagUnderline
            ? $('.container1').css('text-decoration', 'none')//true
            : $('.container1').css('text-decoration', 'underline');//false
        flagUnderline = !flagUnderline;
    })

    $('.strikethrough').click(function () {
        flagStrikethrough
            ? $('.container1').css('text-decoration', 'none')//true
            : $('.container1').css('text-decoration', 'line-through');//false
        flagStrikethrough = !flagStrikethrough;
    })

    $('.left').click(function () {
        $('.container1').css('text-align', 'left');
    })
    $('.center').click(function () {
        $('.container1').css('text-align', 'center');
    })
    $('.right').click(function () {
        $('.container1').css('text-align', 'right');
    })

    //fontFamily
    $('.selectFont').change((event) => {
        $('.container1').css('font-family', event.currentTarget.value);
    });

    //fontSize
    $('.selectHeight').change((event) => {
        $('.container1').css('font-size', event.currentTarget.value);
    });

    //Color text
    for (let i = 0; i < colorsList.length; i++) {
        getSel(`.div${i + 1}`).addEventListener('click', () => {
            if (flagColors === 0) {
                getSel('.container1').style.color = colorsList[i];

            }
        });
    }

    $('.container1').click(function () {
        $('.contColor').hide();
        $('.files').hide();
        $('.contBackground').hide();
    });

    f1.palette.addEventListener('click', () => {
        flagColors = 0;
        setColor();
    });

    let setColor = () => {
        getSel('.contColor').style.display = 'block';
        for (let i = 0; i < colorsList.length; i++) {
            getSel(`.div${i + 1}`).style.display = 'block';
            getSel(`.div${i + 1}`).style.backgroundColor = colorsList[i];
            getSel(`.div${i + 1}`).style.border = '1px solid black';
        }
    };

    //Background Color
    f1.image.addEventListener('click', () => {
        setBackground();
        flagBackground = 0;
        $('.background').show();
        $('.images').hide();
        $('.files').hide();

    });
    for (let i = 0; i < colorsList.length; i++) {
        getSel(`.div${i + 1}b`).addEventListener('click', (event) => {
            if (flagBackground === 0) {
                getSel('body').style.backgroundColor = colorsList[i];
                getSel('body').style.backgroundImage = ``;
            }
        });
    }

    f4.color.addEventListener('click', () => {
        flagBackground = 0;
        $('.background').show();
        $('.files').hide();
        $('.images').hide();
        setBackground();
    });

    let setBackground = () => {
        getSel('.contBackground').style.display = 'block';
        for (let i = 0; i < 21; i++) {
            getSel(`.div${i + 1}b`).style.display = 'block';
            getSel(`.div${i + 1}b`).style.backgroundColor = colorsList[i];
            getSel(`.div${i + 1}b`).style.border = '1px solid black';
            $('.contBackground').show();
            $('.f4').show();
        }
    };
    //Images
    for (let i = 0; i < 9; i++) {
        getSel(`.img${i + 1}`).addEventListener('click', () => {
            getSel('body').style.backgroundImage = `url('Images/img${i + 1}.jpg')`;
            getSel('body').style.backgroundColor = '';
            getSel('body').style.backgroundSize = '100vw 100vh';
        });
    }

    f4.images.addEventListener('click', () => {
        $('.background').hide();
        $('.files').hide();
        $('.images').show();
        flag = 1;
        setImages();
    })

    let setImages = () => {
        for (let i = 0; i < 9; i++) {
            // getSel(`.img${i + 1}`).style.backgroundColor = '';
            getSel(`.img${i + 1}`).style.backgroundImage = `url('Images/img${i + 1}.jpg')`;
            getSel(`.img${i + 1}`).style.backgroundSize = '100% 100%';
            getSel(`.img${i + 1}`).style.border = '1px solid black';
        }
    };

    //file
    f4.file.addEventListener('click', () => {
        $('.images').hide();
        $('.background').hide();
        $('.files').show();

    })

    getSel('.inputFile').addEventListener('change', readURL, true);
    function readURL() {
        let file = getSel('.inputFile').files[0];
        let reader = new FileReader();
        reader.onloadend = function () {
            getSel('body').style.backgroundImage = "url(" + reader.result + ")";
            getSel('body').style.backgroundSize = '100vw 100vh';
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
        }
    }

    //Edit
    f1.editing.addEventListener('click', () => {
        $('.f1').hide();
        $('.f3').show();
        $('.area1').show();
        $('.container1').hide();
        $('.images').hide();
        $('.background').hide();
        getSel('.area1').value = getSel('.container1').innerHTML;

    })

    //save
    f3.save.addEventListener('click', () => {
        $('.f1').show();
        $('.f3').hide();
        $('.area1').hide();
        $('.container1').show();
        getSel('.container1').innerHTML = getSel('.area1').value;

    })

    //table
    f3.table.addEventListener('click', function () {
        $('.tableEdit').show();
    })
    $(".f6").validate({
        rules: {
            countTR: {
                required: false,
                min: 1
            }, countTD: {
                required: true,
                min: 1
            }, widthTD: {
                required: true,
                min: 1
            }, heightTD: {
                required: true,
                min: 1
            }, borderW: {
                required: true,
                min: 0
            }
        }
    });

    f6.createTable.addEventListener('click', function () {
        f2.area.value += `<table>`;

        for (let i = 0; i < f6.countTR.value; i++) {
            f2.area.value += `<tr>`;
            for (let j = 0; j < f6.countTD.value; j++) {
                f2.area.value += `<td style="width:${f6.widthTD.value + 'px'}; 
            height:${f6.heightTD.value + 'px'}; 
            border:${f6.borderW.value + 'px'} ${f6.elements[5].value} ${f6.elements[6].value}">TD</td>`;
            }
            f2.area.value += '</tr>';
        }
        f2.area.value += `</table>`;

    })

    $('.area1').click(function () {
        $('.tableEdit').hide();
        $('.listOlEdit ').hide();
        $('.listUlEdit ').hide();
    })

    //reset table
    f6.resetTable.addEventListener('click', function () {
        f6.reset();
    })

    //list
    //OL
    $('.listOlBut').click(function () {
        $('.listOlEdit ').show();
    })
    $(".f7").validate({
        rules: {
            countLiOl: {
                required: true,
                min: 1
            }
        }
    });
    f7.createListOl.addEventListener('click', function () {
        f2.area.value += `<ol type="${f7.elements[1].value}">`;
        for (let i = 1; i <= f7.countLiOl.value; i++) {
            f2.area.value += `<li>item${i}</li>`;
        }
        f2.area.value += `</ol>`;
    })

    f7.resetListOl.addEventListener('click', function () {
        f7.reset();
    })
    //UL
    $('.listUlBut').click(function () {
        $('.listUlEdit ').show();
    })
    $(".f8").validate({
        rules: {
            countLiUl: {
                required: true,
                min: 1
            }
        }
    });

    f8.createListUl.addEventListener('click', function () {
        f2.area.value += `<ul type="${f8.elements[1].value}">`;
        for (let i = 1; i <= f8.countLiUl.value; i++) {
            f2.area.value += `<li>item${i}</li>`;
        }
        f2.area.value += `</ul>`;
    })

    f8.resetListUl.addEventListener('click', function () {
        f8.reset();
    })

    //sign in
    $.prototype.enable = function () {
        $.each(this, function (index, el) {
            $(el).removeAttr('disabled');
        });
    }

    $.prototype.disable = function () {
        $.each(this, function (index, el) {
            $(el).attr('disabled', 'disabled');
        });
    }

    f1.lock.addEventListener('click', function () {
        $('.signIn').show();
        $('.contColor').hide();
        $('.files').hide();
        $('.contBackground').hide();
        $(".header *").prop('disabled', true);
        $(".container1 *").prop('disabled', true);

    })

    $(".loginInp").change(function () {
        if (f9.loginInp.value == 'admin' && f9.passInp.value == 'admin') {
            $(".signInBut").prop('disabled', false);
        }
    });

    $(".passInp").change(function () {
        if (f9.loginInp.value == 'admin' && f9.passInp.value == 'admin') {
            $(".signInBut").prop('disabled', false);
        }
    });

    $('.signInBut').click(function () {
        $('.signIn').hide();
        $(".header *").prop('disabled', false);
        $(".container1 *").prop('disabled', false);
        $('.signInBut').prop('disabled', true);
        $('.f9').closest('form').find("input[type=text], textarea").val("");
    })

})

