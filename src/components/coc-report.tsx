import { forwardRef } from "react";
import LabelInput from "./LabelInput";
import Table from "./Table";
import tuvlogo from "./../assets/images/tuvlogo.svg";

export const CocoReport = forwardRef<HTMLDivElement, any>(({}, ref) => {
  const editMode = true;
  //   const Logo = "https://www.cosqc.gov.iq/images/WLOGO.svg";
  const LogoCompany = "";
  const conditionLogo = false;

  const headingTable = [
    {
      en: "item",
      ar: "المادة",
    },
  ];

  // const data: Table[] = [
  //   {
  //     item: "item 1",
  //     declared: "declared 2",
  //     //  goodsVallue: 333333,
  //     //  originAsMarked: ".;hug;g;og;,kglgglg kllp khgkhfglyflfn",
  //     goodsDescription: "ugbl;uh;g;",
  //     iqStandard: 87246825348,
  //   },
  //   {
  //     item: "kbjkvv.jlvb/j/;lbj/",
  //     declared: ".kjg;g;ug;gjkb",
  //     goodsVallue: 333333,
  //     originAsMarked: ".;hug;g;og;",
  //     goodsDescription: "ugbl;uh;g;",
  //     iqStandard: 87246825348,
  //   },
  //   //   {
  //   //     item: "kbjkvv.jlvb/j/;lbj/",
  //   //     declared: ".kjg;g;ug;gjkb",
  //   //     goodsVallue: 333333,
  //   //     originAsMarked: ".;hug;g;og;",
  //   //     goodsDescription: "ugbl;uh;g;",
  //   //     iqStandard: 87246825348,
  //   //   },
  //   //   {
  //   //     item: "kbjkvv.jlvb/j/;lbj/",
  //   //     declared: ".kjg;g;ug;gjkb",
  //   //     goodsVallue: 333333,
  //   //     originAsMarked: ".;hug;g;og;",
  //   //     goodsDescription: "ugbl;uh;g;",
  //   //     iqStandard: 87246825348,
  //   //   },
  //   //   {
  //   //     item: "kbjkvv.jlvb/j/;lbj/",
  //   //     declared: ".kjg;g;ug;gjkb",
  //   //     goodsVallue: 333333,
  //   //     originAsMarked: ".;hug;g;og;",
  //   //     goodsDescription: "ugbl;uh;g;",
  //   //     iqStandard: 87246825348,
  //   //   },
  //   //   {
  //   //     item: "kbjkvv.jlvb/j/;lbj/",
  //   //     declared: ".kjg;g;ug;gjkb",
  //   //     goodsVallue: 333333,
  //   //     originAsMarked: ".;hug;g;og;",
  //   //     goodsDescription: "ugbl;uh;g;",
  //   //     iqStandard: 8888674564,
  //   //   },
  //   //   {
  //   //     item: "kbjkvv.jlvb/j/;lbj/",
  //   //     declared: ".kjg;g;ug;gjkb",
  //   //     goodsVallue: 333333,
  //   //     originAsMarked: ".;hug;g;og;",
  //   //     goodsDescription: "ugbl;uh;g;",
  //   //     iqStandard: 8888674564,
  //   //   },
  // ];

  return (
    <div className="mt-14  mx-auto px-6" ref={ref}>
      <header>
        <h1 className="text-center leading-none font-bold text-xl">
          <span className="block pb-5">نموذج رقم (١)</span>
          <span className="block">شهادة المطابقـة</span>
          Certificate of Conformity (CoC)
        </h1>
      </header>

      <div className="content border-2 border-black pb-5">
        <div className="flex lg:flex-wrap sm:flex-col print:text-xs md:flex-row items-center md:items-start print:items-start justify-center gap-5 lg:gap-0 lg:justify-between p-5 pb-0">
          <div className="md:basis-2/12 rounded-full">
            <img
              src={tuvlogo}
              className="lg:w-36 lg:h-36 rounded-full"
              alt=""
            />
          </div>
          <div className="md:basis-8/12 text-center font-bold">
            <h2>
              CENTRAL ORGANIZATION FOR STANDARIDIZATION AND QUALITY CONTROL
            </h2>
            <span className="block">
              الجهازالمركزي للتقييس والسيطرة النوعية
            </span>
            <span className="block">
              Pre-PInres-pImecptiornt,Intesspteinctgioan,dTiessutiing&ceCrteirfticifaicteastionf
              cPornofgorramitoyfPGroogrdasm of
              GinotoodtshIemRpeoprtuebdliicnotof IIraq
            </span>
            <span>
              برنامج التفتيش والفحص المسبق واصدار شهادة المطابقة للبضائع الموردة
              الى العراق
            </span>
          </div>
          <div className="md:basis-2/12">
            {conditionLogo ? (
              <img src={LogoCompany} alt="COMPANY LOGO" />
            ) : (
              <h2 className="font-bold text-center">
                COMPANY
                <span className="block">Logo</span>
              </h2>
            )}
          </div>
        </div>
        <div className="flex justify-center basis-full text-xl">
          <h2 className="font-semibold text-center">
            CERTIFICATE OF CONFORMITY
            <span className="block">شهادة المطابقة</span>
          </h2>
        </div>

        <div className="flex justify-between p-5 pt-0">
          <div className="basis-1/2">
            <form action="" className="font-bold">
              <LabelInput
                editMode={editMode}
                labelEn=" CoC No:"
                labelAr="رقم الشهادة"
              />
            </form>
            <form action="" className="font-bold">
              <LabelInput
                editMode={editMode}
                labelEn="Issuance Date:"
                labelAr="تاريخ الاصدار"
              />
            </form>
            <form action="" className="font-bold">
              <LabelInput
                editMode={editMode}
                labelEn="Exp Date of CoC:"
                labelAr="تاريخ انتهاء نفاذية الشهاد"
              />
            </form>
          </div>
          <div className="basis-1/2 text-end">
            <form action="" className="font-bold">
              <LabelInput
                editMode={editMode}
                labelEn="Registration No:"
                labelAr="رقم التسجيل"
              />
            </form>
            <form action="" className="font-bold">
              <LabelInput
                editMode={editMode}
                labelEn="Reference No:"
                labelAr="الرقم المرجعي"
              />
            </form>
          </div>
        </div>

        <div className="border-y-2 border-black px-5">
          <div className="flex justify-between font-bold">
            <div className="basis-1/2 py-3">
              <form action="">
                <LabelInput
                  editMode={editMode}
                  labelEn="Importer:"
                  labelAr="المستورد"
                />
              </form>
              <form action="">
                <LabelInput
                  editMode={editMode}
                  labelEn="Address:"
                  labelAr="العنوان"
                />
              </form>
              <form action="">
                <LabelInput
                  editMode={editMode}
                  labelEn="City - Country:"
                  labelAr="البلد - المدينة"
                />
              </form>
            </div>
            <div className="basis-1/2 border-s-2 border-black ps-5 py-3">
              <form action="">
                <LabelInput
                  editMode={editMode}
                  labelEn="Importer:"
                  labelAr="المستورد"
                />
              </form>
              <form action="">
                <LabelInput
                  editMode={editMode}
                  labelEn="Address:"
                  labelAr="العنوان"
                />
              </form>
              <form action="">
                <LabelInput
                  editMode={editMode}
                  labelEn="City - Country:"
                  labelAr="البلد - المدينة"
                />
              </form>
            </div>
          </div>
        </div>

        <div className="border-y-2 border-t-0 border-black px-5">
          <div className="flex justify-between print:justify-between font-bold">
            <div className="basis-1/2 w-[50%] py-3 whitespace-nowrap">
              <form action="" className="flex">
                <LabelInput
                  editMode={editMode}
                  labelEn="Invoice Amount/ Currency:"
                  className="block text-center ms-0"
                  labelAr="قيمة الفاتورة/ العملة"
                />
              </form>
            </div>
            <div className="basis-1/2 w-[50%] border-s-2 border-black ps-5 py-3 ">
              <div className="flex justify-between flex-wrap">
                <form action="" className="flex whitespace-nowrap">
                  <LabelInput
                    editMode={editMode}
                    labelEn="Invoice No:"
                    className="block text-center ms-0"
                    labelAr="رقم الفاتورة"
                  />
                </form>
                <form action="" className="flex whitespace-nowrap">
                  <LabelInput
                    editMode={editMode}
                    labelEn="Invoice Date:"
                    className="block text-center ms-0"
                    labelAr="تاريخ الفاتورة"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2 text-center font-bold">
          <h2>
            INFORMATION FOR BORDER VERIFICATION PURPOS/
            <span className="">معلومات لغرض التحقق في الحدود العراقية</span>
          </h2>
          <h2 className="pt-2">
            Transport Details
            <span className=""> تفاصيل النقل </span>
          </h2>
        </div>

        <div className="px-5 py-3">
          <div className="flex justify-between font-bold">
            <div className="basis-1/2">
              <form action="" className="flex items-start">
                <LabelInput
                  editMode={editMode}
                  labelEn="Method of Shipment:"
                  className="block text-center ms-0"
                  labelAr="طريقة الشحن"
                  placeHolder="------------------------------------------------"
                />
              </form>
              <form action="" className="flex items-start">
                <LabelInput
                  editMode={editMode}
                  labelEn="Country of Shipment:"
                  className="block text-center ms-0"
                  labelAr="بلد الشحن"
                  placeHolder="------------------------------------------------"
                />
              </form>
            </div>
            <div className="basis-1/2 ">
              <form action="" className="flex">
                <LabelInput
                  editMode={editMode}
                  labelEn="Document Number:"
                  className=""
                  labelAr="رقم الوثيقة"
                  placeHolder="------------------------------------------------"
                />
              </form>
              <form action="" className="flex pt-2">
                <LabelInput
                  editMode={editMode}
                  labelEn="Document Date:"
                  className="inline-block"
                  labelAr="تاريخ الوثيقة"
                  placeHolder="------------------------------------------------"
                />
              </form>
            </div>
          </div>

          <div className="flex justify-center font-bold">
            <form action="" className="flex items-start">
              <LabelInput
                editMode={editMode}
                labelEn="Declared Point of Entry:"
                className="block text-center ms-0"
                labelAr="نقطة الدخول المصرح بها"
                placeHolder="------------------------------------------------"
              />
            </form>
          </div>

          <div className="flex justify-between font-bold py-3">
            <div className="basis-1/2">
              <form action="" className="flex items-start">
                <LabelInput
                  editMode={editMode}
                  labelEn="Packing Details:"
                  className="block text-center ms-0"
                  labelAr="تفاصيل التعبئة"
                  placeHolder="------------------------------------------------"
                />
              </form>
            </div>
            <div className="basis-1/2">
              <form action="" className="flex items-start">
                <LabelInput
                  editMode={editMode}
                  labelEn="Containers or Truck Details:"
                  className="block text-center ms-0"
                  labelAr="تفاصيل الحاويات او الشاحنات"
                  placeHolder="------------------------------------------------"
                />
              </form>
            </div>
          </div>

          <div className="flex justify-between font-bold py-3">
            <div className="basis-1/2">
              <form action="" className="flex flex-col items-start">
                <LabelInput
                  editMode={editMode}
                  labelEn="Number and type of packages/"
                  classNameInput="ms-0"
                  className="text-center ms-0"
                  labelAr="عدد ونوع الحزم "
                  placeHolder="------------------------------------------------"
                />
              </form>
            </div>
            <div className="basis-1/2">
              <form action="" className="flex flex-col items-start">
                <LabelInput
                  editMode={editMode}
                  labelEn="Containers or Truck and Seal Numbers:"
                  classNameInput="ms-0"
                  className="text-center ms-0"
                  labelAr="رقم الحاويات والاختام"
                  placeHolder="------------------------------------------------"
                />
              </form>
            </div>
          </div>
        </div>

        {/* <Table headingTable={headingTable} /> */}

        <div className="font-bold flex mt-2 px-5 pt-3 pb-5 border-b-2 border-black">
          <h3 className="">
            Remarks/
            <span className="">الملاحظات</span>
          </h3>
          <textarea rows={1}></textarea>
        </div>
        <div className="flex flex-col px-5 pt-3 border-b-2 border-black">
          <form action="" className="font-bold">
            <LabelInput
              editMode={editMode}
              labelEn="Date of Assessment/"
              labelAr="تاريخ التقييم"
            />
          </form>
          <form action="" className="font-bold">
            <LabelInput
              editMode={editMode}
              labelEn="Invoice Value in USD (fee basis)"
              labelAr="قيمة الفاتورة بالدولار الامريكي (لحساب الرسوم)"
            />
          </form>
          <form action="" className="font-bold">
            <LabelInput
              editMode={editMode}
              labelEn="Declared Value Per Container (or truck)"
              labelAr="القيمة المعلنة للحاوية او الشاحنة"
            />
          </form>
        </div>
        <div className="px-3 font-bold py-2 border-b-2  border-black">
          <h3>
            <span className="block">
              هذه الشهادة هي لمطابقة البضائع المذكورة فيها فقط ولاتعفي المستورد
              أو المصدر من الالتزام بقوانين حماية الملكية الصناعية
            </span>
            This certificate is for conformity of goods mentioned therein only
            and does not exempt the importer or exporter from obligation with
            the laws of industrial property protection
          </h3>
        </div>
        <div className="flex flex-col px-5 pt-3">
          <form action="" className="font-bold">
            <LabelInput
              editMode={editMode}
              labelEn="Name and Signature/"
              labelAr="الاسم والتوقيع"
            />
          </form>
          <form action="" className="font-bold">
            <LabelInput
              editMode={editMode}
              labelEn="ssuing Office/"
              labelAr="قيمة الفاتورة بالدولار الامريكي (لحساب الرسوم)"
            />
          </form>
          <form action="" className="font-bold">
            <LabelInput
              editMode={editMode}
              labelEn="COMPANY USUAL DISCLAIMER"
            />
          </form>
        </div>
      </div>
    </div>
  );
});
