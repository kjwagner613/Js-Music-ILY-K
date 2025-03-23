const songs = [
  {
    name: "Unwritten",
    artist: "Natasha Bedingfield",
    file: "https://dl.dropboxusercontent.com/scl/fi/z0qjlydj4x2t3c5qaggxe/Unwritten.mp3?rlkey=0j5dpxnkq0ra0kgpgeiomyewf&st=t1tg6lft&dl=0",
  },
  {
    name: "You Make Me Happy",
    artist: "My Sun & Stars",
    file: "https://dl.dropboxusercontent.com/scl/fi/enh1u1me7qs7db2zjhea0/You-make-me-happy.mp3?rlkey=hz3fv5thr6k5o1q3m5n96e1ei&st=wiut35uu&dl=0",
  },
  {
    name: "Beloved Wife",
    artist: "Natalie Merchant",
    file: "https://dl.dropboxusercontent.com/scl/fi/qhoop0uy5s4tl0nez0x8m/02-Beloved-Wife.mp3?rlkey=0y5bh8yvd71kn784dxtykiq84&st=okavdhjq&dl=0",
  },
  {
    name: "Home",
    artist: "Edward Sharpe & The Magnetic Zeros",
    file: "https://dl.dropboxusercontent.com/scl/fi/3znyn7c2q03ot47f5db4x/Home.mp3?rlkey=tkjrxkkyf98yg3jbnmbsc4pyx&st=eyjxjewu&dl=0",
  },
  {
    name: "One Night in Bangkok",
    artist: "Murray Head",
    file: "https://dl.dropboxusercontent.com/scl/fi/f8slc50wqfiabfyq8c5sb/One-Night-In-Bangkok.mp3?rlkey=sbjeqdoij6w8643ptrwz2mcib&st=uiywotlt&dl=0",
  },
  {
    name: "We saw gold",
    artist: "Tones & I",
    file: "https://dl.dropboxusercontent.com/scl/fi/m0nsuopkro244w30on1ej/I-Get-High.mp3?rlkey=giuzvlv8i1euu2qb3iix5xe6p&st=wbe5y86r&dl=0",
  },
  {
    name: "PNAU Mix",
    artist: "Elton John",
    file: "https://dl.dropboxusercontent.com/scl/fi/4p9hpo906qide0dro6r8x/03-Cold-Heart-PNAU-Remix.mp3?rlkey=hqnjviz5cq2hlkxmy1gzml67w&st=tlvwqce6&dl=0",
  },
  {
    name: "Bad Child",
    artist: "Tones & I",
    file: "https://dl.dropboxusercontent.com/scl/fi/57gty80uysuziwjq1wtg3/Bad-Child.mp3?rlkey=89l1r02m3q04eq5282fgenr6z&st=p4lngp62&dl=0",
  },
  {
    name: "Death Wish Love",
    artist: "Boone",
    file: "https://dl.dropboxusercontent.com/scl/fi/sqt4ep4drkmb2p6n427ri/Death-Wish-Love.mp3?rlkey=y350qtwje8y4mrpublj3upl97&st=049g959w&dl=0",
  },
  {
    name: "I Am The Highway",
    artist: "Audioslave",
    file: "https://dl.dropboxusercontent.com/scl/fi/qd9fefsq6txiwnkw97gzw/I-Am-The-Highway.mp3?rlkey=y4kh6hssi7xnpk414i80ero9d&st=uuw8nthw&dl=0",
  },
  {
    name: "Pretty Slowly",
    artist: "Boone",
    file: "https://dl.dropboxusercontent.com/scl/fi/ui9dc8r8fxpm5s6tx8ymi/Pretty-Slowly.mp3?rlkey=k1mib3p97kr51q5jhul1kifda&st=7ho939vn&dl=0",
  },
  {
    name: "Relax My Beloved",
    artist: "Alex Clare",
    file: "https://dl.dropboxusercontent.com/scl/fi/6pyst69xaqp9hmiiv2axz/Relax-My-Beloved.mp3?rlkey=qgkkvxorfnhdh3hhd9ktffe4w&st=o68k14qd&dl=0",
  },
  {
    name: "Too Close",
    artist: "Alex Clare",
    file: "https://dl.dropboxusercontent.com/scl/fi/agebvadhjk35vkf6kk0m7/Too-Close.mp3?rlkey=7j1d8jug58ak57js5ikn1k11s&st=3mrugfu8&dl=0",
  },
  {
    name: "Wilder Mind",
    artist: "Mumford & Sons",
    file: "https://dl.dropboxusercontent.com/scl/fi/k267tm5yrh0vigh8yg36q/Wilder-Mind.mp3?rlkey=rxvsk0ryu8l3a1vyekjiilo8z&st=hz0s1pzx&dl=0",
  },
  {
    name: "You and Me",
    artist: "Yelawolf",
    file: "https://dl.dropboxusercontent.com/scl/fi/str3lbg8enqezfzahzmz8/You-and-Me.mp3?rlkey=dfqwaaswjobips35chr85j8r5&st=en4xe588&dl=0",
  },
  {
    name: "Angel By The Wings",
    artist: "Sia",
    file: "https://dl.dropboxusercontent.com/scl/fi/o54urjpf9rfds2rjdkg22/Angel-By-The-Wings.mp3?rlkey=mup2w5wpdcp7hfx3570ec9i3f&st=wos2bjib&dl=0",
  },
  {
    name: "Anybody Listening",
    artist: "Scorpions",
    file: "https://dl.dropboxusercontent.com/scl/fi/td17kqv7x6zhdn5pg6lq7/Anybody-Listening_.mp3?rlkey=c1di04qsfyb9tauowpza7i2xu&st=xwqrdgrs&dl=0",
  },
  {
    name: "Beautiful Things",
    artist: "Boone",
    file: "https://dl.dropboxusercontent.com/scl/fi/h3jq6f1yk5tdo5jxy6go5/Beautiful-Things.mp3?rlkey=avgln5y50ykm2m39azbvxdord&st=t0b5p0cz&dl=0",
  },
  {
    name: "The Craving",
    artist: "Boone",
    file: "https://dl.dropboxusercontent.com/scl/fi/u2io5qs34uydyev225wz0/01-The-Craving-Jenna-s-version.mp3?rlkey=kqqvt6b0usswdjfsucwy0aj39&st=xyp206t4&dl=0",
  },
  {
    name: "Volcano",
    artist: "Damien Rice",
    file: "https://dl.dropboxusercontent.com/scl/fi/8859rfgqzp1m5gjx3g81i/02-Volcano.mp3?rlkey=aibl7xc3hxurvq4luhc1ciftt&st=y3l49ud6&dl=0",
  },
  {
    name: "Good Girls Go to Hell",
    artist: "Billie Eilish",
    file: "https://dl.dropboxusercontent.com/scl/fi/zip2duiyisxrew7t8xq39/1-05-all-the-good-girls-go-to-hell.mp3?rlkey=uomn7qa1p19yd3p34wr3pypi7&st=hbb3huyi&dl=0",
  },
  {
    name: "Jive Talkin",
    artist: "BeeGees",
    file: "https://dl.dropboxusercontent.com/scl/fi/2q90cj0z32at8p4o8zpuq/01-Jive-Talkin.mp3?rlkey=0ibbe6x5t5y598pf4y1199q23&st=t15tbowg&dl=0",
  },
  {
    name: "Bohemian Rhapsody",
    artist: "Queen",
    file: "https://dl.dropboxusercontent.com/scl/fi/ttbyfeuanx2j8rksrxy9f/01-Bohemian-Rhapsody.mp3?rlkey=t7kmaauf5mbxnwjxaznbmd0h3&st=kkdqx9ly&dl=0",
  },
  {
    name: "Another One Bites the Dust",
    artist: "Queen",
    file: "https://dl.dropboxusercontent.com/scl/fi/foic55e1loxy25nh062ns/01-Another-One-Bites-The-Dust-2011.mp3?rlkey=8p9qufnp5aj0prir3bkvvwa4m&st=3gq4e6y2&dl=0",
  },
  {
    name: "Under Pressure",
    artist: "Queen",
    file: "https://dl.dropboxusercontent.com/scl/fi/r4t8gguknfbx8864d8lb9/21-Under-Pressure-Remastered-2011-_.mp3?rlkey=ja8pvw4xhxh4950xx29bn6ory&st=y9sj09yq&dl=0",
  },
  {
    name: "Crazy Little Thing Called Love",
    artist: "Queen",
    file: "https://dl.dropboxusercontent.com/scl/fi/l6s03tgfzez0lt1i4mjh5/58-Crazy-Little-Thing-Called-Love-2.mp3?rlkey=yaunlu8z0qw0ssb3psubxzl4o&st=xaz26aq5&dl=0",
  },
  {
    name: "We Are The Champions",
    artist: "Queen",
    file: "https://dl.dropboxusercontent.com/scl/fi/fl063q39qp0rdi1wxlymq/17-We-Are-the-Champions.mp3?rlkey=jzecp7cormbp1gnip0x4w7rjw&st=nv1rq9v1&dl=0",
  },
  {
    name: "Songbird",
    artist: "Fleetwood Mac",
    file: "https://dl.dropboxusercontent.com/scl/fi/dodn7txt4wob7xzy9i4q5/12-Songbird.mp3?rlkey=gayzp0waxt5s37a5u1bwefbl5&st=pq2n2r72&dl=0",
  },
  {
    name: "Nevermore",
    artist: "Queen",
    file: "https://dl.dropboxusercontent.com/scl/fi/59ce2325futctmi1ou49d/08-Nevermore.mp3?rlkey=rxo4p7se7y8jlpho9hhhwfdk7&st=yl0e4dwi&dl=0",
  },
  {
    name: "Love So Right",
    artist: "BeeGees",
    file: "https://dl.dropboxusercontent.com/scl/fi/kb06pliy5cr25qyw6ebn6/07-Love-So-Right.mp3?rlkey=wbemn1hvqc6f2dmz8k4vuaftf&st=ds8dvde6&dl=0",
  },
  {
    name: "Don't Stop Me Now",
    artist: "Queen",
    file: "https://dl.dropboxusercontent.com/scl/fi/5kwogfiq2s36duvzz1ucj/07-Don-t-Stop-Me-Now.mp3?rlkey=3y8illq1qg8ridtnebuz63b6y&st=4j803n7e&dl=0",
  },
  {
    name: "You're My Best Friend",
    artist: "Queen",
    file: "https://dl.dropboxusercontent.com/scl/fi/gxcfvhw9try8br4xqv6bu/06-You-re-My-Best-Friend.mp3?rlkey=u3gmkx79gwk7zvu9gjyzq68q0&st=y7cvoj4t&dl=0",
  },
  {
    name: "How Deep Is Your Love",
    artist: "BeeGees",
    file: "https://dl.dropboxusercontent.com/scl/fi/pxuprvczhn0vdbvqxx40z/06-How-Deep-Is-Your-Love.mp3?rlkey=iazmyq8yxgeg117ydddud5syk&st=kgnwd90g&dl=0",
  },
  {
    name: "Grenade",
    artist: "Bruno Mars",
    file: "https://dl.dropboxusercontent.com/scl/fi/t14ts96y0iqtes5sbdvvd/05-Grenade.mp3?rlkey=tqa8yxqa0grr86lms4t2ime0x&st=pr2kwfdh&dl=0",
  },
  {
    name: "Back to Black",
    artist: "Amy Winehouse",
    file: "https://dl.dropboxusercontent.com/scl/fi/jvq7g4hrz9acdfbx5wi24/05-Back-To-Black.mp3?rlkey=fxmzbmr4e1i247teeeohem350&st=xb0c33oq&dl=0",
  },
  {
    name: "Don't Fear the Reaper",
    artist: "Blue Oyster Cult",
    file: "https://dl.dropboxusercontent.com/scl/fi/84i8fovygxzn8ap1kxwxf/05-Don-t-Fear-The-Reaper.mp3?rlkey=oqydi3agcck5ds10r3wxip7nd&st=z4mlh2hk&dl=0",
  },
  {
    name: "You Should Be Dancing",
    artist: "BeeGees",
    file: "https://dl.dropboxusercontent.com/scl/fi/jahf3ain9s1p1k8w74xcu/04-You-Should-Be-Dancing.mp3?rlkey=wclowa29x8bc63nsigrbdsf3z&st=e8o4bd4e&dl=0",
  },
  {
    name: "More Than a Woman",
    artist: "BeeGees",
    file: "https://dl.dropboxusercontent.com/scl/fi/vvc5ifd08irhw4ziy2pym/04-More-Than-A-Woman.mp3?rlkey=htuwdu9pxvfd2ppmj6uwe1tqx&st=3n3tjt0n&dl=0",
  },
  {
    name: "Tragedy",
    artist: "BeeGees",
    file: "https://dl.dropboxusercontent.com/scl/fi/1adgg9xom3ypqwoo8e78w/03-Tragedy.mp3?rlkey=5wa4o4zwwpeoxm98vfuiyctq8&st=chpmbtqi&dl=0",
  },
  {
    name: "My Life",
    artist: "Billy Joel",
    file: "https://dl.dropboxusercontent.com/scl/fi/zprodrfh7ckeilj5fx8k4/03-My-life.mp3?rlkey=plbt6x9nlzbix7eysp4f7m0ic&st=dg05ykl1&dl=0",
  },
  {
    name: "You Stepped Into My Life",
    artist: "BeeGees",
    file: "https://dl.dropboxusercontent.com/scl/fi/itxnvfa64b6x27z1cayxc/02-You-Stepped-Into-My-Life.mp3?rlkey=u4iel7asnycir22kymk1ktm0c&st=3jirnt49&dl=0",
  },
  {
    name: "Tell Me You Love Me",
    artist: "Demi Lovato",
    file: "https://dl.dropboxusercontent.com/scl/fi/1imcc5mqhcaxplqh2sivt/02-Tell-Me-You-Love-Me.mp3?rlkey=ockbrcc8zvxr5rd08okhxmr0q&st=h2p8mt88&dl=0",
  },
  {
    name: "Piano Man",
    artist: "Billy Joel",
    file: "https://dl.dropboxusercontent.com/scl/fi/ue8osc6copcadvzrcxhpd/02-Piano-Man.mp3?rlkey=bqwhjre32clop4g0jwubfb064&st=7rm34bqg&dl=0",
  },
  {
    name: "Night Fever",
    artist: "BeeGees",
    file: "https://dl.dropboxusercontent.com/scl/fi/etbf7ap39rmcnel450ddm/02-Night-Fever.mp3?rlkey=1h4wjib7rqg2747mzx5h6rgik&st=gt57ur1a&dl=0",
  },
 ];