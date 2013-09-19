shopping
========
This is simpe E-commerce application for selling and buying product. Its us open source application "MAGENTO". The date user for this application is take form sample Data of Magento commerce. Its database name is shop.

INSTALLING ISSUES / ERROR {Code Change For Installing}

    PHP Extensions "0" must be loaded.

./app/code/core/Mage/Install/Model/Installer/Db.php after line 64 (foreach ($extensions as $extName) {) , I added: if($extName == 0) continue;

    Database server does not support the InnoDB storage engine.

In line 87 of app/code/core/Mage/Install/Model/Installer/Db.php, comment all the line from 87 to 92, ie.

// check InnoDB support // if (!$resource->supportEngine()) { // Mage::throwException( // Mage::helper('install')->__('Database server does not support the InnoDB storage engine.') // ); // }


NOTE : THIS PROJECT IS CONTINUE WITH MY PREVIous PROJECT CALLED "myshop". IN THIS PROJECT, I HAVE TRY TO MODIFIY SOME OF MAGENTO CODE. 