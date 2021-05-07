<script>
    function printRepeating(arr , size)
    {
        var i, j;
        document.write("Repeated Elements are :");
        for (i = 0; i < size; i++)
        {
            for (j = i + 1; j < size; j++)
            {
                if (arr[i] == arr[j])
                    document.write(arr[i] + " ");
            }
        }
    }
 
var arr = [4, 2, 4, 5, 2, 3, 1];
var arr_size = arr.length;
printRepeating(arr, arr_size);
 
</script>