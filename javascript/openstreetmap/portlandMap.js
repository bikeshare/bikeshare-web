var pointFeature;
var vectorLayer;
var featuresToStationIds = []
var features = []
//this is entirely temporary and will be obtained by ajax later
var routePoint = 0;
var bikeFeature;
var route = [
[-122.6906546,45.5220008],
[-122.690635201039,45.521971701558],
[-122.690617047617,45.5219418333301],
[-122.690600560035,45.5219110326511],
[-122.690586580342,45.5218789927498],
[-122.690577628886,45.5218451857912],
[-122.69058333568,45.521820186921],
[-122.690577079097,45.5217857990834],
[-122.690574136959,45.5217509510871],
[-122.690563300705,45.5217541515072],
[-122.690546737962,45.521784952718],
[-122.69053017522,45.5218157539287],
[-122.690513612477,45.5218465551395],
[-122.690497049734,45.5218773563502],
[-122.690480486992,45.521908157561],
[-122.690463924249,45.5219389587717],
[-122.690447361507,45.5219697599825],
[-122.690430798764,45.5220005611933],
[-122.690414236022,45.522031362404],
[-122.690397673279,45.5220621636148],
[-122.690382204117,45.5220935155184],
[-122.690365029589,45.5221146919159],
[-122.690330336423,45.5221130368287],
[-122.690296256153,45.5221051899043],
[-122.690262175883,45.5220973429798],
[-122.690231950164,45.5221091321341],
[-122.690203365293,45.5221292801906],
[-122.690174780422,45.5221494282472],
[-122.69015041138,45.5221731335157],
[-122.690135360071,45.5222047008584],
[-122.690120394682,45.5222363087366],
[-122.690105602469,45.5222679983163],
[-122.690090810256,45.522299687896],
[-122.690076018043,45.5223313774756],
[-122.6900474845,45.5223483092043],
[-122.690014821562,45.5223608060629],
[-122.689982158623,45.5223733029215],
[-122.689958014087,45.522395154544],
[-122.689942521638,45.5224265077427],
[-122.68992702919,45.5224578609414],
[-122.689911536742,45.5224892141401],
[-122.689896044293,45.5225205673388],
[-122.689880551845,45.5225519205375],
[-122.689865059397,45.5225832737363],
[-122.689849566948,45.522614626935],
[-122.689833760103,45.5226457981798],
[-122.689814293128,45.5226748511646],
[-122.689794645645,45.5227037630773],
[-122.689771157419,45.5227296733506],
[-122.689746224738,45.5227539287355],
[-122.689717377371,45.522773699129],
[-122.689688530005,45.5227934695226],
[-122.689655408834,45.5227887223349],
[-122.689621573556,45.5227798785237],
[-122.689587739052,45.5227710317521],
[-122.689553905099,45.5227621828721],
[-122.689520071147,45.5227533339922],
[-122.689486237194,45.5227444851123],
[-122.689452403242,45.5227356362324],
[-122.689418569289,45.5227267873525],
[-122.689384735336,45.5227179384726],
[-122.689350901384,45.5227090895927],
[-122.689317067431,45.5227002407127],
[-122.689283233478,45.5226913918328],
[-122.689249399526,45.5226825429529],
[-122.689215565573,45.522673694073],
[-122.689181731621,45.5226648451931],
[-122.689147897668,45.5226559963132],
[-122.689114063715,45.5226471474333],
[-122.689080229763,45.5226382985533],
[-122.68904639581,45.5226294496734],
[-122.689012561858,45.5226206007935],
[-122.688978727905,45.5226117519136],
[-122.688944893952,45.5226029030337],
[-122.68891106,45.5225940541538],
[-122.688877226047,45.5225852052739],
[-122.688843392095,45.522576356394],
[-122.688809558142,45.522567507514],
[-122.688775753181,45.5225585496857],
[-122.688741996006,45.5225494122795],
[-122.688708238832,45.5225402748733],
[-122.688674481657,45.5225311374671],
[-122.688640724483,45.5225220000609],
[-122.688606967308,45.5225128626547],
[-122.688573210134,45.5225037252485],
[-122.688539452959,45.5224945878423],
[-122.688505695785,45.5224854504361],
[-122.68847193861,45.5224763130298],
[-122.688438181436,45.5224671756236],
[-122.688404424261,45.5224580382175],
[-122.688370667086,45.5224489008112],
[-122.688336909912,45.522439763405],
[-122.688303152737,45.5224306259988],
[-122.688269395563,45.5224214885926],
[-122.688235638388,45.5224123511864],
[-122.688201881214,45.5224032137802],
[-122.688168124039,45.522394076374],
[-122.688134366865,45.5223849389678],
[-122.68810060969,45.5223758015616],
[-122.688066852516,45.5223666641554],
[-122.688033095341,45.5223575267492],
[-122.687999338167,45.522348389343],
[-122.687965580992,45.5223392519368],
[-122.687931823817,45.5223301145306],
[-122.687898066643,45.5223209771244],
[-122.687864309468,45.5223118397182],
[-122.687830552294,45.522302702312],
[-122.687796795119,45.5222935649058],
[-122.687763016541,45.5222845073043],
[-122.68772921751,45.5222755259618],
[-122.687695418478,45.5222665446194],
[-122.687661619447,45.5222575632769],
[-122.687627820416,45.5222485819344],
[-122.687594021385,45.5222396005919],
[-122.687560222354,45.5222306192494],
[-122.687526423322,45.522221637907],
[-122.687492624291,45.5222126565645],
[-122.68745882526,45.522203675222],
[-122.687425026229,45.5221946938795],
[-122.687391227197,45.522185712537],
[-122.687357428166,45.5221767311946],
[-122.687323629135,45.5221677498521],
[-122.687289830104,45.5221587685096],
[-122.687256031072,45.5221497871671],
[-122.687222232041,45.5221408058246],
[-122.68718843301,45.5221318244822],
[-122.687154633979,45.5221228431397],
[-122.687120834948,45.5221138617972],
[-122.687087035916,45.5221048804547],
[-122.687053236885,45.5220958991123],
[-122.687019437854,45.5220869177698],
[-122.686985638823,45.5220779364273],
[-122.686951839791,45.5220689550848],
[-122.68691804076,45.5220599737423],
[-122.686884067905,45.5220516781906],
[-122.686850071447,45.5220434757598],
[-122.686816074879,45.5220352737857],
[-122.686782071299,45.5220271009297],
[-122.686748067719,45.5220189280736],
[-122.686714127699,45.5220105026905],
[-122.686680306723,45.5220016043423],
[-122.686646485747,45.5219927059941],
[-122.686612664771,45.5219838076459],
[-122.686578843795,45.5219749092977],
[-122.686545022819,45.5219660109494],
[-122.686511201843,45.5219571126012],
[-122.686477380867,45.521948214253],
[-122.686443559891,45.5219393159048],
[-122.686409738915,45.5219304175566],
[-122.686375917939,45.5219215192083],
[-122.686342096962,45.5219126208601],
[-122.686308275986,45.5219037225119],
[-122.68627445501,45.5218948241637],
[-122.686240634034,45.5218859258155],
[-122.686206813058,45.5218770274672],
[-122.686172992082,45.521868129119],
[-122.686139171106,45.5218592307708],
[-122.68610535013,45.5218503324226],
[-122.686071529154,45.5218414340744],
[-122.686037708178,45.5218325357261],
[-122.686003887202,45.5218236373779],
[-122.685970059882,45.5218147632617],
[-122.685936215601,45.5218059539827],
[-122.68590235774,45.521797197028],
[-122.685868499879,45.5217884400733],
[-122.685834684914,45.521779523179],
[-122.685800989188,45.5217701617119],
[-122.685767293462,45.5217608002447],
[-122.685733597736,45.5217514387775],
[-122.685699816892,45.5217423922345],
[-122.685665993115,45.5217335045419],
[-122.685632169337,45.5217246168494],
[-122.685598345559,45.5217157291568],
[-122.685564521781,45.5217068414643],
[-122.685530698003,45.5216979537717],
[-122.685496874226,45.5216890660792],
[-122.685463050448,45.5216801783866],
[-122.68542922667,45.5216712906941],
[-122.685395402892,45.5216624030015],
[-122.685361579114,45.521653515309],
[-122.685327755336,45.5216446276164],
[-122.685293963085,45.5216356210176],
[-122.685260178994,45.5216265836378],
[-122.685226394903,45.5216175462581],
[-122.685192610812,45.5216085088784],
[-122.685158826721,45.5215994714987],
[-122.68512504263,45.5215904341189],
[-122.68509125854,45.5215813967392],
[-122.685057474449,45.5215723593595],
[-122.685023690358,45.5215633219798],
[-122.684989906267,45.5215542846001],
[-122.684956122176,45.5215452472203],
[-122.684922391994,45.5215360115698],
[-122.684888682969,45.5215266981031],
[-122.684854973944,45.5215173846364],
[-122.684821264919,45.5215080711696],
[-122.684787555756,45.5214987582011],
[-122.684753845951,45.5214894475594],
[-122.684720136146,45.5214801369178],
[-122.684686430406,45.5214708116409],
[-122.684652748155,45.5214614018062],
[-122.684619065904,45.5214519919716],
[-122.684585383653,45.5214425821369],
[-122.684551701402,45.5214331723022],
[-122.68451801915,45.5214237624676],
[-122.684484336899,45.5214143526329],
[-122.684450654648,45.5214049427982],
[-122.684416972397,45.5213955329636],
[-122.684383290146,45.5213861231289],
[-122.684349607895,45.5213767132942],
[-122.684315925644,45.5213673034596],
[-122.684282243393,45.5213578936249],
[-122.684248561142,45.5213484837902],
[-122.684214878891,45.5213390739556],
[-122.68418119664,45.5213296641209],
[-122.684147514389,45.5213202542862],
[-122.684113832138,45.5213108444516],
[-122.684080149887,45.5213014346169],
[-122.684046467636,45.5212920247822],
[-122.684012785385,45.5212826149476],
[-122.683979103134,45.5212732051129],
[-122.683945420882,45.5212637952782],
[-122.683911738631,45.5212543854436],
[-122.683877974002,45.5212452774468],
[-122.683844181398,45.5212362719525],
[-122.683810388794,45.5212272664581],
[-122.683776597384,45.5212182564845],
[-122.68374280832,45.5212092377167],
[-122.683709019256,45.5212002189488],
[-122.683675233652,45.5211911872862],
[-122.683641468596,45.5211820790476],
[-122.68360770354,45.521172970809],
[-122.683573938484,45.5211638625704],
[-122.683540173428,45.5211547543318],
[-122.683506408372,45.5211456460932],
[-122.683472643316,45.5211365378546],
[-122.683438878259,45.521127429616],
[-122.683405113203,45.5211183213775],
[-122.683371348147,45.5211092131389],
[-122.683337583091,45.5211001049003],
[-122.683303818035,45.5210909966617],
[-122.683270052979,45.5210818884231],
[-122.683236287923,45.5210727801845],
[-122.683202522867,45.5210636719459],
[-122.683168757811,45.5210545637073],
[-122.683134992754,45.5210454554687],
[-122.683101227698,45.5210363472301],
[-122.683067462642,45.5210272389915],
[-122.683033697586,45.521018130753],
[-122.68299993253,45.5210090225144],
[-122.682966167474,45.5209999142758],
[-122.682932402418,45.5209908060372],
[-122.682898637362,45.5209816977986],
[-122.682864809334,45.5209728285424],
[-122.682830940192,45.5209641153192],
[-122.682797068736,45.5209554111041],
[-122.682763196389,45.5209467103576],
[-122.682729329161,45.5209379896959],
[-122.682695461934,45.5209292690342],
[-122.682661594707,45.5209205483725],
[-122.68262779834,45.5209115574769],
[-122.68259400961,45.5209025374591],
[-122.682560220879,45.5208935174412],
[-122.682526432149,45.5208844974233],
[-122.682492643418,45.5208754774055],
[-122.682458854688,45.5208664573876],
[-122.682425065958,45.5208574373697],
[-122.682391277227,45.5208484173519],
[-122.682357488497,45.520839397334],
[-122.682323699766,45.5208303773162],
[-122.682289911036,45.5208213572983],
[-122.682256122306,45.5208123372804],
[-122.682222333575,45.5208033172626],
[-122.682188544845,45.5207942972447],
[-122.682154756114,45.5207852772269],
[-122.682120967384,45.520776257209],
[-122.682087178653,45.5207672371912],
[-122.682053389923,45.5207582171733],
[-122.682019601193,45.5207491971554],
[-122.681985812462,45.5207401771376],
[-122.681952023732,45.5207311571197],
[-122.681918235001,45.5207221371018],
[-122.681884446271,45.520713117084],
[-122.681850662259,45.5207040794271],
[-122.681816882775,45.5206950248434],
[-122.681783103291,45.5206859702598],
[-122.681749323807,45.5206769156761],
[-122.681715550849,45.5206678367848],
[-122.681681777055,45.5206587609998],
[-122.681648002703,45.5206496872932],
[-122.68161420636,45.5206406958821],
[-122.681580407634,45.5206317133907],
[-122.681546608908,45.5206227308993],
[-122.681512810182,45.5206137484078],
[-122.681479011457,45.5206047659164],
[-122.681445212731,45.520595783425],
[-122.681411414005,45.5205868009336],
[-122.681377615279,45.5205778184421],
[-122.681343816553,45.5205688359507],
[-122.681310017827,45.5205598534593],
[-122.681276219101,45.5205508709679],
[-122.681242420375,45.5205418884764],
[-122.681208621649,45.520532905985],
[-122.681174822923,45.5205239234936],
[-122.681141024198,45.5205149410022],
[-122.681107225472,45.5205059585107],
[-122.681073426746,45.5204969760193],
[-122.68103962802,45.5204879935279],
[-122.681005829294,45.5204790110364],
[-122.680972030568,45.520470028545],
[-122.680938231842,45.5204610460536],
[-122.680904433116,45.5204520635622],
[-122.68087063439,45.5204430810707],
[-122.680836835664,45.5204340985793],
[-122.680803036938,45.5204251160879],
[-122.680769238428,45.5204161327878],
[-122.680735440352,45.5204071478477],
[-122.680701642277,45.5203981629076],
[-122.680667844202,45.5203891779676],
[-122.680634046127,45.5203801930275],
[-122.680600248052,45.5203712080874],
[-122.680566449977,45.5203622231473],
[-122.680532651902,45.5203532382072],
[-122.680498853827,45.5203442532671],
[-122.680465055752,45.520335268327],
[-122.680431257677,45.520326283387],
[-122.680397459602,45.5203172984469],
[-122.680363661527,45.5203083135068],
[-122.680329863452,45.5202993285667],
[-122.680296065377,45.5202903436266],
[-122.680262267302,45.5202813586865],
[-122.680228500574,45.5202722573045],
[-122.680194759674,45.5202630599872],
[-122.680161018773,45.5202538626699],
[-122.680127277872,45.5202446653526],
[-122.680093536972,45.5202354680353],
[-122.680059796071,45.520226270718],
[-122.68002605517,45.5202170734007],
[-122.679992314269,45.5202078760834],
[-122.679958573369,45.5201986787661],
[-122.679924832468,45.5201894814489],
[-122.679891091567,45.5201802841316],
[-122.679857350667,45.5201710868143],
[-122.679823609766,45.520161889497],
[-122.679789868865,45.5201526921797],
[-122.679756127965,45.5201434948624],
[-122.679722387064,45.5201342975451],
[-122.679688646163,45.5201251002278],
[-122.679654905263,45.5201159029105],
[-122.679621164362,45.5201067055932],
[-122.679587423461,45.5200975082759],
[-122.67955368256,45.5200883109586],
[-122.67951994166,45.5200791136413],
[-122.679486200759,45.520069916324],
[-122.679452459858,45.5200607190067],
[-122.679418718958,45.5200515216894],
[-122.679385010921,45.5200422050903],
[-122.679351320602,45.5200328241817],
[-122.679317630283,45.5200234432732],
[-122.679283939964,45.5200140623646],
[-122.679250201162,45.520004859618],
[-122.67921640303,45.5199958748938],
[-122.679182604898,45.5199868901695],
[-122.679148806897,45.5199779049501],
[-122.679115009123,45.5199689188754],
[-122.67908121135,45.5199599328007],
[-122.679047413577,45.5199509467261],
[-122.679013615803,45.5199419606514],
[-122.67897981803,45.5199329745768],
[-122.678946020256,45.5199239885021],
[-122.678912222483,45.5199150024274],
[-122.67887842471,45.5199060163528],
[-122.678844626936,45.5198970302781],
[-122.678810829163,45.5198880442034],
[-122.678777031389,45.5198790581288],
[-122.678743233616,45.5198700720541],
[-122.678709435843,45.5198610859794],
[-122.678675638069,45.5198520999048],
[-122.678641840296,45.5198431138301],
[-122.678608042522,45.5198341277554],
[-122.678574244749,45.5198251416808],
[-122.678540446976,45.5198161556061],
[-122.678506649202,45.5198071695315],
[-122.678472851429,45.5197981834568],
[-122.678439053655,45.5197891973821],
[-122.678405255882,45.5197802113075],
[-122.678371456383,45.5197712317245],
[-122.678337656616,45.519762253153],
[-122.678303856848,45.5197532745815],
[-122.678270060531,45.5197442830337],
[-122.678236265076,45.5197352882434],
[-122.678202469622,45.5197262934531],
[-122.678168674167,45.5197172986628],
[-122.678134878143,45.5197083060097],
[-122.678101079271,45.5196993240685],
[-122.678067280399,45.5196903421273],
[-122.678033481527,45.519681360186],
[-122.677999682655,45.5196723782448],
[-122.677965883783,45.5196633963036],
[-122.677932084911,45.5196544143623],
[-122.677898286038,45.5196454324211],
[-122.677864487166,45.5196364504799],
[-122.677830688294,45.5196274685387],
[-122.677796889422,45.5196184865974],
[-122.67776309055,45.5196095046562],
[-122.677729291678,45.519600522715],
[-122.677695492806,45.5195915407737],
[-122.677661693934,45.5195825588325],
[-122.677627895062,45.5195735768913],
[-122.677594096189,45.51956459495],
[-122.677560297317,45.5195556130088],
[-122.677526498445,45.5195466310676],
[-122.677492699573,45.5195376491263],
[-122.677458900701,45.5195286671851],
[-122.677425101829,45.5195196852439],
[-122.677391302957,45.5195107033027],
[-122.677357504113,45.5195017212558],
[-122.677323708449,45.5194927272486],
[-122.677289912786,45.5194837332414],
[-122.677256117123,45.5194747392343],
[-122.677222321459,45.5194657452271],
[-122.677188518341,45.5194567792827],
[-122.677154721573,45.5194477894272],
[-122.677120924805,45.5194387995717],
[-122.677087126654,45.5194298149199],
[-122.677053327876,45.5194208326213],
[-122.677019529099,45.5194118503228],
[-122.676985730322,45.5194028680243],
[-122.676951931545,45.5193938857257],
[-122.676918132768,45.5193849034272],
[-122.676884333991,45.5193759211287],
[-122.676850535213,45.5193669388301],
[-122.676816736436,45.5193579565316],
[-122.676782937659,45.5193489742331],
[-122.676749138882,45.5193399919346],
[-122.676715340105,45.519331009636],
[-122.676681541328,45.5193220273375],
[-122.67664774255,45.519313045039],
[-122.676613943773,45.5193040627404],
[-122.676580144996,45.5192950804419],
[-122.676546346219,45.5192860981434],
[-122.676512547442,45.5192771158448],
[-122.676478748665,45.5192681335463],
[-122.676444949887,45.5192591512478],
[-122.67641115111,45.5192501689492],
[-122.676377352333,45.5192411866507],
[-122.676343554093,45.519232202333],
[-122.676309760162,45.5192232018188],
[-122.676275966231,45.5192142013045],
[-122.6762421723,45.5192052007902],
[-122.676208378369,45.5191962002759],
[-122.676174575855,45.5191872320569],
[-122.676140772835,45.5191782657386],
[-122.676106969815,45.5191692994203],
[-122.676073169881,45.5191603214814],
[-122.676039372016,45.5191513357489],
[-122.676005574152,45.5191423500164],
[-122.675971776287,45.5191333642838],
[-122.675937978423,45.5191243785513],
[-122.675904180559,45.5191153928188],
[-122.675870382694,45.5191064070863],
[-122.67583658483,45.5190974213538],
[-122.675802786966,45.5190884356213],
[-122.675768989101,45.5190794498887],
[-122.675735191237,45.5190704641562],
[-122.675701393372,45.5190614784237],
[-122.675667595508,45.5190524926912],
[-122.675633797644,45.5190435069587],
[-122.675599999779,45.5190345212262],
[-122.675566201915,45.5190255354936],
[-122.675532404051,45.5190165497611],
[-122.675498606186,45.5190075640286],
[-122.675464808322,45.5189985782961],
[-122.675431010457,45.5189895925636],
[-122.675397212593,45.5189806068311],
[-122.675363414729,45.5189716210985],
[-122.675329616864,45.518962635366],
[-122.675295819018,45.5189536495671],
[-122.67526202118,45.5189446637342],
[-122.675228223342,45.5189356779013],
[-122.675194425505,45.5189266920684],
[-122.675160626751,45.5189177096797],
[-122.675126827607,45.5189087287641],
[-122.675093028462,45.5188997478485],
[-122.675059230054,45.5188907641601],
[-122.675025432151,45.518881778575],
[-122.674991634247,45.5188727929899],
[-122.674957836344,45.5188638074047],
[-122.67492403844,45.5188548218196],
[-122.674890240537,45.5188458362345],
[-122.674856442633,45.5188368506494],
[-122.67482264473,45.5188278650643],
[-122.674788846826,45.5188188794792],
[-122.674755048922,45.5188098938941],
[-122.674721251019,45.518800908309],
[-122.674687453115,45.5187919227239],
[-122.674653655212,45.5187829371388],
[-122.674619857308,45.5187739515537],
[-122.674586059405,45.5187649659686],
[-122.674552261501,45.5187559803835],
[-122.674518463597,45.5187469947984],
[-122.674484665694,45.5187380092133],
[-122.67445086779,45.5187290236282],
[-122.674417069887,45.5187200380431],
[-122.674383271983,45.518711052458],
[-122.67434947408,45.5187020668729],
[-122.674315676176,45.5186930812878],
[-122.674281880247,45.5186840882788],
[-122.674248084842,45.5186750933038],
[-122.674214289436,45.5186660983289],
[-122.674179717822,45.5186642034821],
[-122.6741447772,45.518665684017],
[-122.674109836578,45.5186671645518],
[-122.674074895957,45.5186686450866],
[-122.674040059416,45.5186656958188],
[-122.674005226884,45.5186625759197],
[-122.673970394353,45.5186594560207],
[-122.673935561821,45.5186563361216],
[-122.67390072929,45.5186532162226],
[-122.673865970297,45.5186493897851],
[-122.673831241879,45.5186452695901],
[-122.673796513461,45.5186411493952],
[-122.673761785043,45.5186370292002],
[-122.673727056624,45.5186329090053],
[-122.673692328206,45.5186287888103],
[-122.673657599788,45.5186246686153],
[-122.67362287137,45.5186205484204],
[-122.673588142952,45.5186164282254],
[-122.673553414534,45.5186123080305],
[-122.673518686116,45.5186081878355],
[-122.673483957698,45.5186040676406],
[-122.67344922928,45.5185999474456],
[-122.673414495776,45.5185958711244],
[-122.673379745815,45.518591936762],
[-122.673344995853,45.5185880023995],
[-122.673310245892,45.5185840680371],
[-122.67327549593,45.5185801336747],
[-122.673240745969,45.5185761993122],
[-122.673205996008,45.5185722649498],
[-122.673171246046,45.5185683305874],
[-122.673136496085,45.5185643962249],
[-122.673101746123,45.5185604618625],
[-122.673066996162,45.5185565275001],
[-122.673032246201,45.5185525931376],
[-122.672997496239,45.5185486587752],
[-122.672962746278,45.5185447244128],
[-122.672927996316,45.5185407900503],
[-122.672893246355,45.5185368556879],
[-122.672858496394,45.5185329213255],
[-122.672823746432,45.518528986963],
[-122.672788996471,45.5185250526006],
[-122.67275696106,45.5185130436989],
[-122.672726891702,45.5184951866897],
[-122.672696822345,45.5184773296806],
[-122.672666546447,45.5184598266268],
[-122.672640042656,45.5184372669428],
[-122.672628029679,45.5184051916188],
[-122.672621584745,45.5183708186374],
[-122.672591863729,45.5183651301385],
[-122.672556900254,45.5183658995737],
[-122.672521928599,45.5183657501222],
[-122.672486956731,45.5183657],
[-122.672451987929,45.5183655549882],
[-122.672417049426,45.5183640252813],
[-122.672382134603,45.5183620785518],
[-122.672347247523,45.5183596432524],
[-122.672312479003,45.5183559679991],
[-122.672277762561,45.5183517480807],
[-122.672243095707,45.5183471612182],
[-122.672208504431,45.5183420150888],
[-122.672173913155,45.5183368689594],
[-122.672139496311,45.5183306833199],
[-122.672105119929,45.5183242565499],
[-122.672070743547,45.51831782978],
[-122.672036367164,45.5183114030101],
[-122.672001990782,45.5183049762401],
[-122.6719676144,45.5182985494702],
[-122.671933238018,45.5182921227002],
[-122.671898886017,45.5182855681563],
[-122.671864558539,45.5182788850953],
[-122.671830231062,45.5182722020343],
[-122.671795903584,45.5182655189733],
[-122.671761576107,45.5182588359123],
[-122.671727271267,45.5182520438805],
[-122.671693122381,45.5182445011614],
[-122.671658973495,45.5182369584422],
[-122.671624824609,45.5182294157231],
[-122.671590675723,45.518221873004],
[-122.671556526837,45.5182143302848],
[-122.671522414636,45.5182066270958],
[-122.671488380448,45.5181985826514],
[-122.67145434626,45.518190538207],
[-122.671420312073,45.5181824937626],
[-122.671386277885,45.5181744493182],
[-122.671352243697,45.5181664048739],
[-122.671318216997,45.5181583288302],
[-122.671284191881,45.5181502461004],
[-122.671250166765,45.5181421633706],
[-122.671216188151,45.5181338873507],
[-122.671182209905,45.5181256098035],
[-122.671148231658,45.5181173322562],
[-122.671114388452,45.5181085240153],
[-122.671080586368,45.5180995541686],
[-122.671046784284,45.5180905843219],
[-122.671012982201,45.5180816144752],
[-122.670979180117,45.5180726446284],
[-122.670945378033,45.5180636747817],
[-122.670911575949,45.518054704935],
[-122.670877773865,45.5180457350883],
[-122.670843971781,45.5180367652416],
[-122.670810169697,45.5180277953949],
[-122.670776367613,45.5180188255482],
[-122.67074256553,45.5180098557014],
[-122.670708763446,45.5180008858547],
[-122.670674961362,45.517991916008],
[-122.670641159278,45.5179829461613],
[-122.670607357194,45.5179739763146],
[-122.67057355511,45.5179650064679],
[-122.670539753026,45.5179560366212],
[-122.670505950942,45.5179470667744],
[-122.670472148858,45.5179380969277],
[-122.670438346775,45.517929127081],
[-122.670404544691,45.5179201572343],
[-122.670370742607,45.5179111873876],
[-122.670336940523,45.5179022175409],
[-122.670303138439,45.5178932476941],
[-122.670269336355,45.5178842778474],
[-122.670235534271,45.5178753080007],
[-122.670201732187,45.517866338154],
[-122.670167930103,45.5178573683073],
[-122.67013412802,45.5178483984606],
[-122.670100325936,45.5178394286139],
[-122.670066523852,45.5178304587672],
[-122.670032721768,45.5178214889204],
[-122.669998919684,45.5178125190737],
[-122.6699651176,45.517803549227],
[-122.669931315516,45.5177945793803],
[-122.669897513432,45.5177856095336],
[-122.669863711349,45.5177766396869],
[-122.669829909265,45.5177676698401],
[-122.669796107181,45.5177586999934],
[-122.669762305097,45.5177497301467],
[-122.669728503013,45.5177407603],
[-122.669694718243,45.5177317255065],
[-122.669660936841,45.5177226780835],
[-122.669627155438,45.5177136306605],
[-122.669593374036,45.5177045832375],
[-122.669559592633,45.5176955358145],
[-122.66952581123,45.5176864883914],
[-122.669492029828,45.5176774409684],
[-122.669458248425,45.5176683935454],
[-122.669424467023,45.5176593461224],
[-122.66939068562,45.5176502986994],
[-122.669356904217,45.5176412512764],
[-122.669323122815,45.5176322038534],
[-122.669289341412,45.5176231564304],
[-122.66925556001,45.5176141090074],
[-122.669221778607,45.5176050615844],
[-122.669187997204,45.5175960141614],
[-122.669154215802,45.5175869667383],
[-122.669120434399,45.5175779193153],
[-122.669086652997,45.5175688718923],
[-122.669052871594,45.5175598244693],
[-122.669019090191,45.5175507770463],
[-122.668985308789,45.5175417296233],
[-122.668951527386,45.5175326822003],
[-122.668917745984,45.5175236347773],
[-122.668883964581,45.5175145873543],
[-122.668850183178,45.5175055399313],
[-122.668816401776,45.5174964925083],
[-122.668782620373,45.5174874450853],
[-122.668748838971,45.5174783976622],
[-122.668715057568,45.5174693502392],
[-122.668681276165,45.5174603028162],
[-122.668647494763,45.5174512553932],
[-122.66861371336,45.5174422079702],
[-122.668579931958,45.5174331605472],
[-122.668546150555,45.5174241131242],
[-122.668512369152,45.5174150657012],
[-122.66847858775,45.5174060182782],
[-122.668444806347,45.5173969708552],
[-122.668411024945,45.5173879234322],
[-122.668377243542,45.5173788760091],
[-122.668343462139,45.5173698285861],
[-122.668309894534,45.5173600451307],
[-122.668276523044,45.5173495865131],
[-122.668243151554,45.5173391278955],
[-122.668209780064,45.517328669278],
[-122.668176408574,45.5173182106604],
[-122.668143121736,45.5173075104712],
[-122.668110521485,45.5172948509828],
[-122.668077921234,45.5172821914944],
[-122.668045414112,45.5172692958577],
[-122.668012948323,45.5172562954114],
[-122.667980482535,45.517243294965],
[-122.667948423424,45.5172293279945],
[-122.667916429456,45.5172152061999],
[-122.667884931479,45.5172000292502],
[-122.667853643901,45.5171844047031],
[-122.667822428131,45.5171686437013],
[-122.667791833196,45.5171517029515],
[-122.667761238262,45.5171347622016],
[-122.667730643327,45.5171178214517],
[-122.667700810609,45.5170995916165],
[-122.667671222946,45.5170809473356],
[-122.667641651437,45.5170622779761],
[-122.667612441708,45.5170430469915],
[-122.667583231979,45.5170238160069],
[-122.667554022251,45.5170045850224],
[-122.667524812522,45.5169853540378],
[-122.667495602793,45.5169661230532],
[-122.667466393064,45.5169468920686],
[-122.667437183335,45.516927661084],
[-122.667407973607,45.5169084300994],
[-122.667378763878,45.5168891991149],
[-122.667387603284,45.5168675258516],
[-122.667401769032,45.5168372940267],
[-122.667409485922,45.5168031840774],
[-122.667417202811,45.5167690741281],
[-122.667428207492,45.5167360127983],
[-122.667443628455,45.5167046976535],
[-122.667465648833,45.5166781116889],
[-122.667495099896,45.5166595354155],
[-122.66752794861,45.516647798616],
[-122.667562685886,45.5166452125664],
[-122.667596411848,45.5166529034773],
[-122.667627330583,45.5166689363017],
[-122.667647092698,45.516696629415],
[-122.667646418528,45.5167312303545],
[-122.667625201388,45.516758702616],
[-122.667594857794,45.5167757820029],
[-122.667560554203,45.5167815798092],
[-122.667526025287,45.5167786538908],
[-122.667493078965,45.5167681066055],
[-122.667465709138,45.5167468130357],
[-122.667451690674,45.516715094508],
[-122.667451139327,45.5166808537675],
[-122.667461501766,45.5166476883623],
[-122.667481889287,45.5166194949406],
[-122.6675092463,45.5165979085081],
[-122.667540356772,45.5165821025483],
[-122.667574205286,45.5165755765576],
[-122.667570983599,45.5166049543557],
[-122.667561984911,45.5166387487729],
[-122.667552986222,45.51667254319],
[-122.667543987534,45.5167063376071],
[-122.667534988845,45.5167401320242],
[-122.667525990156,45.5167739264414],
[-122.667516991468,45.5168077208585],
[-122.667507992779,45.5168415152756],
[-122.667498994091,45.5168753096927],
[-122.667489995402,45.5169091041098],
[-122.667481383218,45.5169429982319],
[-122.667472911242,45.5169769285229],
[-122.667464439266,45.5170108588139],
[-122.667455967289,45.5170447891048],
[-122.667447495313,45.5170787193958],
[-122.667439023337,45.5171126496868],
[-122.667430551361,45.5171465799777],
[-122.667422079385,45.5171805102687],
[-122.667413607409,45.5172144405597],
[-122.667405135433,45.5172483708506],
[-122.667396663456,45.5172823011416],
[-122.66738819148,45.5173162314326],
[-122.667379719504,45.5173501617235],
[-122.667371247528,45.5173840920145],
[-122.667362775552,45.5174180223055],
[-122.667354303576,45.5174519525964],
[-122.667345831599,45.5174858828874],
[-122.667337359623,45.5175198131784],
[-122.667328887647,45.5175537434693],
[-122.667318459065,45.5175871142422],
[-122.667307711475,45.5176203937905],
[-122.667296963885,45.5176536733387],
[-122.667286216295,45.517686952887],
[-122.667275468705,45.5177202324353],
[-122.667264721115,45.5177535119835],
[-122.667253973524,45.5177867915318],
[-122.667243225934,45.51782007108],
[-122.667232478344,45.5178533506283],
[-122.667221551807,45.5178865678173],
[-122.667209288948,45.5179193193257],
[-122.667197026089,45.5179520708342],
[-122.667184763229,45.5179848223427],
[-122.66717250037,45.5180175738512],
[-122.667160237511,45.5180503253597],
[-122.667147974652,45.5180830768682],
[-122.667135711793,45.5181158283767],
[-122.667123448933,45.5181485798852],
[-122.667111186074,45.5181813313937],
[-122.667098923215,45.5182140829021],
[-122.667086660356,45.5182468344106],
[-122.667074397496,45.5182795859191],
[-122.667062134637,45.5183123374276],
[-122.667049871778,45.5183450889361],
[-122.667037608919,45.5183778404446],
[-122.667025346059,45.5184105919531],
[-122.6670130832,45.5184433434616],
[-122.667000820341,45.5184760949701],
[-122.666988557482,45.5185088464785],
];


function init() {
  //var features = [];
  map = new OpenLayers.Map("mapdiv");
  //var newLayer = new OpenLayers.Layer.OSM("Local Tiles", "http://tile.openstreetmap.org/${z}/${x}/${y}.png", {numZoomLevels: 19});
  var newLayer = new OpenLayers.Layer.OSM("Local Tiles", "http://bikeshare.cs.pdx.edu/osm/${z}/${x}/${y}.png", {numZoomLevels: 19, crossOriginKeyword: null});
  map.addLayer(newLayer); 
  // allow testing of specific renderers via "?renderer=Canvas", etc
  var renderer = OpenLayers.Util.getParameters(window.location.href).renderer;
  renderer = (renderer) ? [renderer] : OpenLayers.Layer.Vector.prototype.renderers;
  var layer_style = OpenLayers.Util.extend({}, OpenLayers.Feature.Vector.style['default']);
  layer_style.fillOpacity = 0.2;
  layer_style.graphicOpacity = 1;
  var lonlat = new OpenLayers.LonLat(-122.680591,45.510016).transform(
      new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
      new OpenLayers.Projection("EPSG:900913") // to Spherical Mercator
    );
      vectorLayer = new OpenLayers.Layer.Vector("Simple Geometry", {
          styleMap: new OpenLayers.StyleMap({'default':{
              strokeColor: "${pointColor}",
              strokeOpacity: 1,
              strokeWidth: 3,
              fillColor: "${pointColor}",
              fillOpacity: 0.8,
              pointRadius: 5,
              pointerEvents: "visiblePainted",
              label : "${name}",
              fontColor: "${favColor}",
              fontSize: "12px",
              fontFamily: "Courier New, monospace",
              fontWeight: "bold",
              labelAlign: "${align}",
              labelXOffset: "${xOffset}",
              labelYOffset: "${yOffset}"
          }}),
          renderers: renderer
      });
  var zoom = 14;
      $.ajax({url : "http://bikeshare.cs.pdx.edu/bikeshare_dramage/REST/1.0/stations/all",
        success : function(result) {
            bikeStationList = JSON.parse(result); 
            for (var i = 0; i < bikeStationList.length; i ++) {
              var latitude = parseFloat(bikeStationList[i].lat);
              var longitude = parseFloat(bikeStationList[i].lon);
              var point = new OpenLayers.Geometry.Point(longitude, latitude);
              point.transform(
                new OpenLayers.Projection("EPSG:4326"),
                new OpenLayers.Projection("EPSG:900913")
              );
              var pointFeature = new OpenLayers.Feature.Vector(point);
              pointFeature.attributes = {
                  name : "BikeShare Station " + bikeStationList[i].station_id,
                  favColor : 'black',
                  align : 'cm',
                  xOffset : 10,
                  yOffset : 10,
                  pointColor : 'blue',
                  popupIndex : i
              };
              pointFeature.attributes.popup = new OpenLayers.Popup.FramedCloud("Popup", 
                    point.getBounds().getCenterLonLat(), null,
                    'BikeStation ' + bikeStationList[i].station_id,
                     null,
                    true // <-- true if we want a close (X) button, false otherwise
                );
              features.push(pointFeature);
              map.addPopup(pointFeature.attributes.popup);
              map.popups[pointFeature.attributes.popupIndex].hide();
              /*
              for (var i = 0; i < map.popups.length; i ++) {
                    map.popups[i].hide();
                } */
              featuresToStationIds[i] = bikeStationList[i].station_id;
              map.addLayer(vectorLayer);
              vectorLayer.addFeatures(features);
              map.setCenter(lonlat, zoom); 
             
            }
            return;
        }
      });
    
    var bikePoint = new OpenLayers.Geometry.Point(route[0][0],route[0][1]);
    bikePoint.transform(
        new OpenLayers.Projection("EPSG:4326"),
        new OpenLayers.Projection("EPSG:900913")
    );
    bikeLayer = new OpenLayers.Layer.Vector("bikeLayer", {
        style : {
            externalGraphic : "http://bikeshare.cs.pdx.edu/bikeshare_dramage/static/ic_launcher32.png",
            graphicWidth: 21,
            graphicHeight: 25
        }
    });
    //bikeLayer = new OpenLayers.Layer.Vector("bikeLayer");
    bikeFeature = new OpenLayers.Feature.Vector(bikePoint);
    /*
    bikeFeature.attributes = {
	    externalGraphic : "http://bikeshare.cs.pdx.edu/bikeshare_dramage/static/ic_launcher32.png",
	    graphicWidth: 21,
        graphicHeight:25 
    };
    */
    bikeLayer.addFeatures([bikeFeature]);
    map.addLayer(bikeLayer);
    //bikeLayer.drawFeature(bikeFeature);
    //vectorLayer.addFeatures([bikeFeature]);
    var report = function(e) {
        console.log("you have moused over this");
    };
     var highlightCtrl = new OpenLayers.Control.SelectFeature(vectorLayer, {
                hover: true,
                //highlightOnly: false,
                //renderIntent: "temporary",
                eventListeners: {
                    //beforefeaturehighlighted: featureOver,
                    featurehighlighted: featureHighlighted,
                    featureunhighlighted: featureUnhighlighted 
        }
     });

    map.addControl(highlightCtrl);
    highlightCtrl.activate();
    map.setCenter(lonlat, zoom);
}

function getBikestationData() {
    for (var i = 0; i < featuresToStationIds.length; i ++) {
       $.ajax({ url : "http://bikeshare.cs.pdx.edu/bikeshare_dramage/REST/1.0/stations/info/" + featuresToStationIds[i],
            success : function(result) {
                stationData = JSON.parse(result);
                setStationColor(this.stationFeatureId,stationData);  
                return;          
            },
            stationFeatureId : i
       });
    }
    vectorLayer.redraw();
}

function setStationColor(stationNum,stationData) {
    bikePercent = (stationData.num_bikes / stationData.num_docks) * 100;
    if (bikePercent >= 70) {
        features[stationNum].attributes.pointColor = 'blue';
    } else if (70 > bikePercent >= 40) {
        features[stationNum].attributes.pointColor = 'yellow';
    } else {
        features[stationNum].attributes.pointColor = 'red';
    }
    console.log(features[stationNum].geometry);	
}
function getRandomInt (min, max) {
  	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveBike() {
   routePoint = (routePoint + 1) % route.length;
    var bikePoint = new OpenLayers.Geometry.Point(route[routePoint][0],route[routePoint][1]);
    bikePoint.transform(
        new OpenLayers.Projection("EPSG:4326"),
        new OpenLayers.Projection("EPSG:900913")
    );
    bikeLayer.removeFeatures([bikeFeature]);
    bikeFeature.geometry = bikePoint;
    bikeLayer.addFeatures([bikeFeature]);
    bikeLayer.redraw();
}

function setRandomPointStuff() {
 	colors = ['red','yellow','blue'];
  var numFeatures = features.length;
  for (var i = 0; i< numFeatures; i ++) {
  	colorNum = getRandomInt(0,2);
  	features[i].attributes.pointColor = colors[colorNum];
  }
 vectorLayer.redraw();
}

function featureHighlighted(feature) {
    console.log("Feature hilighted");
    console.log(feature.feature.attributes);
    //feature.feature.attributes.popup.show();
    map.popups[feature.feature.attributes.popupIndex].show();
}

function featureUnhighlighted(feature) {
    console.log("Feature unhilighted");
    console.log(feature.feature.attributes);
    map.popups[feature.feature.attributes.popupIndex].hide(); 
}

setInterval(function(){getBikestationData()},15000);
setInterval(function(){moveBike()},1000);
