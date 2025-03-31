import gspread
import os
import time
gc = gspread.service_account("../keys.json")
stored = ""
while True:
    wks = gc.open("crowdpricecheck.github.io Submission Form (Beta) (Responses)").sheet1.get_all_values()
    wks.pop(0)
    for e in wks:
        e.pop(0)
        e.pop(0)
        e.append(e[4])
        e[6] = e[6].replace("$", "").replace(",", "")
        e[4] = e[4].split("/dp/")[1].split("/")[0]
    wks = sorted(wks)
    if wks != stored:
        stored = wks
        f = open("script.js", "w")
        f.write('function display(event) {' + "\n")
        f.write('    let arr = ' + str(wks) + ";" + "\n")
        f.write('    let p = "";' + "\n")
        f.write('    let found = false;' + "\n")
        f.write('    event.preventDefault();' + "\n")
        f.write('    for (let e = 0; e < arr.length; e++) {' + "\n")
        f.write('        if (document.getElementById("company").value == arr[e][0] || document.getElementById("company").value == "") {' + "\n")
        f.write('            if (document.getElementById("ram").value == arr[e][1] || document.getElementById("ram").value == "") {' + "\n")
        f.write('                if (document.getElementById("storage").value == arr[e][2] || document.getElementById("storage").value == "") {' + "\n")
        f.write('                    if (document.getElementById("os").value == arr[e][3] || document.getElementById("os").value == "") {' + "\n")
        f.write('                        if (document.getElementById("graphics").value == arr[e][5] || document.getElementById("graphics").value == "") {' + "\n")
        f.write('                            p = p + "<li><a href='" + arr[e][7] + "'>" + arr[e][0] + " Laptop, " + arr[e][1] + " RAM, " + arr[e][2] + " Storage, " + arr[e][5] + " Graphics, " + arr[e][3] + ", Amazon ASIN " + arr[e][4] + ", price: " + arr[e][6] + "</a></li>";' + "\n")
        f.write('                            found = true;' + "\n")
        f.write('                        }' + "\n")
        f.write('                    }' + "\n")
        f.write('                }' + "\n")
        f.write('            }' + "\n")
        f.write('        }' + "\n")
        f.write('    }' + "\n")
        f.write('    if (found == false) {' + "\n")
        f.write('        p = "No results found!";' + "\n")
        f.write('    }' + "\n")
        f.write('    document.getElementById("test").innerHTML = p;' + "\n")
        f.write('}')
        f.close()
        os.system("./commit.sh")
    else:
        print("No git push.")
    time.sleep(86400)