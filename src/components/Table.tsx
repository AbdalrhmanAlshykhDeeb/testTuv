interface Table {
  item?: string;
  declared?: string;
  goodsVallue?: number;
  originAsMarked?: string;
  goodsDescription?: string;
  iqStandard?: number;
}

// const headingTable: string[] = ["ljckj", "lkchs"];
interface IName {
  ar: string;
  en: string;
}

// interface dataTable {
//     headings: string[];
// }
const Table = ({ headingTable }: IName) => {
  return (
    <div className="">
      <table className="border-y-2 border-black w-full print:text-xs">
        <thead className="align-top border-y-2 border-black">
          <tr>
            {headingTable?.map((item, index) => (
              <th
                key={`table-${index}`}
                className="border-x-2 border-black first:border-none 
                last:border-none"
              >
                {item?.en}
                <span className="block">{item?.ar}</span>
              </th>
            ))}

            {/* <th>
              Item
              <span className="block">المادة</span>
            </th>
            <th className=" border-x-2 border-black">
              Declared Quantity/ Unit
              <span className="block">الكمية المصرح بها</span>
            </th>
            <th className=" border-x-2 border-black">
              Goods Vallue
              <span className="block">قيمةالبضاعة</span>
            </th>
            <th className=" border-x-2 border-black">
              Origin as marked on goods
              <span className="block">المنشأ المؤشر على البضاعة</span>
            </th>
            <th className=" border-x-2 border-black">
              Goods Description (designation/ brand/ model)
              <span className="block">
                وصف البضائع (اسم البضاعة/ العلامة/ الموديل) تاريخ الانتاج
                والنفاذ اذا تطلب ذلك
              </span>
            </th>
            <th className="">
              IQ Standard No. or TR
              <span className="block">
                رقم المواصفة العراقية اوالمتطلبات الفنية
              </span>
            </th> */}
          </tr>
        </thead>
        <tbody>
          {/* <tr>
           
              <td className="text-center border-y-2 border-black">
                  {index + 1}
                </td>
                <td className="border-2 border-black text-center">
                  {item.declared}
                </td>
                <td className="border-2 border-black text-center">
                  {item.goodsVallue}
                </td>
                <td className="border-2 border-black text-center">
                  {item.originAsMarked}
                </td>
                <td className="border-2 border-black text-center">
                  {item.goodsDescription}
                </td>
                <td className="text-center border-y-2 border-black">
                  {item.iqStandard}
                </td> 
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
