# iwt
## To run locally

* Install node and npm

* Install gitbook-cli:
https://github.com/GitbookIO/gitbook-cli

* Clone this repo:
https://github.com/IWT-Book/Book-Master.git

* Setup the local book:
```
cd [book_master_directory]
gitbook install
```

* **IMPORTANT:**  In book.json, you need to change `slideRootPath` to the following.
`"slideRootPath": "/Slides"`

* **NOTE:**  This WILL break the gitbook site version if you push it, so try not to commit that file.  If you do by accident,
change the book.json on the live server to be `"slideRootPath": "/iwt-master/content/Slides"`

* Run book
```
gitbook serve
```

* Now you can view the book at localhost:4000
The book will rebuild when you save a file.  You can view the command line to see status
When you push back up to the book repo, it'll update gitbook as well.

## Updating Theme

* To update the layout of the page, modify the files in node_modules/gitbook-plugin-theme-iwt/_layouts/website.
This can only be done while running locally.
 
* To update the css, modify website.css. This can be done on the gitbook site or locally.
  To see all the regions/classes that gitbook provides, you can view node_modules/gitbook-plugin-theme-iwt/src/less/website
  OR you can update the .less files at node_modules/gitbook-plugin-theme-iwt/src/less/website.  
  Unfortunately, it only seems like the changes take hold if you publish the plugin and update the version.  No way to test locally so probably better to use website.css.

## Last Updated : June 2019 - TAP
