import { useMemo, useState } from "react";
import ItemCard from "../components/Card/ItemCard";
import NavBar from "../components/Header/NavBar";
import Sidebar from "../components/LeftSidebar/Sidebar";
import Pagination from "../components/Pagination/pagination";
import DropDown from "../components/SelectOption/DropDown";
import itemList from "../data/avatarData";

let PageSize = 12;
function marketPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return itemList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div>
      <NavBar />
      <div className={"container-fluid mt-5"}>
        <div className={"row"}>
          <div className={"col-2"}>
            <Sidebar />
          </div>

          <div className={"col-10 customBgProduct"}>
            <div className={"row productHomeCard p-0 m-0"}>
              <div className="d-flex justify-content-between customPadding">
                <div className="mt-4">
                  <h1 className={"headingTitle"}>All items</h1>
                </div>

                <DropDown />
              </div>
              {currentTableData.length > 0 ? (
                currentTableData.map((item, i) => (
                  <ItemCard key={i} uniqueId={i + 1} data={item} />
                ))
              ) : (
                <div>No data available</div>
              )}
              <div className="col-4 col-sm-4 col-md-8 col-lg-10 col-xl-10 p-0 mx-0 my-5">
                <Pagination
                  currentPage={currentPage}
                  totalCount={itemList.length}
                  pageSize={PageSize}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default marketPage;
