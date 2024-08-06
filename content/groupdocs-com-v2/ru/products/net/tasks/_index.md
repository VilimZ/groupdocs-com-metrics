---
title: .NET API для управления и обработки файлов Microsoft Project
description: Надежный API управления проектами .NET для обработки файлов Microsoft Project. Создавайте, конвертируйте и управляйте файлами проектов MPP, MPT и MPX в приложениях .NET.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="C# .NET API для управления и обработки файлов Microsoft Project"
  inheadertext="Легко создавайте, редактируйте, экспортируйте и обрабатывайте форматы файлов Microsoft Project, такие как MPP, MPT, MPX и XML, в приложениях управления проектами C# .NET. Преобразование документов MS Project в форматы PDF, Excel, Primavera, HTML, TXT, PNG, JPEG и SVG с помощью API обработки файлов .NET Project."
  ctabtn="Скачать бесплатную пробную версию"
  ctabtn="Скачать бесплатную пробную версию"
  ctalink="https://releases.aspose.com/tasks/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Просмотреть все API"
  bchomelink="/"
  bchome="Дом"
  bcpage="Задания"
  bclink2="Продукты"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Обзор" 
subnav2="#features"
subnavtxt2="Функции" 
subnav3="#support"
subnavtxt3="Поддерживать" 
subnav4="#examples"
subnavtxt4="Примеры" 
subnav5="https://purchase.aspose.com/pricing/tasks/net"
subnavtxt5="Цены" 
subbtn1="https://docs.aspose.com/tasks/net/"
subbtntxt1="Учиться"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Купить"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Ведущий API управления проектами для обработки файлов MS Project в .NET"
   subtext="Aspose.Tasks for .NET — это надежный API для обработки различных форматов файлов Microsoft Project. Он позволяет разработчикам .NET программно читать, изменять, преобразовывать и экспортировать файлы проектов в различные форматы. Используя этот .NET API для файлов Microsoft Project, вы можете разумно манипулировать данными управления проектами и обрабатывать различные ресурсы. Aspose.Tasks для .NET — это комплексное решение для управления ресурсами проекта, которое позволяет работать с защищенными паролем документами проекта, сортировать и разблокировать файлы Microsoft Project, планировать и отслеживать ресурсы, манипулировать задачами, а также управлять затратами и этапами."
   subtext2="Вы также можете добавлять пользовательские диаграммы Ганта при экспорте и печати файлов проекта с помощью API управления проектами C# .NET, который поддерживает точное преобразование файлов вашего проекта в PDF, Primavera, электронные таблицы Excel, текст, HTML, JPEG, BMP и PNG. растровые изображения и векторы SVG."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Начиная</h2>
   <p>Пожалуйста, обратитесь к следующей информации для настройки Aspose.Tasks для библиотеки .NET. Пожалуйста, проверьте на странице <a href="https://docs.aspose.com/tasks/net/system-requirements/">Системные требования</a> список предварительных требований перед установкой API управления проектами .NET.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Tasks для установки .NET"
>}}
<p>Чтобы загрузить библиотеки DLL или установщик MSI напрямую, посетите <a href="https://releases.aspose.com/tasks/net/">раздел загрузок</a>. Вы также можете установить .NET API для обработки файлов Microsoft Project с помощью <a href="https://www.nuget.org/packages/Aspose.Tasks/">пакета NuGet</a>. Консольная команда диспетчера пакетов для настройки API приведена ниже:</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM > Install-Package Aspose.Tasks
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
 featureheading="Как легко конвертировать файлы проектов MPP в форматы файлов PDF и растровых изображений"
 featuretext="Библиотека Aspose.Tasks для .NET позволяет быстро и легко обрабатывать файлы управления проектами и позволяет преобразовывать файлы проекта в известные форматы файлов документов и изображений, такие как PDF, Primavera, Excel, Text, HTML, PNG, SVG, JPEG, и БМП."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Преобразование MPP в PDF в .NET"
>}}
<p>Умело преобразовывайте файлы проекта в формат PDF в своих приложениях для преобразования файлов .NET. Библиотека Aspose.Tasks for .NET позволяет конвертировать файлы MPP в PDF, используя всего несколько строк кода .NET. Ознакомьтесь с приведенными ниже инструкциями и примером кода для преобразования документов MPP в формат PDF с помощью .NET API для обработки файлов Microsoft Project:</p>
<ul>
   <li>Загрузите файл MPP для преобразования с помощью класса <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project">Project.</a></li>
   <li>Добавьте изменения в файл MPP (необязательно).</li>
   <li>Преобразуйте файл MPP в формат PDF и экспортируйте его, используя метод <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project/methods/save/index">Сохранить</a>. .</li>
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
featurecolheading="Преобразование файлов проекта в изображения"
>}}
<p>Преобразовать данные вашего проекта в изображения PNG или JPEG легко с помощью Aspose.Tasks для .NET API. Он требует минимального кодирования и позволяет экспортировать данные в форматы изображений, обеспечивая удобное хранение и доступ на нескольких устройствах. Следующая информация и фрагмент кода помогут вам преобразовать данные Microsoft Project в изображения JPEG с помощью API управления проектами .NET:</p>
<ul>
   <li>Загрузите файл MPP проекта, используя класс <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project">Project</a>.</li>
   <li>Создайте экземпляр класса <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/imagesaveoptions">ImageSaveOptions</a>, используя <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/savefileformat">SaveFileFormat.JPEG</a>.</li>
   <li>Укажите качество изображения JPEG с помощью свойства <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/imagesaveoptions/properties/jpegquality">JpegQuality</a>. Допустимый диапазон значений от 0 до 100.</li>
   <li>Преобразуйте и сохраните изображение JPEG, используя метод <a href="https://reference.aspose.com/tasks/net/aspose.tasks.project/save/methods/6">Сохранить</a>.</li>
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
   <p class="col-lg-12">Посетите <a href="https://github.com/aspose-tasks/Aspose.Tasks-for-.NET/tree/master/Examples">страницу примеров GitHub</a> Aspose.Tasks для .NET. API для просмотра дополнительных примеров кода и рабочих примеров. Вы можете просматривать, преобразовывать и управлять файлами Microsoft Project на настольных или мобильных устройствах с помощью <a href="https://products.aspose.app/tasks/family">бесплатных онлайн</a> приложений для обработки данных управления проектами. .</p>
{{< products/product-feature-blocks
 featureheading="Слияние файлов Microsoft Project в приложениях слияния файлов C# .NET"
 featuretext="Aspose.Tasks для .NET позволяет легко объединять разные файлы. Программное объединение файлов MPP, MPX, MPT и JIRA с файлами PDF, Primavera и других форматов поддерживается API управления проектами .NET. Кроме того, вам не требуется устанавливать Microsoft Project или Microsoft Office для управления файлами проекта в приложениях для обработки документов C# .NET."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="Часто задаваемые вопросы"
>}}
   {{< products/faq-block
 faqquery="1. Как преобразовать файлы проекта в .NET?"
 faqanswer="Преобразование файлов Microsoft Project в .NET выполняется быстро и легко с помощью Aspose.Tasks for .NET API. Всего несколько строк кода .NET необходимы для преобразования файлов MPP, MPX, MPT, XML и других проектов в различные форматы файлов документов и изображений."
>}}
   {{< products/faq-block 
 faqquery="2. Сколько времени занимает преобразование или объединение файлов управления проектами?"
 faqanswer=".NET API для управления и обработки файлов Microsoft Project работает быстро и выполняет ваши запросы на слияние или преобразование файлов в кратчайшие сроки."
>}}
   {{< products/faq-block
 faqquery="3. Безопасно ли обрабатывать данные управления проектом с помощью .NET API?"
 faqanswer="Вы можете быть уверены в безопасности файлов данных вашего проекта при их обработке с помощью Aspose.Tasks for .NET API. Мы обеспечиваем конфиденциальность ваших данных и принимаем все необходимые меры, чтобы предоставить вам безопасный пользовательский интерфейс."
>}}
   {{< products/faq-block
 faqquery="4. Могу ли я обрабатывать файлы проекта в Mac OS, Windows или Linux?"
 faqanswer="Да, API обработки файлов проекта для .NET работает в разных ОС, платформах и операционных средах. Вы можете использовать его на платформе по вашему выбору, и для его работы не требуется установка дополнительного программного обеспечения."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Инструменты управления файлами для управления проектами"
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
bartitle="Ищете помощь?"
bartext="Ознакомьтесь с нашими каналами поддержки, чтобы получить ответы на вопросы, связанные с функциями и работой API продукта Aspose."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/tasks/net/"
resourcetxt2="Справочник по API"
resourcelinks2="https://reference.aspose.com/tasks/"
resourcetxt3="База знаний"
resourcelinks3="https://kb.aspose.com/tasks/net/"
resourcetxt4="Бесплатная поддержка"
resourcelinks4="https://forum.aspose.com/c/tasks/15"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
resource-heading="Ресурсы"
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
resourcelisttext="Преобразование MPP в MPX на C#"
resourcelisttext2="Преобразование Microsoft Project в PDF на C# .NET"
resourcelisttext3="Преобразование MPP в TIFF в C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Документация"
resourcealt="Документация"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/tasks/net/product-overview/#rich-features"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Tasks/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Tasks для функций .NET"
resourcelisttext2="Установите пакет Aspose.Tasks для .NET NuGet."
resourcelisttext3="Платная служба поддержки Aspose.Tasks для .NET Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="База знаний"
resourcealt="Примеры кода"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/tasks/net/how-to-convert-mpp-to-excel-using-csharp/"
resourcelistlink2="https://kb.aspose.com/tasks/net/how-to-extract-microsoft-project-file-metadata-in-c-sharp/"
resourcelistlink3="https://kb.aspose.com/tasks/net/how-to-add-weekdays-in-mpp-using-csharp/"
resourcelisttext="Как преобразовать MPP в Excel с помощью C#"
resourcelisttext2="Как извлечь метаданные файла MS Project в C#"
resourcelisttext3="Как добавить дни недели в MPP с помощью C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Готовы начать?"
rtstext="Скачать бесплатную пробную версию"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Просмотреть все API"
>}}
