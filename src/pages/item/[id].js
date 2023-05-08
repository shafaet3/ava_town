import PriceComp from "@/src/components/price/PriceComp";
import ProfileComp from "@/src/components/profile/ProfileComp";
import HeartComp from "@/src/components/ratingAndLikes/HeartComp";
import RatingComp from "@/src/components/ratingAndLikes/RatingComp";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavBar from "../../components/Header/NavBar";
import Sidebar from "../../components/LeftSidebar/Sidebar";
import data from "../../data/avatarData";
function Item() {
  const [item, setItem] = useState();
  const [itemId, setItemId] = useState();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (id) {
      setItemId(id);
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
                        className="img-fluid shadow rounded"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="bg-light py-5 px-3">
                      <h6 className="lead">{item.title}</h6>
                      <div className="d-flex flex-row m-0 px-1">
                        <span>
                          <ProfileComp data={item} />
                        </span>
                        <span className="mx-2">
                          <RatingComp data={item} />
                        </span>
                        <span className="mx-4">
                          <HeartComp uniqueId={itemId} />
                        </span>
                      </div>
                      <div className="d-flex flex-row my-3 px-1">
                        <p className="lead">Price:</p>
                        <div className="mx-2 mt-1">
                          <PriceComp data={item} />
                        </div>
                      </div>

                      <dl class="row px-1">
                        <dt>Description:</dt>
                        <dd class="col-sm-8">
                          Auto upload service ready, you can use this avatar
                          within 24 hours.
                        </dd>
                      </dl>

                      <div className="d-flex flex-row m-0 px-1">
                        <input
                          type="number"
                          className="w-25 text-center border border-1 rounded border-secondary"
                          min={0}
                        />

                        <button className="w-25 btn btn-outline-info shadow rounded mx-3">
                          Add to cart
                        </button>
                        <button className="w-25 btn btn-outline-success shadow rounded">
                          Buy now
                        </button>
                      </div>
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
