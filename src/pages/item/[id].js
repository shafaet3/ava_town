import React, { useEffect, useState } from "react";
import NavBar from "../../components/Header/NavBar";
import Sidebar from "../../components/LeftSidebar/Sidebar";
import { useRouter } from "next/router";
import data from "../../data/avatarData";
import Image from "next/image";
function Item() {
  const [item, setItem] = useState();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (id) {
      const foundItem = findItemById(id, data);
      console.log(foundItem);
      setItem(foundItem);
    }
  }, [id]);

  const findItemById = (id, arr) =>
    arr.find((record) => record.id === Number(id));

  return (
    <div>
      <NavBar />
      <div className={"container-fluid mt-5"}>
        <div className={"row"}>
          <div className={"col-2"}>
            <Sidebar />
          </div>

          {item ? (
            <div className={"col-10"}>
              <div className="container">
                <div className="row mt-5">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="bg-light p-5">
                      <Image
                        src={item.imagePath}
                        alt={item.imagePath}
                        width={400}
                        height={400}
                        priority={false}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="bg-light py-5 px-3">
                      <h6 className="lead">{item.title}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Item;
