<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
            >Show</router-link
          >

          <router-link
            :to="{
              name: 'admin-restaurant-edit',
              params: { id: restaurant.id },
            }"
            class="btn btn-link"
            >Edit</router-link
          >

          <button
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
            type="button"
            class="btn btn-link"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Ms. Ethyl Ritchie",
      tel: "(812) 846-7656 x519",
      address: "033 Kiehn Lights",
      opening_hours: "08:00",
      description:
        "Ullam expedita voluptates ullam et sint ea.\r\nExpedita dolores excepturi tempora quasi non.\r\nOmnis qui qui nihil excepturi.\r\nRepellat debitis et illum voluptatem perferendis nisi officia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=29.431765761939666",
      viewCounts: 88,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-07-10T13:15:49.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-06-29T06:31:48.000Z",
      },
    },
    {
      id: 2,
      name: "Allison Balistreri",
      tel: "621.029.0471 x45892",
      address: "40567 Jerde Ford",
      opening_hours: "08:00",
      description:
        "Aut totam at voluptate modi error voluptatem aut.\nNam possimus non culpa et itaque aut nostrum mollitia animi.\nDeserunt voluptas cupiditate.\nId pariatur reiciendis et maiores totam eum consequuntur.\nEst asperiores dignissimos veniam dolorum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.759814349396834",
      viewCounts: 26,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-07-10T13:11:24.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-06-29T06:31:48.000Z",
      },
    },
    {
      id: 3,
      name: "Gerda Sauer",
      tel: "995.890.5814 x913",
      address: "30533 Brekke Skyway",
      opening_hours: "08:00",
      description:
        "Animi ut sint assumenda eum et dolor consequuntur. Laborum sit eius iste. Excepturi officiis sunt voluptate eum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=92.18583236992266",
      viewCounts: 15,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-07-10T22:32:15.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 4,
      name: "Austen Rath",
      tel: "612-059-3674 x5457",
      address: "1332 Grady Wall",
      opening_hours: "08:00",
      description:
        "Aut quia soluta harum quia consectetur maxime distinctio quasi recusandae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.283873428322751",
      viewCounts: 2,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-07-07T05:18:58.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 5,
      name: "Shyanne Senger",
      tel: "945.096.2423 x294",
      address: "971 Hammes Mills",
      opening_hours: "08:00",
      description: "Porro et ut voluptatem qui quia optio.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=94.61414848792951",
      viewCounts: 2,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-06-09T00:55:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-06-29T06:31:48.000Z",
      },
    },
    {
      id: 6,
      name: "Bennie Rath",
      tel: "428-831-5333 x252",
      address: "328 Ernest Extension",
      opening_hours: "08:00",
      description: "facere",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.96488402986787",
      viewCounts: 1,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-06-23T15:02:30.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-06-29T06:31:48.000Z",
      },
    },
    {
      id: 7,
      name: "Jed Hudson",
      tel: "058.101.8871",
      address: "25134 Eliezer Junctions",
      opening_hours: "08:00",
      description:
        "Quos aut corporis numquam nihil. Sed tenetur vero. Ab eligendi blanditiis expedita similique sint autem officiis. Quod officiis saepe fuga ipsum nisi provident. Porro repellendus dolorum beatae corrupti quia corrupti. Tenetur doloribus quis in ipsa dolor illum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=45.10782120502084",
      viewCounts: 1,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-06-18T11:51:41.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 8,
      name: "Izaiah Shanahan",
      tel: "1-263-753-8716 x8392",
      address: "970 Veda Rue",
      opening_hours: "08:00",
      description: "Voluptates et qui quis fuga magnam accusantium.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=34.40591279878979",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 9,
      name: "Libby Stark",
      tel: "(029) 831-3439 x429",
      address: "80323 Sarina Brook",
      opening_hours: "08:00",
      description: "pariatur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=90.37008379139739",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-06-29T06:31:48.000Z",
      },
    },
    {
      id: 10,
      name: "Arvid Shanahan DDS",
      tel: "835.168.0376 x342",
      address: "41170 Ernie Bridge",
      opening_hours: "08:00",
      description:
        "Id aliquam cumque nemo nam ducimus similique iste. Minima quia necessitatibus assumenda dolor magni velit. Nulla in at debitis et. Nesciunt maxime nihil eveniet ut dolor.\n \rNemo excepturi earum voluptatem laboriosam consectetur hic quos mollitia tempora. Earum provident quaerat molestiae excepturi quas. Est quibusdam dolores in distinctio et. Cumque nemo quisquam ex. Ipsum magnam et consectetur. Vel aut saepe voluptatem placeat doloremque deleniti sunt amet.\n \rEarum et libero accusantium veritatis quia aut laudantium eveniet. Et reprehenderit temporibus optio quod ad. Est quia assumenda modi. Fuga tempora sit natus. Earum occaecati voluptatum aspernatur non saepe quo nemo delectus rerum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=36.565553067196824",
      viewCounts: 2,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-07-06T08:10:44.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 11,
      name: "Mrs. Amanda Franecki",
      tel: "244.569.0494 x928",
      address: "74123 Octavia Mountains",
      opening_hours: "08:00",
      description: "mollitia consequatur officiis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.52720330121937",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 12,
      name: "Leonel Grady",
      tel: "242.069.4469 x925",
      address: "60057 Wolf Run",
      opening_hours: "08:00",
      description:
        "In minus aperiam explicabo illum. Sunt eos nostrum eum numquam delectus voluptatum. Ea itaque veniam fuga modi nam. Velit blanditiis laudantium maxime hic eum ipsam nemo ut. Nihil reprehenderit ut laboriosam dolore.\n \rQuisquam similique distinctio a. Est eum quisquam vel sed ducimus. Sed maxime numquam unde. Laborum rerum magni. Debitis consequatur quisquam quod.\n \rQuis consequatur impedit eos eum quis ex excepturi. Quas deserunt minima est sit assumenda dolores consequuntur officia. Dolor non rerum doloribus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.97240383246732",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 13,
      name: "Retha Blick",
      tel: "(894) 730-0412 x30389",
      address: "1893 Damion Club",
      opening_hours: "08:00",
      description:
        "Ut similique blanditiis. Id dolores id a. Ut sit inventore at dolor quia molestias itaque quia accusantium. Adipisci nihil distinctio ea omnis sequi vitae nulla. Reiciendis eos assumenda. Ipsa velit blanditiis quo repellat voluptate aliquid harum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.194349237382845",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 14,
      name: "Kim Feest",
      tel: "113-702-7589",
      address: "0930 Berge Greens",
      opening_hours: "08:00",
      description: "Qui nemo ut sed ut ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=2.93547470549147",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-06-29T06:31:48.000Z",
      },
    },
    {
      id: 15,
      name: "Shawn Spinka",
      tel: "919-433-2382 x12012",
      address: "559 Mozelle Plains",
      opening_hours: "08:00",
      description: "Est vel et quasi dolor ea id incidunt dolores.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=2.949371824857394",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 16,
      name: "Therese Luettgen",
      tel: "551-343-5354",
      address: "35037 Mayer Camp",
      opening_hours: "08:00",
      description: "Quidem ut repellendus eos sequi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.19215210100108",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 17,
      name: "Jalon Wolff",
      tel: "1-876-242-9261 x30562",
      address: "43391 Nick Summit",
      opening_hours: "08:00",
      description:
        "A corrupti et eaque reprehenderit voluptates quis rem. Ut velit vel provident recusandae. Est in aut maxime. Nam eaque ad ut pariatur possimus aut quibusdam vero.\n \rEt id non labore iusto odit et. Ea tempore quia dolorem ut a officiis. Ea rerum sint et qui tenetur qui perferendis sint animi. Quia asperiores in ad sed. Voluptas quae ut nihil est qui.\n \rSit harum animi voluptatem voluptatum ab. Ea quaerat deleniti et aut autem atque eveniet. Corporis id beatae et tenetur omnis. Qui aperiam non sed repellat nobis. Et alias quis temporibus porro. Modi quia praesentium dicta.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.84809466403291",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 18,
      name: "Gayle Mohr Jr.",
      tel: "915.777.2170 x1697",
      address: "19863 Schmeler Knolls",
      opening_hours: "08:00",
      description: "Sit similique magni.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.502185655353433",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 19,
      name: "Kraig Kling",
      tel: "562.773.1570 x92455",
      address: "3900 Demarco Point",
      opening_hours: "08:00",
      description:
        "Eos ea impedit culpa cumque debitis. Consequuntur soluta omnis repellendus aspernatur atque porro voluptatem. Cum quidem qui et ut. Dolorem rerum voluptatem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=10.692261504858646",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 20,
      name: "Margot Gutmann",
      tel: "1-086-117-8705 x4208",
      address: "3258 Schamberger Villages",
      opening_hours: "08:00",
      description: "commodi vero magnam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.204119320488076",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 21,
      name: "Camren Pagac",
      tel: "(389) 089-5374",
      address: "216 Kade Burg",
      opening_hours: "08:00",
      description:
        "Neque temporibus iusto quidem. Cumque vel iusto et qui ut rerum ab laborum dolorem. Nam sed soluta eos nostrum atque. Consequatur sint maiores quia incidunt.\n \rNon harum fugit dignissimos vero illo est est. Doloribus alias asperiores modi architecto ab. Exercitationem soluta neque ipsum aut necessitatibus numquam quibusdam aut laudantium. Nam libero natus quia quia voluptatibus debitis quae quod. Esse rerum velit ad ipsa sed repellendus alias accusantium. Animi temporibus id aliquid et iusto qui.\n \rFuga rerum quia a mollitia nostrum mollitia aspernatur eaque qui. Illo quo voluptas deserunt et dicta accusantium voluptas cumque quas. Excepturi reiciendis sit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.639004397361035",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 22,
      name: "Furman Paucek",
      tel: "643.101.3734 x296",
      address: "85956 Pfeffer Rapid",
      opening_hours: "08:00",
      description:
        "Voluptatem qui neque occaecati sapiente maxime in quas. Delectus est illum et. Natus architecto sunt. Fuga corporis aliquam voluptatum aut. Neque commodi sint architecto odio officiis sapiente culpa laborum. Autem molestiae ea architecto.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.443142286567397",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-06-29T06:31:48.000Z",
      },
    },
    {
      id: 23,
      name: "Gianni Kutch",
      tel: "(881) 096-8735 x802",
      address: "712 Bode Isle",
      opening_hours: "08:00",
      description: "in fuga consequuntur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=8.45194176321451",
      viewCounts: 5,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-06-09T06:45:02.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 24,
      name: "Libbie Parisian",
      tel: "1-792-751-9620 x924",
      address: "880 Swift Stravenue",
      opening_hours: "08:00",
      description:
        "Laborum atque aliquam placeat perspiciatis illo eligendi ullam eum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=63.06523855015862",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 25,
      name: "Darion Frami",
      tel: "(524) 910-5674",
      address: "0927 Selena Isle",
      opening_hours: "08:00",
      description: "Hic eos ut repudiandae quia natus nostrum inventore ipsam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.53710144682818",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 26,
      name: "Monroe Effertz",
      tel: "1-566-935-2952 x5598",
      address: "842 Kassulke Avenue",
      opening_hours: "08:00",
      description:
        "Consequatur iure nemo maiores aut quia quidem enim voluptatem quia. Impedit et fugit debitis et quos mollitia rerum hic. Soluta saepe doloremque eum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.12828362804475",
      viewCounts: 1,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-06-08T08:49:46.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 27,
      name: "Jadyn Grant",
      tel: "205.602.1196",
      address: "7393 Wisoky Radial",
      opening_hours: "08:00",
      description: "id rerum omnis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=70.31420803299714",
      viewCounts: 1,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-07-10T08:48:44.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-06-29T06:31:48.000Z",
      },
    },
    {
      id: 28,
      name: "Dr. Rachael Crona",
      tel: "1-862-553-5983 x25765",
      address: "8213 Schiller Points",
      opening_hours: "08:00",
      description:
        "Vel placeat in ullam molestiae nam omnis. Saepe sunt modi aperiam maiores minima molestiae autem. Ipsa ut qui rerum ea quae.\n \rQuisquam perspiciatis inventore esse ipsa nemo. Veniam ut repellendus sed et nam. Praesentium atque quia est necessitatibus omnis officiis earum non. Neque sit ullam magnam eligendi voluptas quia. Et aliquam quia totam blanditiis aut ullam vero veniam ut. Inventore sed facilis deserunt rerum quia.\n \rUt nihil quaerat illum aut accusantium eos magnam repudiandae. Reiciendis ratione quis mollitia quae quibusdam ex laboriosam repellendus. Enim corporis cumque facilis enim. Est corrupti consequuntur aliquam quia dolorum id. Omnis facere recusandae quas dolorem omnis aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.37206039819463",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 29,
      name: "Lola Lesch",
      tel: "1-043-019-2556",
      address: "034 Emard Throughway",
      opening_hours: "08:00",
      description: "Et aut ea corporis eius vel reprehenderit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.29198239520994",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 30,
      name: "Leola Hane",
      tel: "393.790.9751 x6408",
      address: "625 Jaydon Station",
      opening_hours: "08:00",
      description:
        "Tempore praesentium natus libero voluptas sed laboriosam exercitationem voluptas. Sed quia nemo officia ipsa molestias voluptas aut. Quia aspernatur quia expedita aut. Sit vitae quam quia ut quis sunt.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=49.456335435985245",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 31,
      name: "Ida Roob",
      tel: "1-899-022-9624 x5514",
      address: "1907 Haylie Road",
      opening_hours: "08:00",
      description:
        "Dolorum exercitationem similique quidem occaecati repellat. Accusamus voluptas sit excepturi rem. Possimus odio pariatur sit dignissimos eos eum vel nulla. Et velit doloribus molestias aspernatur a et sequi illum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=10.94306248367265",
      viewCounts: 1,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-06-07T10:02:16.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 32,
      name: "Calista Murazik",
      tel: "1-302-341-8646 x50270",
      address: "417 Ritchie Landing",
      opening_hours: "08:00",
      description: "Et beatae enim qui odio.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.41156611669974",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 33,
      name: "Miss Ruth Bogisich",
      tel: "385-038-4908 x19800",
      address: "775 Krajcik Lane",
      opening_hours: "08:00",
      description:
        "Architecto qui eius beatae neque occaecati possimus odio. Velit atque natus enim esse eos sed alias. Incidunt deserunt voluptates eius fuga nobis. Reiciendis eum et aut dolores ex blanditiis architecto et. Nesciunt harum eaque eaque vitae non et voluptatem beatae omnis. Minima unde illum doloribus sunt sit ipsam maiores.\n \rEt non omnis assumenda repudiandae qui. Beatae nesciunt qui. Consectetur excepturi qui nulla architecto voluptatibus error qui.\n \rEius qui ratione sint sapiente laborum deleniti dolore voluptate. Officiis voluptatibus et. Facilis reprehenderit eveniet voluptates repellat temporibus temporibus laudantium. Nobis iure amet ut possimus porro natus. Corrupti dolorem in delectus quia minus corrupti quo veniam velit. Blanditiis quos ipsam id repellendus autem dicta consectetur ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.32624298262517",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-06-29T06:31:48.000Z",
      },
    },
    {
      id: 34,
      name: "Justus MacGyver",
      tel: "595.392.3406 x521",
      address: "52675 Price Divide",
      opening_hours: "08:00",
      description:
        "Nemo minima porro libero et quae. Consequuntur voluptatibus reiciendis voluptas numquam et quidem. Vel debitis dolore.\n \rEt vel eum inventore non et. Doloribus molestiae et rerum eum repellendus animi suscipit. Soluta voluptas omnis eaque nihil quae repellat repudiandae tempora blanditiis. Quas nihil quo facere eveniet. Explicabo rerum sapiente ut.\n \rSunt pariatur totam sit optio ad nostrum consequatur. Et minus est iusto assumenda et voluptas aliquam. Porro et animi alias debitis error ducimus in debitis similique.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=26.691579551668564",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 35,
      name: "Brenden Effertz",
      tel: "043.956.0096 x369",
      address: "1448 Raul Crest",
      opening_hours: "08:00",
      description:
        "Eius enim est eaque possimus sunt. Voluptas nesciunt quibusdam sit repellendus recusandae ipsum ut molestiae vitae. Dignissimos pariatur minima est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.33520138851515",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-06-29T06:31:48.000Z",
      },
    },
    {
      id: 36,
      name: "Elisabeth Farrell",
      tel: "916.467.4187 x9874",
      address: "49579 Hoppe Brook",
      opening_hours: "08:00",
      description: "est",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.2731752287761",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 37,
      name: "Aiden Block",
      tel: "1-244-134-6945 x904",
      address: "031 Lois Canyon",
      opening_hours: "08:00",
      description:
        "Eos itaque est neque. Necessitatibus beatae odit dolor minus ut sed quidem perferendis. Maxime et accusantium aliquam nihil. Reiciendis quasi est voluptate quam impedit maxime.\n \rAperiam placeat id atque non labore assumenda. Debitis corporis iste inventore accusantium qui et. Ut quia ducimus aut error provident. In commodi eum fugit rem perspiciatis. Rerum ut iure aut nam nam aut sit libero deserunt.\n \rAliquid ut veritatis quisquam sunt cum odio. Illum perferendis et non sit est non. Neque sequi impedit in assumenda et omnis cum aspernatur. Molestiae quod sunt quo.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=8.629898286898374",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 38,
      name: "Elenor Beatty IV",
      tel: "287-287-0869",
      address: "069 Marina Haven",
      opening_hours: "08:00",
      description: "error",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=50.17859076464324",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 39,
      name: "Mr. Aida Windler",
      tel: "180-643-8274 x185",
      address: "03609 Valentine Orchard",
      opening_hours: "08:00",
      description: "Quis quod nihil.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.819606050488263",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 40,
      name: "Watson Dietrich Jr.",
      tel: "936.910.9449",
      address: "91889 Mossie Vista",
      opening_hours: "08:00",
      description: "sed",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=57.513326548020416",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 41,
      name: "Cordia Murray",
      tel: "238-198-5328",
      address: "486 Jenkins River",
      opening_hours: "08:00",
      description: "Amet eum atque qui similique.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=4.305478659724971",
      viewCounts: 1,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-06-04T00:27:12.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-06-29T06:31:48.000Z",
      },
    },
    {
      id: 42,
      name: "Zachary Schuppe",
      tel: "829.419.9365",
      address: "75319 Joanne Center",
      opening_hours: "08:00",
      description:
        "Rerum ut facere debitis omnis ipsum qui. Eaque soluta vel vel. Quas laboriosam dolore ullam voluptatibus in distinctio eveniet ea. Enim et quas explicabo iusto et sint sed dolor. Autem ipsam quaerat qui qui voluptatem corrupti non voluptate nemo.\n \rOmnis aspernatur beatae aut voluptatem enim labore officiis. Quod dolore corrupti aut ducimus omnis facere. Incidunt reiciendis velit repellat magni ut. Neque voluptatum et commodi. Ipsa natus alias illo et omnis.\n \rQuae illum quae blanditiis ipsam. Laborum velit sit ullam. Et autem culpa omnis dignissimos magni. Minima molestiae sunt aut nihil. Et nulla et. Quis rerum et nobis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.24111928126693",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 43,
      name: "Alexandria Roberts",
      tel: "091-897-2794 x072",
      address: "1583 Gutmann Village",
      opening_hours: "08:00",
      description: "Praesentium quia ullam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=46.976820317657555",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 44,
      name: "Elian Mann",
      tel: "101.094.5640",
      address: "64928 Jazlyn Bridge",
      opening_hours: "08:00",
      description:
        "Dolores est dignissimos omnis ut. Quae facere quo eaque autem et consectetur saepe minus. Rerum enim ut non hic tempora explicabo debitis quae. Error minima sed. Ad ab atque. Et ratione necessitatibus esse qui.\n \rNon hic hic nulla nisi doloribus iste. Esse magni aut unde corporis incidunt quia. Recusandae nulla quibusdam pariatur dolorem vel eos possimus asperiores quo. Aut illum velit non molestiae eos fugiat. Qui debitis corporis perferendis illum quia omnis repellat quam. Explicabo et perferendis quae voluptatem autem porro hic dolores.\n \rMaiores voluptate officia perspiciatis dolore quidem officiis. Aut aperiam voluptas at unde optio in consequatur. Eligendi est doloribus. Veritatis excepturi consequatur quidem voluptatibus. Libero maxime illo quo quia eos aut quos quia. Repudiandae quae et quo distinctio sint delectus nesciunt doloremque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=34.306294574215855",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 45,
      name: "Victor Fahey",
      tel: "1-119-607-9177 x41624",
      address: "882 Gudrun Spring",
      opening_hours: "08:00",
      description: "laboriosam aliquid porro",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.88964898009266",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-06-29T06:31:48.000Z",
      },
    },
    {
      id: 46,
      name: "Cindy Crist",
      tel: "1-983-562-0396",
      address: "79589 Hettinger Street",
      opening_hours: "08:00",
      description:
        "Quibusdam natus quia totam aliquid sit aperiam quam. Magnam in explicabo et error natus. Optio dolores corrupti porro maxime exercitationem.\n \rAliquam et culpa nihil adipisci enim vitae. Quis pariatur nihil. Velit aperiam fuga repellat tempora ducimus voluptas beatae vero. Est qui quidem et accusamus.\n \rVoluptatem commodi ratione temporibus. Earum perspiciatis laborum qui illum minus. Numquam et hic mollitia labore iste doloribus debitis cum. Cumque et praesentium sit voluptatem eos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=92.29663730247835",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 47,
      name: "Leonard Kilback",
      tel: "1-457-123-0200 x404",
      address: "0125 Harvey Plains",
      opening_hours: "08:00",
      description:
        "Eos a doloremque. Rerum aspernatur aut consequatur est minima. Incidunt a harum recusandae harum dolore consequatur atque dolorum. Non voluptatem minima beatae ad dolorem id quisquam quia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=55.5899093028533",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-06-29T06:31:48.000Z",
      },
    },
    {
      id: 48,
      name: "Lenore Welch",
      tel: "117.858.2485 x1413",
      address: "87567 Kaden Manors",
      opening_hours: "08:00",
      description: "Mollitia enim ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.486169085818677",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 49,
      name: "Derick Okuneva MD",
      tel: "180-107-4554 x79671",
      address: "437 Howell Course",
      opening_hours: "08:00",
      description:
        "Corporis reiciendis ullam beatae autem soluta dolores voluptatibus sit.\nRepudiandae odio et ut.\nUllam odio et voluptatum rem incidunt natus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.0945773557487",
      viewCounts: 4,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-06-09T07:04:08.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 50,
      name: "Darwin Weber V",
      tel: "(364) 902-8329 x8763",
      address: "24390 Kohler Creek",
      opening_hours: "08:00",
      description: "Aut consectetur aut qui quia officia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=0.797502388201643",
      viewCounts: 3,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-06-04T05:55:37.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 51,
      name: "大四囍腿庫飯",
      tel: "0289422999",
      address: "235新北市中和區秀朗路三段72號",
      opening_hours: "11:00",
      description:
        "餐點美味\r\n食材新鮮\r\n肉質Q彈多汁 而且入味\r\n非常好吃 高CP值的好店",
      image: "https://i.imgur.com/FgFHC71.jpeg",
      viewCounts: 3,
      createdAt: "2022-06-27T12:31:06.000Z",
      updatedAt: "2022-07-07T10:59:37.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 61,
      name: "特製汕頭麵",
      tel: "",
      address: "235新北市中和區秀朗路三段36巷10號1樓",
      opening_hours: "07:00",
      description:
        "自製麵條，湯頭清淡，小菜棒，價格親民，老闆多禮，從小吃到大的平民美食",
      image: "https://i.imgur.com/9Gip24c.jpeg",
      viewCounts: 0,
      createdAt: "2022-06-27T12:36:01.000Z",
      updatedAt: "2022-06-27T12:36:01.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
    },
    {
      id: 71,
      name: "小高拉麵",
      tel: "",
      address: "234新北市永和區得和路413-1號",
      opening_hours: "11:00",
      description: "用心好吃的店家，簡單樸實沒有花俏的實在拉麵",
      image: "https://i.imgur.com/ZWDLKeH.jpeg",
      viewCounts: 17,
      createdAt: "2022-06-27T12:40:18.000Z",
      updatedAt: "2022-07-07T05:18:39.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-06-29T06:31:48.000Z",
      },
    },
  ],
};

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      );
    },
  },
};
</script>
