---
title: PDF API для .NET для обробки, редагування та конвертації документів PDF
description: Розширена бібліотека .NET PDF для створення та об’єднання документів PDF. Перетворюйте PDF у JPG, PDF у Excel і PDF у Word у програмах C#, ASP.NET і VB.NET.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="PDF API для .NET для обробки, редагування та точної конвертації документів PDF"
  inheadertext="Відчуйте потужні функції редагування PDF-файлів, можливості перетворення та синтаксичного аналізу без використання Adobe Acrobat. Перетворюйте PDF-документи у формати DOC, DOCX, PPTX, XLS, JPG, PNG, GIF, SVG та інші у ваших програмах .NET."
  ctabtn="Завантажте безкоштовну пробну версію"
  ctabtn="Завантажте безкоштовну пробну версію"
  ctalink="https://releases.aspose.com/pdf/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Переглянути всі API"
  bchomelink="/"
  bchome="додому"
  bcpage="PDF"
  bclink2="Продукти"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Огляд" 
subnav2="#features"
subnavtxt2="особливості" 
subnav3="#support"
subnavtxt3="Підтримка" 
subnav4="#examples"
subnavtxt4="Приклади" 
subnav5="https://purchase.aspose.com/pricing/pdf/net"
subnavtxt5="Ціноутворення" 
subbtn1="https://docs.aspose.com/pdf/net/"
subbtntxt1="вчитися"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="купити"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Виведіть обробку PDF-документів на новий рівень у C# .NET"
   subtext="Оновіть програми для обробки документів .NET, інтегрувавши комплексні функції обробки PDF за допомогою Aspose.PDF для .NET. Ця рідна бібліотека має бездоганні можливості обробки PDF-файлів, що дозволяє розробникам .NET не лише створювати, обробляти, редагувати та аналізувати PDF-файли, але й точно конвертувати PDF-документи. Швидко та легко вставляйте текст, анотації та зображення в PDF-документи, додавайте або видаляйте вкладення, водяні знаки та закладки, розділяйте або об’єднуйте сторінки PDF, а також обробляйте поля форм у ваших PDF-файлах за допомогою цього API PDF для .NET."
   subtext2="Пропонуючи незрівнянну міжплатформенну сумісність, Aspose.PDF для .NET розроблений для безперебійної роботи в багатьох структурах, таких як .NET Framework і .NET Core серед інших. Крім того, ви можете використовувати цей .NET PDF API для створення програм конвертації PDF у C#, ASP.NET і VB.NET і конвертації PDF у JPG, PDF у Excel, PDF у Word, PDF у PowerPoint та кілька інших форматів файлів за допомогою велика точність."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Починаємо</h2>
   <p>Щоб правильно налаштувати та використовувати Aspose.PDF для .NET API, перевірте наведену нижче інформацію. Будь ласка, зверніться до сторінки <a href="https://docs.aspose.com/pdf/net/system-requirements/">Системні вимоги</a>, щоб отримати список передумов для успішного налаштування PDF API для . NET</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.PDF для інсталяції .NET"
>}}
<p>Щоб налаштувати Aspose.PDF для .NET у вашій системі, ви можете завантажити DLL-файли або інсталятор MSI безпосередньо з <a href="https://releases.aspose.com/pdf/net/">розділу завантажень</ a>. Крім того, ви можете скористатися <a href="https://www.nuget.org/packages/Aspose.PDF/">пакетом NuGet</a> для встановлення .NET PDF API. Команда API менеджера пакетів наведена нижче.</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM> Install-Package Aspose.PDF
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Як конвертувати PDF у Word у .NET і швидко об’єднувати PDF-файли"
featuretext="Aspose.PDF для .NET підтримує широкий набір функцій обробки документів, включаючи перетворення PDF у Word та інші формати файлів і об’єднання PDF-файлів у .NET. Використовуючи цю бібліотеку .NET, насолоджуйтеся повністю незалежною обробкою PDF-документів, не покладаючись на програмне забезпечення сторонніх виробників."
>}}
{{< products/product-feature-blocks-col
 featurecolheading="Конвертуйте PDF у Word у .NET"
>}}
<p>Оновіть існуючі програми для перетворення PDF-файлів .NET, інтегрувавши функцію перетворення PDF-файлів у Word. API Aspose.PDF для .NET дозволяє конвертувати PDF у DOC і PDF у DOCX у програмах для перетворення документів .NET. Перегляньте наведені нижче інструкції та фрагмент коду, щоб допомогти собі конвертувати PDF у Word у .NET:</p>
<ul>
   <li>Створіть екземпляр об’єкта <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document/">Document</a> із вихідним документом PDF.</li>
   <li>Збережіть його у форматі <strong>SaveFormat.Doc</strong>, викликавши метод <strong>Document.Save()</strong>.</li>
</ul>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp2"
>}}
public static void ConvertPDFtoWord()
{
    // Open the source PDF document
    Document pdfDocument = new Document(_dataDir + "PDFToDOC.pdf");
    // Save the file into MS document format
    pdfDocument.Save(_dataDir + "PDFToDOC_out.doc", SaveFormat.Doc);
}
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
 featurecolheading="Об’єднання PDF-файлів у .NET"
>}}
<p>Об’єднання PDF-файлів підтримується Aspose.PDF для .NET API. Перегляньте наведені нижче інструкції та фрагмент коду, щоб швидко та легко об’єднати файли PDF у програмах C# .NET:</p>
<ul>
   <li>Створіть два об’єкти <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document">Документ</a>, кожен з яких містить один із вхідних файлів PDF.</li>
   <li>Потім викличте метод Add колекції <a href="https://reference.aspose.com/pdf/net/aspose.pdf/pagecollection">PageCollection</a> для об’єкта Document, до якого потрібно додати інший файл PDF .</li>
   <li>Передайте колекцію PageCollection другого об’єкта Document до методу Add першої колекції PageCollection.</li>
   <li>Нарешті збережіть вихідний файл PDF за допомогою методу <a href="https://reference.aspose.com/pdf/net/aspose.pdf.document/save/methods/4">Save</a>.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// The path to the documents directory.
string dataDir = RunExamples.GetDataDir_AsposePdf_Pages();
// Open first document
Document pdfDocument1 = new Document(dataDir + "Concat1.pdf");
// Open second document
Document pdfDocument2 = new Document(dataDir + "Concat2.pdf");
// Add pages of second document to the first
pdfDocument1.Pages.Add(pdfDocument2.Pages);
dataDir = dataDir + "ConcatenatePdfFiles_out.pdf";
// Save concatenated output file
pdfDocument1.Save(dataDir);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Щоб отримати більше робочих прикладів і зразків коду Aspose.PDF для .NET API, відвідайте наш <a href="https://github.com/aspose-pdf/Aspose.PDF-for-.NET/tree/master/Examples">Приклади GitHub</a>. Якщо ви хочете переглядати, редагувати, об’єднувати, розділяти, коментувати, порівнювати або конвертувати PDF-документи на льоту, перегляньте наш безкоштовний онлайн <a href="https://products.aspose.app/pdf/family" >Програми для обробки PDF.</a></p>
{{< products/product-feature-blocks
featureheading="Безпечна обробка файлів PDF у .NET"
featuretext="Aspose.PDF для .NET — це повністю безпечна бібліотека для обробки PDF-файлів, що забезпечує такі функції безпеки, як підтримка цифрового підпису, захист паролем і шифрування. Це забезпечує надійний доступ, обробку та передачу ваших PDF-документів, одночасно запобігаючи несанкціонованому доступу та модифікації. Крім того, вам не потрібно встановлювати Adobe Acrobat, щоб використовувати цей API обробки PDF .NET."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Як я можу конвертувати PDF у .NET?"
 faqanswer="Конвертувати PDF-файл у .NET легко й прямо за допомогою API Aspose.PDF для .NET. Для цього потрібно лише кілька рядків коду, і ви можете конвертувати файли PDF у різні формати файлів."
>}}
   {{< products/faq-block 
 faqquery="2. Скільки часу займає об’єднання або конвертація PDF?"
 faqanswer=".NET PDF API працює швидко й миттєво обробляє ваші запити на злиття або конвертування документів."
>}}
   {{< products/faq-block
 faqquery="3. Чи безпечно обробляти PDF за допомогою API .NET PDF?"
 faqanswer="Звичайно! Ви можете бути впевнені в безпеці своїх документів під час їх обробки за допомогою API Aspose.PDF для .NET. Ми гарантуємо конфіденційність ваших даних і вживаємо всіх необхідних заходів, щоб забезпечити вам безпечний досвід користувача."
>}}
   {{< products/faq-block
 faqquery="4. Чи можу я обробляти PDF на Mac OS, Windows або Linux?"
 faqanswer="Так, .NET PDF manipulation API працює в різних ОС, фреймворках і операційних середовищах. Ви можете використовувати його на платформі за вашим вибором. Наша бібліотека .NET PDF не потребує встановлення додаткового програмного забезпечення для роботи."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Інструменти для обробки PDF"
   >}}
   {{< products/popularapp-anchor
 anchorlink="PDF в WORD"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-word/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF в DOC"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-doc/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF в DOCX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-docx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF в EXCEL"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-excel/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF в XLS"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xls/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF в XLSX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF в PPTX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF в HTML"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF в BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF в TIFF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-tiff/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF в PNG"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF в GIF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF в BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Шукаєте допомоги?"
bartext="Перевірте наші канали підтримки, щоб отримати допомогу з вашими запитаннями, пов’язаними з функціями та роботою API продукту Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/pdf/net/"
 resourcetxt2="Довідник API"
 resourcelinks2="https://reference.aspose.com/pdf/" 
 resourcetxt3="База знань"
 resourcelinks3="https://kb.aspose.com/pdf/net/"
 resourcetxt4="Безкоштовна підтримка"
 resourcelinks4="https://forum.aspose.com/c/pdf/10"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Ресурси"
 sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Блоги"
 resourcealt="Блоги"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/pdf/convert-latex-to-pdf-in-python/"
 resourcelistlink2="https://blog.aspose.com/pdf/convert-pdf-to-ppt-in-python/"
 resourcelistlink3="https://blog.aspose.com/pdf/convert-pdf-to-latex-in-python/"
 resourcelisttext="Перетворіть LaTeX у PDF на Python"
 resourcelisttext2="Перетворення PDF на PPT на Python"
 resourcelisttext3="Перетворення PDF на LaTeX на Python"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Документація"
 resourcealt="Документація"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/pdf/net/key-features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.PDF/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.PDF для функцій .NET"
 resourcelisttext2="Встановіть Aspose.PDF для пакета .NET NuGet"
 resourcelisttext3="Aspose.PDF для служби підтримки платної підтримки .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="База знань"
 resourcealt="Зразки коду"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/words/net/how-to-insert-hyperlink-in-word-using-csharp/"
 resourcelistlink2="https://kb.aspose.com/total/python/how-to-install-python-to-run-aspose-pdf-for-python-via-net/"
 resourcelistlink3="https://kb.aspose.com/pdf/net/how-to-add-hyperlink-in-pdf-using-csharp/"
 resourcelisttext="Як вставити гіперпосилання в Word за допомогою C#"
resourcelisttext2="Як інсталювати Python для запуску Aspose.PDF для Python через .NET"
resourcelisttext3="Як додати гіперпосилання в PDF за допомогою C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Готові почати?"
rtstext="Завантажте безкоштовну пробну версію"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Переглянути всі API"
>}}
