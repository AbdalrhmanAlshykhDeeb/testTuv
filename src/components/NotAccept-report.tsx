import { forwardRef } from "react";
import LabelInput from "./LabelInput";
import Table from "./Table";
import tuvlogo from "./../assets/images/tuvlogo.svg";
// تقرير عدم المطابقة
const editMode = true;
//   const Logo = "https://www.cosqc.gov.iq/images/WLOGO.svg";
// const LogoCompany = "";
const conditionLogo = false;
export const NotAcceptReport = forwardRef<HTMLDivElement, any>(({}, ref) => {
  return (
    <div className="mt-14  mx-auto px-6" ref={ref}>
      <header>
        <h1 className="text-center leading-none font-bold text-2xl">
          <span className="block text-lg">نموذج رقم (٢)</span>
          <span className="block text-lg">تقرير عدم المطابقة</span>
          Non- Conformity Report (NCR)
        </h1>
      </header>

      <div className="content border-2 border-black pb-5">
        <div className="flex lg:flex-wrap gap-3 sm:flex-col print:text-xs md:flex-row items-center md:items-start print:items-start justify-center lg:gap-0 lg:justify-between p-3 pb-0">
          <div className="md:basis-2/12 rounded-full">
            <img src={tuvlogo} className="w-36 rounded-full" alt="" />
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
          <div className="md:basis-2/12 flex  justify-end">
            {conditionLogo ? (
              <img src={tuvlogo} alt="COMPANY LOGO" />
            ) : (
              <h2 className="font-bold text-center w-fit">
                COMPANY
                <span className="block">Logo</span>
              </h2>
            )}
          </div>
        </div>
        <div className="flex justify-center basis-full text-xl">
          <h2 className="font-semibold text-center text-3xl">
            NON CONFORMITY REPORT
            <span className="block font-light text-3xl">
              تقريـر عـدم مطابقـة
            </span>
          </h2>
        </div>

        <div className="flex justify-between p-3 pt-0 items-end ">
          <div className="print:basis-4/12 basis-5/12 print:w-[40%]">
            <form action="" className="font-bold flex flex-nowrap">
              <LabelInput
                editMode={editMode}
                labelEn=" NCR No:"
                classNameLabel="whitespace-nowrap"
                labelAr=" رقم التقرير"
              />
            </form>
            <form action="" className="font-bold flex flex-nowrap">
              <LabelInput
                editMode={editMode}
                labelEn="Issuance Date:"
                classNameLabel="whitespace-nowrap"
                labelAr="تاريخ الاصدار"
              />
            </form>
          </div>
          <div className="print:basis-4/12 basis-5/12 text-end">
            <form action="" className="font-bold flex flex-nowrap">
              <LabelInput
                editMode={editMode}
                labelEn="Reference No:"
                classNameLabel="whitespace-nowrap"
                labelAr="الرقم المرجعي"
              />
            </form>
          </div>
          <div className="print:basis-2/12 basis-4/12 text-end">
            <span className="block font-bold whitespace-nowrap">Page 1/1</span>
          </div>
        </div>

        <div className="border-t-2 border-black px-3">
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
            <div className="basis-1/2 border-s-2 border-black ps-3 py-3">
              <form action="">
                <LabelInput
                  editMode={editMode}
                  labelEn="Importer:"
                  labelAr="المصدر"
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

        <div className="border-t-2  border-black px-3">
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

            <div className="basis-1/2 w-[50%] ps-3 border-s-2 border-black">
              <div className="flex justify-between flex-row h-full">
                <form action="" className="flex whitespace-nowrap w-[50%] py-3">
                  <LabelInput
                    editMode={editMode}
                    labelEn="Invoice No:"
                    className="block text-center ms-0"
                    labelAr="رقم الفاتورة"
                  />
                </form>
                <form
                  action=""
                  className="flex whitespace-nowrap border-s-2 border-black py-3 w-[50%] ps-3 overflow-hidden"
                >
                  <LabelInput
                    editMode={editMode}
                    labelEn="Invoice Date:"
                    className="block text-center ms-0"
                    classNameInput="w-fit-content"
                    labelAr="تاريخ الفاتورة"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>

        <Table />

        <div className="font-bold flex items-center mt-2 px-3 pt-3 pb-5 border-b-2 border-black">
          <h3 className="">
            Remarks/
            <span className="ms-2">(أسباب عدم المطابقة) الملاحظات</span>
          </h3>
          <textarea rows={3} className=""></textarea>
        </div>

        <div className="flex flex-col gap-4 px-3 pt-4 pb-6">
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
