'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "db27b94e563bd511acac95db84e540b8",
".git/config": "9ea4f60415f0f43cdaf350f66a7ea269",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3eb9cfc58af709fbd3603acad614a795",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "282fbf87bc5c84bcfa2f41be45feb199",
".git/logs/refs/heads/main": "2dfa5f6e10e0b16e47009ac463f7dcff",
".git/logs/refs/remotes/origin/main": "c121fff7b74758fe17e0f153d249a921",
".git/objects/03/3738ffa49004f20060c239e8968afc4b82b59d": "1e2f52c62f091b9228bede5f42c34c52",
".git/objects/04/bb3364735889b399d428965f0cef1fa83af03d": "d9b226f4416088c2dab2382eebb9e810",
".git/objects/04/fb7879ed901cbb8ac5894e0199605fb181eee3": "bbb536a4df017f8a5f6831b7fe012d20",
".git/objects/05/9ebab023059a0588cf66641e9d93ae5e306036": "b74ac8e7516dc518db101711afc014dd",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/07/5846e548f345617259b7fd232301345cef0bde": "fd07ea590ed2d4b7a8595947c868efc4",
".git/objects/08/f4887316b00fd45445baf71ad84a4f11f41bc3": "34794272640e4e79f7732889bbab6432",
".git/objects/0b/98f22fb258c3f8df838843d66955835d65f8cf": "3afeb83df4969a4b07dd52d1a7f27bbe",
".git/objects/0d/db9a59fbedd08e4477e451a7422f31a6a71a04": "45daf80de01f3cc9baad95bffd572201",
".git/objects/0d/ec38dec4a3f8d0b4f839999385f26c5722b491": "7cd50f26fe4eb3ba0329b4dff0e07cdf",
".git/objects/0d/ed209eb30946b5dca87f3ac92dd06979d6288a": "72fe597d930eeed919a2cc2687e8b54b",
".git/objects/0f/a4b834e93a2086d856792941aad7e4b7b44eec": "b524a50f66d13e36aefa54fe5466e7b8",
".git/objects/0f/f37c80311dcb94910933748edc29ee22e5f987": "980714638c11a41799bbb1e5df7d9c5c",
".git/objects/10/05b2812df43fc6575ca52b16f81d2b18f1f40f": "9935c53cbd5486e0d3c8dac54c0cf2c3",
".git/objects/10/24b50535571b17e5c5ea1284b3cc88310084e0": "16116452215878ac900e166a10a32299",
".git/objects/10/5e20c89d72344f1ab21abd35400fd19c0ce76d": "537b52e590426d5be0b1657a8b46daca",
".git/objects/11/009b242fa4c5399977e7885ece8965994a0570": "94cb7c97b7b59a3455405d7394a93057",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/83683c85cea3733117a409463690e0c432ae12": "6fdb3dbed2ecf3f7276361e32dd62a6d",
".git/objects/14/d08d522f4a11c52644147e586c68ae089a006e": "204bedf72ae5398849399a8846f73a6f",
".git/objects/1a/b5b8d6771c0430458e4f41b2e37722840de7be": "9a6aad11f616b80efcf29c9cc6d9b0af",
".git/objects/1f/4b813a815eba9376e632ba419b7e31d9e62dff": "71d4dbec84e7e7e782af377f91a43a06",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/f6779ce92993a6e87d9719cec5ea3406b324d5": "3ea631d0bdd69dfdea1fe4fadbac4d89",
".git/objects/27/7fecfe9b3348dcef2a14055a3cd2d743926cf1": "96a311b311515d9757262ff314b2aa84",
".git/objects/2a/10af1f1149e75addc346d41b49ed1b30d3749d": "06e429b1fc6e07af48767d1c3882bbd0",
".git/objects/2b/64ecec9e2f84f6e67daa987d2971cc4ef056d2": "569307ef31c143500303ee6888de6352",
".git/objects/2b/cb270e8a656f4704f7379eeb34b583123578d3": "7a9a599646507de08ed84fa648f98744",
".git/objects/2b/ff18c0b2b3af716d6c8d082d80a1cb43d2d776": "096b8c562e0143f3b0a697806f566b8f",
".git/objects/2d/55fa799128f9438d4d756a794b9f3cdc3c9704": "a0bf12f6a32e41644f3b22e912505c33",
".git/objects/2f/d6582903a6fb2bdb5892609a01f9481ff85d26": "1ee8396ba55bec276f2255cb4a4ab03d",
".git/objects/30/ee50bb60b49e67234fe95ad42b2a17958fc908": "11bfc47fce1586884dabfe98f06beb04",
".git/objects/32/7410bc137402d900e66b12877adf8a79811625": "987df3d46beecf1809bde483ba03aed2",
".git/objects/32/c94fdba92097723bb720db60e6b2dda2c4a6b8": "ce8b2c493a2399f20845caf62f41a37d",
".git/objects/37/1d494bc3ea79b53d17bbf4172fedd2add057c6": "8c409d4a18fd0ed37d252cf56f52df5a",
".git/objects/37/3aa717b07d1d00631b5f779b02b7f17749c72b": "2130495f07776f1092408e3c04bd294a",
".git/objects/37/5732f89aae731ad1fa94b39418017f5c89480d": "e7ed76ef6f79b24dac19cc8119178173",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/07adabed5d464c25268389051ed20b882b59f0": "b130cb75ac0e746a3234d9b299005d0a",
".git/objects/39/893ffb4b41f80e9aee62bcc3236ef26213dd5b": "4c916b49e662d29c668b139668471946",
".git/objects/39/a241dd376b5d5346146881cc86b8a99aac3302": "192bcd5ca71d20355c049cd007931c54",
".git/objects/3d/d97538c7014432923bf606464fa15d5efdfb77": "1018bda83b5ff7fecc8ae719c1746125",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/47/a59af4139259de49bceaf1717dbca5a1466474": "a62e0ba08ce42cdcd56cfeb314b66883",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/026140e3ea82d73f2cb1e312e530e3bdddc2d8": "c47adb85f0b44db4c52a26676ab93553",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/8895256957ca6bfa2ca100b18fe2df00eefb9c": "496f0ea4f99bec9a3b635c0e0ecabb42",
".git/objects/4d/48a2b9b8e0ddf8e2d3ff2c5264bd65a3fa97d0": "a9c1cc66bcfac13a1784a20ddd88b27a",
".git/objects/4f/141a58cc4616796b65183b0de45216f859add5": "fd57446ec39696b744a7441f6dd7c379",
".git/objects/52/348bdc264087606226d0ec23d499c3a565b871": "e3bfcc75c546c0ad7ae9327997b9c12a",
".git/objects/52/a7f92892cd0e34445122fb5805752cccf5d064": "93f7c3b3f9c05cb2599b459b73980ec3",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/1dc2e219e626b1931ed0ccd013b9438ff6665c": "7845b20c8739a4e2f1644c88ae6812ab",
".git/objects/57/8ffc38e206aa5bb2f4265d1c7477e749098f24": "b1ed51ebf23ea48d67a19ce3d88ab994",
".git/objects/5a/661707ff602cb7eb27f0125484d9b71f506c86": "bfefec3204e7ef7d70212ea3de04bd8b",
".git/objects/5c/5692b3320e204f9725c86cedd67ff6ec1a2e78": "f33c3732dd776251ec2fcac39283065d",
".git/objects/5d/21f0e2073716dd288149c00529a8b440b68f66": "99fb3b3846bc342f2b68587f7241884e",
".git/objects/60/c071fdaf19abdd481eeb533f4de166ff4f655b": "2cc9ae0246d961438e3d2752d684e027",
".git/objects/61/004a0162291f3819c7fca9d4c99cffcde3fcb0": "843029d276f839f83cb46b9d3d81725e",
".git/objects/62/e1d2d8072d7da3f040d53494c3dad41e274aa8": "9782a622db7a91b5fc23b46ac797fa2f",
".git/objects/63/3297870199387551e43b407ce3f6def925e707": "f24bfeb6ec8f3ba2bab8ff070aed3951",
".git/objects/65/6208e4f1008529e25cb2324637750ec3d5be7c": "6ff75487c207681067be12ddd113d7b5",
".git/objects/67/f1a340d02a713a1065e77f8fd0e8de79d93561": "4955839cb28b2adcba0d7ae639f52a5b",
".git/objects/69/6ff9dac80b3502ed5f740233f8db3cec8290c8": "1f4e0e9ec5d585abf306f51a0138b92a",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/e9ffb2619f6b05c67770e2eea40624557bfc79": "f5e195cbccc06212443286763322eafd",
".git/objects/6e/8ae7d4e7eeb410727ab1642613a0ecc57c44f8": "9393c8dd34208df7706f249b4bd0c71d",
".git/objects/6f/e0f7aaab6f58acd4db9f21c63aee0c57e6c6a6": "af67b7bb5984fbd0441f5f90f07f66f7",
".git/objects/71/2c366c6ef14c5e51156fc997b9c18299bfe449": "205c6c98042b706b46df84916adbc23c",
".git/objects/71/49ac891f5759b95f688a796d0d4ce1128c3995": "e56fcfd80799b14ca411f024dbac5fc2",
".git/objects/71/b13ec4489f38993edaa7962bb1d9dfcf397bc1": "0142ba37f6a542b516da43ca0ec18059",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/64c8ce2c6f17a1df58d94676d6a10a61b9c3fc": "861c256973a35b374fd98c6938321bd1",
".git/objects/76/9e30596fafa0a25b4fb0a9fc1bf3cb6f227329": "37739232137d514f5462a04f59ffcedd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/7aae8088e63ac3d78a4d5c66c16fd7fb6940c8": "819c06a0dc6259e0203c07ae991f86c1",
".git/objects/7b/a568bac3b761b526f470fede44ace73d549bbf": "c7f179ff4bcc54d540066a308fdf9f44",
".git/objects/7b/ab24887568a3650c1b8f5657888f71ad045376": "3fd427b6cc03f94f1a0d2a047c6928b3",
".git/objects/7b/c9466f6428a81e8599b235c0d8df42ca3912dd": "51e93130f33867ac056d23ed82918462",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/81/473645c04c1d14b06fd2f5ba56a36326c89e8f": "6a42d9f37c73ef050f621615e36e8282",
".git/objects/82/8975a79ad7a437bef77bcd650a377b0f1d218c": "8dacc2de29845e1e0b12bfc3406dee43",
".git/objects/82/fb7bac27b0f933a89ffe5d90d8ec546b4baea3": "2e1b1e500da4925bc5fde07b3107798c",
".git/objects/84/fc7152f44d0632bfbdc2e26b1daf578edc756f": "187230bf7d4342c1e390e9e551eff9b9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/9abef38a67edd91336848c351c8fdd8260548a": "b5ff3ee3f75f110458a3e72e30acb3ff",
".git/objects/8a/46807747671484008a69ff852945f467193660": "2154a695b81b555081e378ad93bb29a5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/542de7bc98fd6f9a0a239c2a3aa539ef715881": "e1d3b2f5e3ca701ff0b9537e0d6c9ba2",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/06a8240a7ff3762ee0013e332c0e6a4a64829d": "1e68ba4872271b28e18bff4a873720d1",
".git/objects/8f/15b8ea54734bca33e0c6666558a94e2ea569d8": "35c6a5bc304c884d67f08904f268dd50",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/91/adfa961449c0fd7235b6e76b3e20841db31bcb": "963207fcc6a4b04fa5a532bf5f1d79bd",
".git/objects/91/e2a172c064cb7372f75a35f01a1cdbe7ecdb70": "0a47dcf26d07c7bcba7646b5329f27f3",
".git/objects/92/0e0c0761dc413487295273aac8c74623ee76b2": "8cfc4ccd894edb6c891d733750dca2bb",
".git/objects/93/5b49d84c3a4d940b5e545bf0bf22fdf0340fee": "c2d20a76c677bd5b0e525ca72aacee08",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/95/ceee6dbfd9a6cf23bac8f4d6116ed1baa8d670": "a5a763688cc777e865533b5aa5c52e98",
".git/objects/99/447bd4a096fa6c828f49db76bbff3dc8ef3ca2": "407c31366090ea7d39f0e4390dd62a1f",
".git/objects/9b/297d216869c0973d984821544733890a9d08b0": "7c37151cf095428133731707965bce67",
".git/objects/9b/ebfa0019f53f1436c8482d15f8f49f844d77e3": "14e017eb609558664df228e42e972f86",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/75db0e8bc688a0673d89080bbb58f66974e295": "d93487bcdf727db0ea32d80ccaf349ea",
".git/objects/a9/5898d423f1867a579f56ab6fc2929d631bdca6": "969e4c5d5e7166df1551c3a904580b51",
".git/objects/aa/55fe8a4a37493eb947f6e57061a0b05187dac1": "56ca0058a52f3c7e8f0177efbb5cd2ab",
".git/objects/ae/6c8fbe5b1953f3cf7ad221fd65b865dd7cd3cb": "aec0aaf50fd4504ce9729c69629180f6",
".git/objects/b1/3b7c4f4527539ea695322bd70a048a46f7b8b9": "1541f92e925fcfd4482e17519328fdf6",
".git/objects/b1/4b6487ce373bc6764f73a0e18e239c71b0124f": "4e9688cb9b42e120cfddccc49f5f9509",
".git/objects/b3/3656c301a6912273b09b7ceaa6164facaad32d": "b71c46d27805f9354c9322f26a9d6246",
".git/objects/b4/43ab3def869b24ab0bd7f65c1479e801c9d685": "a83d0c4ed8a624abaf7a8afedbc59cbe",
".git/objects/b6/bb09bbbc325da868b9ca34c6a8c5bca2914a98": "30f2e06e62e1753284c4d6ed7f72c5c4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/46916e20f2d53e81831988b3fd9672670b62a9": "6fbbb5b665cde71591ca6ab581e29b80",
".git/objects/ba/b245d4a9acc9b9c05ec5852240b787e66888ad": "a2e9740d0aad7bbe88111061cee7d033",
".git/objects/bb/c6ab01d9b6a4e50072cdd01919cdb5b97671d0": "bfd86771376706c25010c70b399d64f8",
".git/objects/bc/0ec2b8e231406807368fb4a240ed651bf7b7b0": "26c98fb4d0231731eca669b243b02173",
".git/objects/bd/4a7d84ec42d424555f0e03f6048158bc7fd309": "61691f48d665cea2834119bda1b185ca",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/bf/f8ebe46e10eb4f2c123aa013142a0b938c3f7f": "115b0a536eb850e9a47edacbe9b57054",
".git/objects/c4/4aa0d2b453ae27367c3f832f54b80d5a8a8cef": "ab1cbf21dd7a61b4b27dc71a7a965bff",
".git/objects/c5/5e35f29c5a87d921f8d03490f012a5353a3dbc": "0955f1814c267b66785f6ee2222050d1",
".git/objects/c5/bb9fcefe486d78466757a918064e2fe387993b": "acc69df2c528a7b5135c810c9227b91d",
".git/objects/ca/554a4cc32ed81eafdd9af329320d35a4277a3c": "744b90c9fea57010213ac328b8941119",
".git/objects/cc/f02fd40c10c7a59a88a35b34a7f7b0073d36fd": "657e8d9ccb85740093ecfd4a7bdf2c54",
".git/objects/cd/b38efde320b01e909db3fa30baa9469320d706": "896f872f1a1df4442d07078c07b36326",
".git/objects/d1/04bf3c6bbcfb92c197ad4a2a5628fd12093cbf": "86f774dd232b5d167b2aeadecf3965d6",
".git/objects/d1/2b422683cbf08e92eec38bffd6ea34f4f90bf8": "b3eb46454d20c0a11198ed2be5435ae1",
".git/objects/d3/c94c91699ea2dc5f8d686b2ecc060d993bf93b": "c816c67f9572455358173e8dee16236c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/df7462db70e597f8fbb34fc1863a81fb066360": "0afab0821cd8b02d0ba008623dc9927f",
".git/objects/da/85ae0d2b1965d35e8996346eb708eed8465532": "f7b3dd4132527ea0d4b89ca819602931",
".git/objects/db/55a5d9ae0121f4cda38a44065524e21b8e01b9": "2105bc7710221bbdbaaf35e994543c72",
".git/objects/e0/d532e931f5c22f14978d01fccb36ea0d75fb14": "6edd6d464c1bf46287c2b54ba989c136",
".git/objects/e2/fc111e7dfdbf63b03a1157702130af1f5fc644": "1ec0b0c910e26b04668b2eddd00ab845",
".git/objects/e3/3c417969fe2351a03948b9f2ca2b677cb183e1": "864e0390c63516cd88787b2ad724e7e5",
".git/objects/e3/5742f8665dfdc171187b5fcea6803e6a100880": "1e3c949ce28d10fc3a44939a75c75a39",
".git/objects/e5/0a2911ef6deb2d89c3221cc16b9e353b0afb8d": "78a4fb22cf45235000efa30bc0795268",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/dcbe5190bb156fe565502489a59cd9ad519568": "0088e60976aa19ef2ae816e67a1fad56",
".git/objects/ea/ec0627ddd0b7c847a17f55adfa18c0e2758ab2": "afda81907bc0caa99176c1a291eef47a",
".git/objects/eb/700914fa059538f50f31f170b8701ffd0ca448": "26256de631fdc57c1cf7d2f13ba7c288",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/500a176dcc9b0cf0202ca1e4bd077366581b79": "31641fe9040f79198f45cc400562bbc1",
".git/objects/ed/b6a1d748c2240b0d05bc765af1af8162214d10": "f83fa891b44c24150f02343820cce8b2",
".git/objects/f2/849a2800d928be5c86a425f92514b53b101944": "e79c1c14afa896bebb8942fc91d76e19",
".git/objects/f2/9e95b9c8c0aa01ec422d03864e1cd9041cdade": "5b0a11237643dd63bbe7ff31685f50bc",
".git/objects/f9/271fcde46986d7878bdca86c622549d8d73125": "ea36ed95825aff38c15f60c9abe175de",
".git/objects/f9/f33565fd1756268c3c4ffc8c969f292d3897a0": "69ed40ae4806a74d243b9b33fda78a03",
".git/objects/fb/03fcc8696044f7ba8930d0b2c5d588e245d72b": "2b40ba2ddedb47f6fa1eb9c299ab3da1",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fc/f5d1dffcf9a2acdb9673cf63dfc80d7624dd55": "f702c55089fbcdb6c22d46cc88887994",
".git/objects/ff/4233a6fbbe8d94b5d4a40dbe4870384a4f0035": "6f8c70acde3846a6505992e9b1c5fdbe",
".git/objects/ff/5bb701b80731bd4d96920b4dd4ebd91e6d3701": "d9068b447f2c1064a2c9561d724cae85",
".git/objects/ff/f43fb52ebe866849e8b78b14f6910d00353bf0": "3222cc9d0e66f3dce369949feb710001",
".git/refs/heads/main": "a6ee507edb460fa05c6e29f8514ce58d",
".git/refs/remotes/origin/main": "a6ee507edb460fa05c6e29f8514ce58d",
"assets/AssetManifest.json": "39e3d19ef689220eb7e9df3e2d744fab",
"assets/assets/bulutlu.png": "304d5413ebba4eae9516e37a0f0383e3",
"assets/assets/gece.png": "2b4bdce325ac90f30a233fe85122f8c7",
"assets/assets/gunesli.png": "612a621e4d664136a7b64b2375f42c09",
"assets/assets/topImage.png": "1bb9f8b587df8f3d716fb5c3325a6879",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "4be5b17d6b528b8fb027537027efcd75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/resimler/abant.png": "de9e24e7ba1aa14bbe5e811ddba5c5f2",
"assets/resimler/abant_k%25C4%25B1s.png": "30f612b9f4eab30a47b1fa7fd80a42f0",
"assets/resimler/abant_ust.png": "5c3f7fe2fc93439f996da8a24e235b10",
"assets/resimler/agr%25C4%25B1%25C4%25B1.png": "6718afa74f2ec387cf51f79ac50871d2",
"assets/resimler/akdeniz.png": "44dd9a3b6131b379ddd1ba536970a470",
"assets/resimler/alanya_kalesi.png": "5f833e2e0032e5566988325eea4b2781",
"assets/resimler/an%25C4%25B1tkabir.png": "2f78f9aca62d320b88212aae93d4773e",
"assets/resimler/apollon.png": "118b4c81b5ee80b5d7771b3ff9b9935f",
"assets/resimler/apollon_heykel.png": "e25a9247bd16a0def1be07125f7e4758",
"assets/resimler/apollon_tapinak.png": "7919ba6b706e160e4afebd1bb688b20c",
"assets/resimler/asas.png": "0f45abd650eb2d6941dbaf360df7e72b",
"assets/resimler/aspendos.png": "1338ba52f18784999b5c1a9bf8af2639",
"assets/resimler/aspendos_%25C3%25BCst.png": "06288158cadf7589cb130ecfc1fa95e9",
"assets/resimler/aspendos_yan.png": "547007b8c180996f8beb60da7fd111d2",
"assets/resimler/ayasofya.png": "e22faf2b85cf0fe8174ebeb76fa8d389",
"assets/resimler/ayasofya_camii.png": "f4a39d58a12720f76457a7d5681758e9",
"assets/resimler/ayasofya_ic.png": "b94d2d91dca3a3aac86b80791dd4b842",
"assets/resimler/balikligol.png": "8f888ef534ecbb1b4354f0cdaa40aef0",
"assets/resimler/balikligol_dis.png": "07748939b1bb3aeb73022b29e3fcd658",
"assets/resimler/balikligol_gece.png": "d79ffaa03af33fc03428af7310ce0a0c",
"assets/resimler/balon.png": "a3672e1f9be2bcb512365a9b693b265a",
"assets/resimler/bandirma.png": "c5d4e5143e7a3f1736ac456ca1649b57",
"assets/resimler/bandirma_dis.png": "d14917d23df726ecf63bd2a0ba52cbc0",
"assets/resimler/bandirma_ic.png": "1eed98e0dd3682d6ccf1329f63e512de",
"assets/resimler/belcekiz.png": "a0d906aa21af81b25158675f0c108082",
"assets/resimler/bodrum_kalesi.png": "23bed9ce76d3704954793765305949bd",
"assets/resimler/bodrum_kalesi_uzak.png": "fe7ffb39acb8ba56f4c5658aedcabce4",
"assets/resimler/bodrum_kalesi_yan.png": "4e1e9bba2cc75a01ae7f9e5dfe40069c",
"assets/resimler/bolge.png": "b73e1e0fa0d06b7e378ec62d81461ab3",
"assets/resimler/celsus.png": "b457401b475db881b76a3b2228a3ded0",
"assets/resimler/celsus_eski.png": "c9d33f7a69c39c42b7f2711e948644c4",
"assets/resimler/celsus_yan.png": "e188021fa015c382b7420166578f6dd7",
"assets/resimler/cifte_minare.png": "963b4ebab458059f61563ea699cc40a8",
"assets/resimler/cifte_minare_gece.png": "c7425b15583fe81fc4737384d352eb8f",
"assets/resimler/cifte_minare_ic.png": "ccbc82c79dd09aa1ef2f3d9d51f8944a",
"assets/resimler/dara.png": "58ae43b59a2105c9ff6871ba4ed96f9f",
"assets/resimler/dara_antik_kent.png": "cea843730e3c75961ca61d3f194da79d",
"assets/resimler/dara_ic.png": "2746c428a2483ab53ace11d62f1fad93",
"assets/resimler/efes.png": "9549012a90acc4eedf1302ce9b05bd9e",
"assets/resimler/efes_giris.png": "88bf30cc5fd9012f9bacb2dbaa0c7252",
"assets/resimler/efes_tiyatro.png": "5f88480bd1c9c8b57d7e751b61f2219e",
"assets/resimler/efes_ust.png": "d581dd9f987ec32f9fa865cab61463c7",
"assets/resimler/gabriel_dis.png": "e5bcc9798c29de8e9cdbfb7e04c3b03b",
"assets/resimler/gabriel_ic.png": "28f60e0c58123a3668e91082c065be7d",
"assets/resimler/gabriel_ust.png": "a45bd8ab9f47d14eb58b97d98689489c",
"assets/resimler/galata.png": "93acee0efedb21712a653df2a5bbf1b5",
"assets/resimler/galata_kulesi.png": "8bf7dee054dfe637a4610b25bdfd801b",
"assets/resimler/galata_muze.png": "568a5d956f620a6425a963eaaa9526d2",
"assets/resimler/gezi.png": "f27347c8ae9027e84f39dbde391c7458",
"assets/resimler/guney.png": "ca2c6d67a7e99464533078b4e22553dc",
"assets/resimler/harput_kale.png": "e75ad5a7fd0574a9ab4fc1ac9c94323d",
"assets/resimler/harput_kale_dis.png": "099cf67f6c5a25886a1c8eac9b115e6a",
"assets/resimler/harput_kale_uzak.png": "7f8fe854004970e87690f137cf2aaa80",
"assets/resimler/ihlara.png": "4bc0ab2d33cecaff24b64310a8125493",
"assets/resimler/ihlara_dere.png": "a6fcc9986bb67c2f7252ba49094a2470",
"assets/resimler/ihlara_kilise.png": "acdf070aea85a11261aeed041e59bd6c",
"assets/resimler/img.png": "99ee2950598f61ee2f095a6b8510c4f6",
"assets/resimler/ishak_pasa_dis.png": "7945d51aeedeb8ba0b519fab41e4e020",
"assets/resimler/ishak_pasa_ic.png": "fc7e6f4764e40931ba0054100e1bb8c9",
"assets/resimler/ishak_pasa_minare.png": "2814d606fcdf599798b153f93e31288e",
"assets/resimler/islahiye.png": "f2537de3ea48fbad226d01f63a447969",
"assets/resimler/islahiye_bayrakl%25C4%25B1.png": "3a03a364caa48a4f60734e0eb672d2ec",
"assets/resimler/islahiye_dis.png": "fc2cbffdaadbf5fd425fdfcf5b4616d6",
"assets/resimler/kaleici.png": "6c286b1faad5f14a5b15d7e73bb1a9d5",
"assets/resimler/kaleici_marina.png": "ea4b006a79a359e7ef3004d9d4233453",
"assets/resimler/kaleici_yan.png": "c94f06d85761759c7fc195f02aba806b",
"assets/resimler/kapadokya.png": "1ad9073f958d837ec3fe4ef102fb347f",
"assets/resimler/karadeniz.png": "2b42bd2b2c566ab9253edb04ab6e4190",
"assets/resimler/kayak.png": "13c6d06cb9f4b8e7eb6f1bb2e43291dd",
"assets/resimler/kopru.png": "21b461bdfb1bb65f317858d7498983d8",
"assets/resimler/malabadi.png": "90f4e396b571a13095ac70a18c830cc0",
"assets/resimler/malabadi_ust.png": "e500c61bbb17bb7df020d1318aea4905",
"assets/resimler/manzara.png": "d8d7a8470bfeb18b56e34b8bc3a7a736",
"assets/resimler/mevlana_gece.png": "fcd6041a185bb440b04b35e1092abc1e",
"assets/resimler/mevlana_ic.png": "d4e91492b84c0c6685653454c9d6129d",
"assets/resimler/mevlana_ust.png": "37477fad8f3af9dc71dc3ffe8b5f1443",
"assets/resimler/munzur.png": "7726aadd4b252c0f1af54b3362770952",
"assets/resimler/munzur_bir.png": "3085113cea6a3d794e8e6e57d1c7d1fa",
"assets/resimler/munzur_iki.png": "b7941e3e60b56aeda09034647d8c0583",
"assets/resimler/muze.png": "8f703962de34b6891a5b12765294a9c0",
"assets/resimler/muze_ici.png": "ca709b0c6d5ee60949d90e498ffcb36a",
"assets/resimler/muze_mezar.png": "e30ed8857c69b71c7674c40e0acbdd80",
"assets/resimler/odunpazari_evler.png": "b02b0dd2f9552052caac127dd8d477b2",
"assets/resimler/odunpazari_mavi.png": "bce4f409a4fa8bd3f16829988b956d44",
"assets/resimler/odunpazari_sokak.png": "b72a6ad0908b0c3d8dfce94c719bc54b",
"assets/resimler/oludeniz.png": "e8f1bb30ccab2475c29b561224436020",
"assets/resimler/parasut.png": "0081fd0056e785c45fc385f9811e8969",
"assets/resimler/peri_bacalari.png": "f4a16ab3a3ad7c3e7d17437e1f578fa6",
"assets/resimler/peri_bacalari_manzara.png": "dc99730af77e7f2475587a2ec7c8b65d",
"assets/resimler/saklikent_bir.png": "97d0dc3f5a1cd7b34ea527b3ce03e216",
"assets/resimler/saklikent_iki.png": "700f07a820282bf2965b147aef42b37c",
"assets/resimler/saklikent_uc.png": "a509a1d95a9204d0b2e1f09e0049e8e1",
"assets/resimler/selimiye.png": "51978eff899e922d7014d72a4f09db86",
"assets/resimler/selimiye_d%25C4%25B1s.png": "078d76b103a6a9a4f190519495d95735",
"assets/resimler/selimiye_ic.png": "86060b636dfc40e727fbdc3be4e9f14c",
"assets/resimler/side.png": "e61d1f3e46c37df4e5ffe47991b994dc",
"assets/resimler/side_tiyatro.png": "90c3b99b3a14f48d9703c7382df4872b",
"assets/resimler/sumele.png": "db4a9a3ca4c146a983ba49bac8946c92",
"assets/resimler/sumele_d%25C4%25B1s.png": "1aea6060415af1c89f062e185e517c6a",
"assets/resimler/sumele_ic.png": "d408c842c50ef1b7b77e5d53f2470ed8",
"assets/resimler/taht.png": "532223bea617d2d2848b8b7996ce2f91",
"assets/resimler/topkapi.png": "3a4b5de8c3651b3364255c53325c0b94",
"assets/resimler/topkapi_ic.png": "333edffacfaf8b802a5c6065ccb11cef",
"assets/resimler/trabzon_ayasofya.png": "64f60dc70304f0f8854909a3c831ebbf",
"assets/resimler/trabzon_ayasofya_ic.png": "012c50b3c92e453b9be3615ac7975bdd",
"assets/resimler/trabzon_ayasofya_ust.png": "13b2c62e969a532746a42cc92562750a",
"assets/resimler/uludag.png": "32cf2469cce5a856773109656f80e651",
"assets/resimler/zilkale.png": "10919973596400f10f3502a03f03bbf2",
"assets/resimler/zilkale_ic.png": "8ae02caab0b5710158e68b08e2c23169",
"assets/resimler/zilkale_ust.png": "328da9578a0f920172df185a59499c2b",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "17799cd0fa746d78d79381233d1773d5",
"/": "17799cd0fa746d78d79381233d1773d5",
"main.dart.js": "d7786dcc808b30cf6ca29f841ea00b7a",
"manifest.json": "ad5e09d17a08dae4bb92ffdf52647348",
"version.json": "c189a8c259298280e5525c836ac2d277"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
