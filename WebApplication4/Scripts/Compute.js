    $(function()
    {
        $("#txt").keypress(function (e) {
            if (String.fromCharCode(e.keyCode).match(/[^0-9+-/*]/g)) return false;
        });

        $("#b0").click(function() {
            var x = $("#txt").val();
            if (x == "0")
            {
        $("#txt").val("0");
            } else
            {
        $("#txt").val(x + "0")
    }
        });

        $("#b1").click(function()
        {
            var x = $("#txt").val();
            if (x == "0")
            {
        $("#txt").val("1");
            } else
            {
        $("#txt").val(x + "1")
    }
        });

        $("#b2").click(function()
        {
            var x = $("#txt").val();
            if (x == "0")
            {
        $("#txt").val("2");
            } else
            {
        $("#txt").val(x + "2")
    }
        });

        $("#b3").click(function()
          {
            var x = $("#txt").val();
            if (x == "0")
            {
        $("#txt").val("3");
            } else
            {
        $("#txt").val(x + "3")
    }
        });

        $("#b4").click(function()
         {
            var x = $("#txt").val();
            if (x == "0")
            {
        $("#txt").val("4");
            } else
            {
        $("#txt").val(x + "4")
    }
        });

        $("#b5").click(function()
         {
            var x = $("#txt").val();
            if (x == "0")
            {
        $("#txt").val("5");
            } else
            {
        $("#txt").val(x + "5")
    }
        });

        $("#b6").click(function()
         {
            var x = $("#txt").val();
            if (x == "0")
            {
        $("#txt").val("6");
            } else
            {
        $("#txt").val(x + "6")
    }
        });

        $("#b7").click(function()
          {
            var x = $("#txt").val();
            if (x == "0")

           {
        $("#txt").val("7");
            } else
            {
        $("#txt").val(x + "7")
    }
        });

        $("#b8").click(function()
          {
            var x = $("#txt").val();
            if (x == "0")
            {
        $("#txt").val("8");
            } else
            {
        $("#txt").val(x + "8")
    }
        });

        $("#b9").click(function()
         {
            var x = $("#txt").val();
            if (x == "0")
            {
        $("#txt").val("9");
            } else
            {
        $("#txt").val(x + "9")
    }
        });

        
        $("#div").click(function()
          {
            var x = $("#txt").val();
            var y = x.slice(-1)
            if (y == "/" || y == "+" || y == "*" || y == "-") { } else {
        $("#txt").val(x + "/")
    }
        });

        $("#multy").click(function()
          {
            var x = $("#txt").val();
            var y = x.slice(-1)
            if (y == "/" || y == "+" || y == "*" || y == "-") { } else {
        $("#txt").val(x + "*")
    }
        });

        $("#sub").click(function()
          {
            var x = $("#txt").val();
            var y = x.slice(-1)
            if (y == "/" || y == "+" || y == "*" || y == "-") { } else {
        $("#txt").val(x + "-")
    }
        });

        $("#add").click(function()
         {
            var x = $("#txt").val();
            var y = x.slice(-1)
            if (y == "/" || y == "+" || y == "*" || y == "-") { } else {
        $("#txt").val(x + "+")
    }
        });

        $("#eq").click(function () {
            
            var x = $('#txt').val(); 
            
            var input = eval(x);

            $.ajax({
                url: ajaxUrl,
                type: "post",
                data: { equat:x ,result:input },
                dataType: "json",
                success: function (result) {
                    $('#txt').val(result.textTo);
                },
                error: function (result) {
                    $('#txt').html('error');
                }
            });

        });

        $("#re").click(function () {

            $("#re").val("")
            
        });

        $("#bd").click(function () {
            var x = $("#txt").val();
            if (x=="") {
                $("#txt").val("0.");
            } else {
                $("#txt").val(x + ".")
            }
        });
    });
