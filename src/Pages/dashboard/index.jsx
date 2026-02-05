// import { useNavigate } from "react-router-dom";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
// import RecentActivities from "../../features/dashboard/recentActivities";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const dauData = [
  { name: "Mon", users: 120 },
  { name: "Tue", users: 210 },
  { name: "Wed", users: 180 },
  { name: "Thu", users: 300 },
  { name: "Fri", users: 260 },
  { name: "Sat", users: 140 },
  { name: "Sun", users: 170 },
];

const Dashboard = () => {
  // const navigate = useNavigate();

  return (
    <>
      <div className="main_title">
        <h1>Dashboard</h1>
      </div>
      <div className="stats_boxes gap_m">
        <a href="/manage-users" className="cards">
          <h2>24</h2>
          <p>Total Products</p>
          <figure className="sucess">
            <img src="/static/images/bag.svg" alt="Users" />
          </figure>
          <div className="rating_box">
            <p><span><ArrowUpwardIcon/>+8</span>this month
            </p>
          </div>
        </a>

        <a className="cards" href="/manage-users">
          <figure className="active_order">
            <img src="/static/images/active_order.svg" alt="Active Users" />
          </figure>
          <h2>12</h2>
          <p>Active Orders</p>
            <div className="rating_box">
            <p><span><ArrowUpwardIcon/> +5</span>this month
            </p>
          </div>
        </a>

        <div className="cards">
          <figure className="warning">
            <img src="/static/images/reward_icon.svg" alt="Revenue" />
          </figure>
          <h2>1,247</h2>
          <p>Store Views</p>
          <div className="rating_box">
            <p><span><ArrowUpwardIcon/>+23%</span>this month
            </p>
          </div>
        </div>
        <div className="cards">
          <figure className="blue">
            <img src="/static/images/star.svg" alt="Revenue" />
          </figure>
          <h2>4.8</h2>
          <p>Customer Reviews</p>
          <div className="rating_box">
            <p><span><ArrowUpwardIcon/>+0.3</span>this month
            </p>
          </div>
        </div>
      </div>
      <div className="grid_sc gap_m">
        {/* Daily Active Users Chart */}
        <div className="cards table_card">
          <div className="cards_header">
            <div className="left_s">
              <h2>Last 7 months performance</h2>
            </div>
            <div className="right_s">
              <p>
                <span>A day</span>
                <span>A week</span>
                <span>A month</span>
                <span>A year</span>
              </p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dauData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#D3B88C" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="cards table_card">
          <div className="cards_header">
            <div className="left_s">
              <h2>Last 1 year performance</h2>
            </div>
            <div className="right_s">
              <p>
                <span>A day</span>
                <span>A week</span>
                <span>A month</span>
                <span>A year</span>
              </p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dauData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#D3B88C" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="cards table_card mt_20">
           <div className="sub_hd">
              <h3>Recent Store Activities</h3>
              <a href="/">View All Products</a>
            </div>
        {/* <RecentActivities /> */}
        <ul className="order_dtls">
          <li>
            <figure className="green">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                {/* <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  // d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                ></path> */}
              </svg>
            </figure>
            <h6>
              New Order <span className=" d_block">Traditional Abaya</span>
            </h6>
            <p>
              {" "}
              2 hours ago <span className="green d_block">+AED 150</span>
            </p>
          </li>
          <li>
            <figure className="yellow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                ></path>
              </svg>
            </figure>
            <h6>
              Product Viewedr{" "}
              <span className=" d_block">Silk Scarf Collection</span>
            </h6>
            <p>
              {" "}
              2 hours ago <span className="warning d_block">23 views</span>
            </p>
          </li>
          <li>
            <figure className="purple">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                ></path>
              </svg>
            </figure>
            <h6>
              New Order <span className=" d_block">Traditional Abaya</span>
            </h6>
            <p> 2 hours ago </p>
          </li>
        </ul> 
      </div>

      <section>
        <div className="table_group gap_m table_card">
          <div className="cards store_list">
            <div className="sub_hd">
              <h3>Top Selling Products</h3>
              <a href="/">View All Products</a>
            </div>
            <ul className="order_dtls">
              <li>
                <figure className="green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    ></path>
                  </svg>
                </figure>
                <h6>
                  Traditional Abaya <span className=" d_block">45 sales • AED 6750</span>
                </h6>
                <p>
                  {" "}
                  2 hours ago <span className="green d_block">+AED 150</span>
                </p>
              </li>
              <li>
                <figure className="yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    ></path>
                  </svg>
                </figure>
                <h6>
                  Silk Scarf Collection{" "}
                  <span className=" d_block">32 sales • AED 2720</span>
                </h6>
                <p>
                  {" "}
                  2 hours ago <span className="warning d_block">23 views</span>
                </p>
              </li>
              <li>
                <figure className="purple">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    ></path>
                  </svg>
                </figure>
                <h6>
                  Handcrafted Jewelry <span className=" d_block">28 sales • AED 6160</span>
                </h6>
                <p> 2 hours ago </p>
              </li>
              <li>
                <figure className="purple">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    ></path>
                  </svg>
                </figure>
                <h6>
                  Designer Handbag <span className=" d_block">22 sales • AED 4400</span>
                </h6>
                <p> 2 hours ago </p>
              </li>
                  <li>
                <figure className="purple">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    ></path>
                  </svg>
                </figure>
                <h6>
                  Pearl Necklace<span className=" d_block">18 sales • AED 5400</span>
                </h6>
                <p> 2 hours ago </p>
              </li>
            </ul>
          </div>
          <div className="cards store_list">
            <div className="sub_hd">
              <h3>Recent Orders</h3>
              <a href="/">View All Products</a>
            </div>
            <ul className="order_dtls ">
              <li>
                <figure className="green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    ></path>
                  </svg>
                </figure>
                <h6>
                  #ORD-001 <span className=" d_block">Fatima Al-Zahra • Traditional Abaya</span>
                </h6>
                <p>
                  {" "}
                  2 hours ago <span className="green d_block">+AED 150</span>
                </p>
              </li>
              <li>
                <figure className="yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    ></path>
                  </svg>
                </figure>
                <h6>
                  #ORD-002{" "}
                  <span className=" d_block">Aisha Mohammed • Silk Scarf</span>
                </h6>
                <p>
                  {" "}
                  2 hours ago <span className="warning d_block">23 views</span>
                </p>
              </li>
              <li>
                <figure className="purple">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    ></path>
                  </svg>
                </figure>
                <h6>
                  #ORD-003 <span className=" d_block">Mariam Hassan • Pearl Necklace</span>
                </h6>
                <p> 2 hours ago </p>
              </li>
                 <li>
                <figure className="purple">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                   >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    ></path>
                  </svg>
                </figure>
                <h6>
                 #ORD-004 <span className=" d_block">Noura Ahmed • Designer Handbag</span>
                </h6>
                <p> 2 hours ago </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
