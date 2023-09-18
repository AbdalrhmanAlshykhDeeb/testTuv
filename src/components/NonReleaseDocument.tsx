import { forwardRef } from "react";
import LabelInput from "./LabelInput";
import tuvlogo from "./../assets/images/tuvlogo.svg";

const listEn: string[] = [
  " Following checks have been carried out with satisfactory results: ",
  "attached to this release document",
  "Authentication of the certificate Verification of the matching between certificate, import documents and goods",
  "Integrity of seals (whenever applicable)",
  "Check the condition of the shipment (no damage of overall containers, no damage of goods and ensuring that the chilled or frozen goods are in a refrigerate containers)",
];
const listAr: string[] = [
  ":اجريت التحقيقات التالية بنتائج مرضية",
  " التأكد من أصل شهادة المطابقة المرفقة مع هذه الوثيقة",
  "تأكيد المطابقة بين الشهادة ووثائق الاستيراد والبضائع",
  "سلامة الاختام (متى وجدت)",
  `التحقق من حالة الشحنة (لا يوجد ضرر بجميع الحاويات
ولا يوجد ضرر في البضائع والتأكد من أن البضائع المبردة  أو المجمدة هي في حاويات مبردة)`,
];

const NonReleaseDocument = forwardRef<HTMLDivElement, any>(({}, ref) => {
  const editMode = true;
  //   const Logo = "https://www.cosqc.gov.iq/images/WLOGO.svg";
  //   const LogoCompany = "img/company";
  const conditionLogo = false;
  return (
    <div className="mt-14  mx-auto px-6" ref={ref}>
      <header className="flex">
        <div className="basis-4/12">
          <img src={tuvlogo} className="w-36 h-36 rounded-full" alt="" />
        </div>
        <div className="basis-4/12">
          <h1 className="text-center leading-none font-bold text-xl">
            <span className="block pb-5">نموذج رقم (٤)</span>
          </h1>
          <div className="flex justify-center">
            {conditionLogo ? (
              <img
                src={tuvlogo}
                className="w-36 h-36 text-center"
                alt="COMPANY LOGO"
              />
            ) : (
              <h2 className="font-bold text-center">
                COMPANY
                <span className="block">Logo</span>
              </h2>
            )}
          </div>
        </div>
      </header>

      <div className="flex justify-center print:text-xs  pt-5">
        <div className="text-center font-bold">
          <h2>CENTRAL ORGANIZATION FOR STANDARIDIZATION AND QUALITY CONTROL</h2>
          <span className="block">الجهازالمركزي للتقييس والسيطرة النوعية</span>
          <span className="block">
            Pre-PInres-pImecptiornt,Intesspteinctgioan,dTiessutiing&ceCrteirfticifaicteastionf
            cPornofgorramitoyfPGroogrdasm of GinotoodtshIemRpeoprtuebdliicnotof
            IIraq
          </span>
          <span>
            برنامج التفتيش والفحص المسبق واصدار شهادة المطابقة للبضائع الموردة
            الى العراق
          </span>
        </div>
      </div>

      <div className="flex justify-center text-xl">
        <h2 className="font-bold text-center">
          NONE RELEASE DUCUMENT
          <span className="block">وثيقة عدم اطلاق</span>
        </h2>
      </div>

      <div className="content pb-6 border-2 border-black">
        <div className="flex justify-between">
          <div className="basis-1/2 w-[50%]">
            <form
              action=""
              className="font-bold p-2 flex flex-col justify-between"
            >
              <LabelInput
                classNameLabel="flex justify-between"
                classNameInput="block text-center"
                editMode={editMode}
                labelEn="Entry point :"
                labelAr="نقطة الدخول"
              />
            </form>
          </div>
          <div className="basis-1/2 w-[50%]">
            <form
              action=""
              className="font-bold border-s-2 p-2 border-black flex flex-col justify-between"
            >
              <LabelInput
                classNameLabel="flex justify-between"
                classNameInput="block text-center"
                editMode={editMode}
                labelEn="CoC No(attached):"
                labelAr="رقم شهادة المطابقة المرفقة"
              />
            </form>
          </div>
        </div>

        <div className="flex justify-between border-t-2 border-black">
          <div className="basis-1/2 w-[50%]">
            <form
              action=""
              className="font-bold p-2 flex flex-col justify-between"
            >
              <LabelInput
                classNameLabel="flex justify-between"
                classNameInput="block text-center"
                editMode={editMode}
                labelEn="Importer Name:"
                labelAr="اسم المستورد"
              />
            </form>
          </div>
          <div className="basis-1/2 w-[50%]">
            <form
              action=""
              className="font-bold border-s-2 p-2 border-black flex flex-col justify-between"
            >
              <LabelInput
                classNameLabel="flex justify-between"
                classNameInput="block text-center"
                editMode={editMode}
                labelEn="Exp Date of CoC:"
                labelAr="تاريخ انتهاء نفاذية الشهادة"
              />
            </form>
          </div>
        </div>

        <div className="font-bold flex flex-col p-2 border-t-2 border-black">
          <div className="flex justify-between">
            <h3 className="">Description</h3>
            <span className="">اسباب عدم المطابقة</span>
          </div>
          <textarea rows={6}></textarea>
        </div>

        <div className="border-t-2 border-black">
          <form
            action=""
            className="font-bold p-2 flex flex-col justify-between"
          >
            <LabelInput
              classNameLabel="flex justify-between"
              classNameInput="block text-center"
              editMode={editMode}
              labelEn="Containers/ packages details not mentioned on certificate (if any)"
              labelAr="تفاصيل الحاويات أو الحزم غير المذكورة في الشهادة(ان وجدت)"
            />
          </form>
        </div>
        <div className="border-t-2 border-black">
          <form
            action=""
            className="font-bold p-2 flex flex-col justify-between"
          >
            <LabelInput
              classNameLabel="flex justify-between"
              classNameInput="block text-center"
              editMode={editMode}
              labelEn="Import documents not mentioned on certificate (if any)"
              labelAr="وثائق الاستيراد غير المذكورة في الشهادة(ان وجدت"
            />
          </form>
        </div>
        <div className="border-t-2 border-black">
          <form
            action=""
            className="font-bold p-2 flex flex-col justify-between"
          >
            <LabelInput
              classNameLabel="flex justify-between"
              classNameInput="block text-center"
              editMode={editMode}
              labelEn="Number of line items"
              labelAr="عدد المواد"
            />
          </form>
        </div>
        <div className="border-t-2 border-black overflow-hidden">
          <form
            action=""
            className="font-bold p-2 flex flex-col justify-between"
          >
            <LabelInput
              classNameLabel="flex justify-between"
              classNameInput="block text-center"
              editMode={editMode}
              labelEn="Shipment details )Partial, complete)"
              labelAr="تفاصيل الشحنة (جزئية ، كاملة)"
            />
          </form>
          <form
            action=""
            className="font-bold p-2 flex flex-col justify-between"
          >
            <LabelInput
              classNameLabel="flex justify-between"
              classNameInput="block text-center"
              editMode={editMode}
              labelEn="Shipment type(full Container , Partial Container, trucks , packages)"
              labelAr="نوع الشحنة (حاويات كاملة،حاويات جزئية، شاحنات،حزم)"
            />
          </form>
          <form action="" className="font-bold p-2 flex  flex-row-reverse">
            <LabelInput
              classNameLabel="flex justify-between"
              editMode={editMode}
              className="whitespace-nowrap"
              labelAr=":الكمية الكلية"
            />
            <LabelInput
              classNameLabel="flex justify-between"
              editMode={editMode}
              className="whitespace-nowrap"
              labelAr=":الكمية الواردة"
            />
            <LabelInput
              classNameLabel="flex justify-between"
              editMode={editMode}
              className="whitespace-nowrap"
              labelAr=":الكمية المتبقية"
            />
          </form>
        </div>
        <div className="font-bold flex flex-col p-2 border-t-2 border-black">
          <div className="flex justify-between">
            <h3 className="">Comments</h3>
            <span className="">الملاحظات</span>
          </div>
          <textarea rows={3}></textarea>
        </div>
        <div className="border-t-2 border-black">
          <form
            action=""
            className="font-bold p-2 flex flex-col justify-between pb-5"
          >
            <LabelInput
              classNameLabel="flex justify-between"
              classNameInput="block text-center"
              editMode={editMode}
              labelEn="COMPANY USUAL DISCLAIMER"
            />
          </form>
        </div>
        <div className="border-t-2 border-black overflow-hidden">
          <form action="" className="font-bold p-2 pb-0 flex flex-row-reverse">
            <LabelInput
              classNameLabel="flex justify-between"
              editMode={editMode}
              className="whitespace-nowrap"
              labelAr=":الاسم"
            />
          </form>
          <form action="" className="font-bold p-2 pb-0 flex flex-row-reverse">
            <LabelInput
              classNameLabel="flex justify-between"
              editMode={editMode}
              className="whitespace-nowrap"
              labelAr=":التوقيع والختم"
            />
          </form>
        </div>
        <div className="overflow-hidden">
          <form
            action=""
            className="font-bold p-2 pb-0 justify-center flex flex-row-reverse"
          >
            <LabelInput
              classNameLabel="flex justify-between"
              editMode={editMode}
              className="whitespace-nowrap"
              labelAr=":رقم الوثيقة"
            />
          </form>
          <form
            action=""
            className="font-bold p-2 pb-0 flex justify-center flex-row-reverse"
          >
            <LabelInput
              classNameLabel="flex justify-between"
              editMode={editMode}
              className="whitespace-nowrap"
              labelAr=":تاريخ الاصدار"
            />
          </form>
        </div>
      </div>
    </div>
  );
});

export default NonReleaseDocument;
