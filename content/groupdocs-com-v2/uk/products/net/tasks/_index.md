---
title: .NET API для керування та обробки файлів Microsoft Project
description: Надійний API керування проектами .NET для обробки файлів Microsoft Project. Створюйте, конвертуйте та маніпулюйте файлами проектів MPP, MPT і MPX у програмах .NET.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="C# .NET API для керування та обробки файлів Microsoft Project"
  inheadertext="Легко створюйте, редагуйте, експортуйте та обробляйте формати файлів Microsoft Project, такі як MPP, MPT, MPX і XML, у програмах керування проектами C# .NET. Перетворюйте документи MS Project у формати PDF, Excel, Primavera, HTML, TXT, PNG, JPEG і SVG за допомогою API обробки файлів .NET Project."
  ctabtn="Завантажте безкоштовну пробну версію"
  ctabtn="Завантажте безкоштовну пробну версію"
  ctalink="https://releases.aspose.com/tasks/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Переглянути всі API"
  bchomelink="/"
  bchome="додому"
  bcpage="завдання"
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
subnav5="https://purchase.aspose.com/pricing/tasks/net"
subnavtxt5="Ціноутворення" 
subbtn1="https://docs.aspose.com/tasks/net/"
subbtntxt1="вчитися"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="купити"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Провідний API керування проектами для обробки файлів MS Project у .NET"
   subtext="Aspose.Tasks для .NET — це надійний API для обробки різних форматів файлів Microsoft Project. Це дозволяє розробникам .NET програмно читати, змінювати, конвертувати та експортувати файли проекту в різні формати. Використовуючи цей .NET API для файлів Microsoft Project, ви можете розумно маніпулювати даними керування проектом і обробляти різні ресурси. Aspose.Tasks для .NET — це комплексне рішення для керування ресурсами проекту, яке дозволяє працювати із захищеними паролем проектними документами, сортувати та розблоковувати файли Microsoft Project, планувати та відстежувати ресурси, керувати завданнями та керувати витратами та етапами."
   subtext2="Ви також можете додавати власні діаграми Ганта під час експорту та друку файлів проекту за допомогою API керування проектами C# .NET, який підтримує точне перетворення файлів проекту в PDF, Primavera, електронні таблиці Excel, текст, HTML, JPEG, BMP і PNG растрові зображення та вектори SVG."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Починаємо</h2>
   <p>Зверніться до наведеної нижче інформації щодо налаштування Aspose.Tasks для бібліотеки .NET. Будь ласка, перегляньте сторінку <a href="https://docs.aspose.com/tasks/net/system-requirements/">Системні вимоги</a>, щоб отримати список попередніх умов перед встановленням API керування проектами .NET.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Tasks для встановлення .NET"
>}}
<p>Щоб завантажити DLL-файли або програму встановлення MSI безпосередньо, відвідайте <a href="https://releases.aspose.com/tasks/net/">розділ завантажень</a>. Ви також можете встановити .NET API для обробки файлів Microsoft Project за допомогою <a href="https://www.nuget.org/packages/Aspose.Tasks/">пакета NuGet</a>. Консольна команда менеджера пакетів для налаштування API наведена нижче:</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM > Install-Package Aspose.Tasks
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
 featureheading="Як легко конвертувати файли проекту MPP у формати PDF і растрових зображень"
 featuretext="Бібліотека Aspose.Tasks для .NET дозволяє швидко та легко обробляти файли керування проектами та дозволяє конвертувати файли проекту у добре відомі формати файлів документів і зображень, такі як PDF, Primavera, Excel, Text, HTML, PNG, SVG, JPEG, і БМП."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Конвертуйте MPP у PDF у .NET"
>}}
<p>Вміло конвертуйте файли проекту у формат PDF у програмах для перетворення файлів .NET. Бібліотека Aspose.Tasks для .NET дозволяє конвертувати файли MPP у PDF, використовуючи лише кілька рядків коду .NET. Перегляньте наведені нижче інструкції та зразок коду для перетворення документів MPP у формат файлу PDF за допомогою .NET API для обробки файлів Microsoft Project:</p>
<ul>
   <li>Завантажте файл MPP, який потрібно перетворити, за допомогою <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project">класу проекту.</a></li>
   <li>Додайте зміни до файлу MPP (необов’язково).</li>
   <li>Перетворіть файл MPP у формат PDF і експортуйте його за допомогою методу <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project/methods/save/index">Зберегти</a> .</li>
</ul>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp2"
>}}
// Load the input Project file (MPP)
Project project = new Project("project.mpp");
// Export the output PDF file
project.Save("ExportAsPDF.pdf", SaveFileFormat.PDF);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Перетворення файлів проекту на зображення"
>}}
<p>Перетворити дані вашого проекту на зображення PNG або JPEG легко за допомогою Aspose.Tasks для .NET API. Він вимагає мінімального кодування та дозволяє експортувати дані у формати зображень, забезпечуючи зручне зберігання та доступ на кількох пристроях. Наступна інформація та фрагмент коду допоможуть вам перетворити дані Microsoft Project на зображення JPEG за допомогою API керування проектами .NET:</p>
<ul>
   <li>Завантажте MPP-файл проекту за допомогою класу <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project">Project</a>.</li>
   <li>Створіть екземпляр класу <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/imagesaveoptions">ImageSaveOptions</a> за допомогою <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/savefileformat">SaveFileFormat.JPEG</a> перерахування.</li>
   <li>Укажіть якість зображення JPEG за допомогою властивості <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/imagesaveoptions/properties/jpegquality">JpegQuality</a>. Дозволений діапазон значень від 0 до 100.</li>
   <li>Перетворіть і збережіть зображення JPEG за допомогою методу <a href="https://reference.aspose.com/tasks/net/aspose.tasks.project/save/methods/6">Save</a>.</li>
</ul>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp3"
>}}
// Load the MPP file
Project project = new Project("SourceDirectory\\Tests\\test_project.mpp");
// Create an instance of the ImageSaveOptions class
ImageSaveOptions options = new ImageSaveOptions(SaveFileFormat.JPEG) { JpegQuality = 50 };
// Export the JPEG image
project.Save("OutputDirectory\\project_image.jpeg", (SaveOptions)options);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Відвідайте сторінку <a href="https://github.com/aspose-tasks/Aspose.Tasks-for-.NET/tree/master/Examples">прикладів GitHub</a> Aspose.Tasks для .NET API для перегляду додаткових зразків коду та робочих прикладів. Ви можете переглядати, конвертувати та керувати файлами Microsoft Project за допомогою комп’ютера або мобільного пристрою за допомогою <a href="https://products.aspose.app/tasks/family">безкоштовних онлайнових</a> програм для обробки даних для керування проектами .</p>
{{< products/product-feature-blocks
 featureheading="Об’єднайте файли Microsoft Project у програмах для об’єднання файлів C# .NET"
 featuretext="Aspose.Tasks для .NET дозволяє легко об’єднувати різні файли. Програмне поєднання файлів MPP, MPX, MPT і JIRA з PDF, Primavera та іншими форматами файлів підтримується API керування проектами .NET. Крім того, вам не потрібно встановлювати Microsoft Project або Microsoft Office для роботи з файлами проекту в програмах обробки документів C# .NET."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Як я можу конвертувати файли проекту в .NET?"
 faqanswer="Перетворення файлів Microsoft Project у .NET відбувається швидко та легко за допомогою API Aspose.Tasks для .NET. Щоб перетворити MPP, MPX, MPT, XML та інші файли проекту в різні формати документів і зображень, потрібно лише кілька рядків коду .NET."
>}}
   {{< products/faq-block 
 faqquery="2. Скільки часу потрібно для перетворення або об’єднання файлів керування проектами?"
 faqanswer=".NET API для керування та обробки файлів Microsoft Project працює швидко та миттєво виконує ваші запити на злиття або перетворення файлів."
>}}
   {{< products/faq-block
 faqquery="3. Чи безпечно обробляти дані керування проектом за допомогою .NET API?"
 faqanswer="Ви можете бути впевнені в безпеці файлів даних вашого проекту під час їх обробки за допомогою Aspose.Tasks для .NET API. Ми гарантуємо конфіденційність ваших даних і вживаємо всіх необхідних заходів, щоб забезпечити вам безпечний досвід користувача."
>}}
   {{< products/faq-block
 faqquery="4. Чи можу я обробляти файли проекту в Mac OS, Windows або Linux?"
 faqanswer="Так, API обробки файлів проекту для .NET працює в різних ОС, фреймворках і операційних середовищах. Ви можете використовувати його на платформі за своїм вибором, і для його роботи не потрібно інсталювати додаткове програмне забезпечення."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Інструменти керування файлами керування проектами"
>}}
   {{< products/popularapp-anchor
 anchorlink="MPP в PDF"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP в XLSX"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP в HTML"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP в JPEG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP в PNG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP в BMP"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPT в XLSX"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpt-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPT в JPEG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpt-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JIRA в MPP"
 moreproducts="https://products.aspose.com/tasks/net/merger/jira-to-mpp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="XML в MPP"
 moreproducts="https://products.aspose.com/tasks/net/merger/xml-to-mpp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPX в PDF"
 moreproducts="https://products.aspose.com/tasks/net/merger/mpx-to-pdf/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Шукаєте допомоги?"
bartext="Перевірте наші канали підтримки, щоб отримати допомогу з вашими запитаннями, пов’язаними з функціями та роботою API продукту Aspose."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/tasks/net/"
resourcetxt2="Довідник API"
resourcelinks2="https://reference.aspose.com/tasks/"
resourcetxt3="База знань"
resourcelinks3="https://kb.aspose.com/tasks/net/"
resourcetxt4="Безкоштовна підтримка"
resourcelinks4="https://forum.aspose.com/c/tasks/15"
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
resourcelistlink="https://blog.aspose.com/tasks/convert-mpp-to-mpx-in-csharp/"
resourcelistlink2="https://blog.aspose.com/tasks/convert-ms-project-to-pdf-in-csharp/"
resourcelistlink3="https://blog.aspose.com/tasks/convert-mpp-to-tiff-in-csharp/"
resourcelisttext="Перетворення MPP на MPX на C#"
resourcelisttext2="Конвертуйте Microsoft Project у PDF у C# .NET"
resourcelisttext3="Перетворення MPP у TIFF у C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Документація"
resourcealt="Документація"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/tasks/net/product-overview/#rich-features"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Tasks/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Tasks для функцій .NET"
resourcelisttext2="Встановіть Aspose.Tasks для пакета .NET NuGet"
resourcelisttext3="Служба підтримки платної підтримки Aspose.Tasks для .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="База знань"
resourcealt="Зразки коду"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/tasks/net/how-to-convert-mpp-to-excel-using-csharp/"
resourcelistlink2="https://kb.aspose.com/tasks/net/how-to-extract-microsoft-project-file-metadata-in-c-sharp/"
resourcelistlink3="https://kb.aspose.com/tasks/net/how-to-add-weekdays-in-mpp-using-csharp/"
resourcelisttext="Як конвертувати MPP в Excel за допомогою C#"
resourcelisttext2="Як витягти метадані файлу MS Project у C#"
resourcelisttext3="Як додати дні тижня в MPP за допомогою C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Готові почати?"
rtstext="Завантажте безкоштовну пробну версію"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Переглянути всі API"
>}}
