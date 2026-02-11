// Centralized publications data - Real data from Annalisa Bruno's Google Scholar profile

export type Publication = {
  title: string;
  authors?: string;
  venue?: string;
  citedBy?: number;
  year: number;
  type?: string;
};

export const publications: Publication[] = [
  // 2026
  { title: "Amplified spontaneous emission dependence on temperature-induced crystalline phase transition in a solution processed MAPbBr 3 thin film", authors: "ML De Giorgi, T Lippolis, NF Jamaludin, C Soci, A Bruno, M Anni", venue: "Nanoscale", year: 2026 },
  { title: "Spacer Cation Design: Promoting Vertical Orientation in Layered Perovskites", authors: "A Scardina, TF Loeff, V Vikram, NM Tesarova, R Sala, L Marsano", venue: "EES Solar", year: 2026 },

  // 2025
  { title: "Intrinsic Sensitivity of Spin-Coated Lead Halide Perovskite Lateral X-ray Detectors Revealed by Removing Air-Ionization Contributions", authors: "C Xiao, F Maddalena, Q Wu, T Mariyappan, F Huang, M He, A Bruno", venue: "Proceedings of MATSUS Spring 2026 Conference", year: 2025 },
  { title: "Low-Threshold Superfluorescence and Phase Dynamics in Quasi-2D Metal Halide Perovskite Thin Films", authors: "Y Tang, HT Ching, G Ong, C Kulshreshtha, Z Xing, HA Dewi, LRW White", venue: "Advanced Materials", citedBy: 0, year: 2025 },
  { title: "Customized Growth of Perovskites for Advanced Photovoltaics and Optoelectronic Devices", authors: "A Bruno", venue: "Proceedings of Asia-Pacific International Conference on Perovskite, Organic", year: 2025 },
  { title: "Enhancing Wide-Bandgap Perovskite Solar Cells with Synergistic Surface and Bulk Passivation", authors: "T Mariyappan, HA Dewi, J Chakar, JB Puel, D De Luca, R Ahmad, Y Tang", venue: "ACS Energy Letters", citedBy: 2, year: 2025 },
  { title: "Temperature-Dependent Amplified Spontaneous Emission Across Crystalline Phase Transitions in Solution-Processed MAPbBr₃ Thin Films", authors: "ML De Giorgi, T Lippolis, NF Jamaludin, M Anni, A Bruno, C Soci", venue: "MDPI", year: 2025 },
  { title: "Vapor Deposition of Lead-Free Perovskites: Challenges and Opportunities", authors: "XY Chin, E Albanesi, A Bruno", venue: "Journal of Materials Chemistry", year: 2025 },
  { title: "Charge Carrier Dynamics and Transport in Halide Perovskite Semiconductors", authors: "XW Chua, Y Zhang, L RW White, S Pecorario, R JE Westbrook", venue: "Proceedings of MATSUS Fall 2025 Conference", year: 2025 },
  { title: "Thermally Evaporated Metal Halide Perovskites for Optoelectronics", authors: "HA Dewi, LRW White, D De Luca, R Ahmad, A Bruno", venue: "ACS Applied Energy Materials", citedBy: 4, year: 2025 },
  { title: "Transforming Near-Infrared Photodetectors with Perovskites: Materials, Strategies, and Future Outlook", authors: "R Xu, XY Chin, LRW White, SG Mhaisalkar, A Bruno", venue: "Energy & Fuels", citedBy: 8, year: 2025 },
  { title: "Enhancing Perovskite Device Performance through Scalable Thermal Evaporation Methods", authors: "A Bruno", venue: "Proceedings of International Conference on Perovskite Thin Film", year: 2025 },
  { title: "Real Sensitivity of Spin-Coated Lead Halide Perovskite Lateral X-ray Detectors", authors: "C Xiao, F Maddalena, Q Wu, T Mariyappan, F Huang, M He, A Bruno", venue: "ACS Applied Electronic Materials", citedBy: 1, year: 2025 },
  { title: "Buffer-Layer-Free Semitransparent Perovskite Solar Cells with Soft Sputtered Electrodes Optimized via Design of Experiments", authors: "D De Luca, JS Lee, HA Dewi, T Mariyappan, R Ahmad, SS Balaji", venue: "ACS Energy Letters", citedBy: 9, year: 2025 },
  { title: "Method of bandgap tuning of co-evaporated perovskite", authors: "A Bruno, HA DEWI, SG Mhaisalkar, N Mathews", venue: "US Patent App. 18/291,156", citedBy: 1, year: 2025 },
  { title: "Exploiting metal-halide perovskites thermal evaporation for device customization and quantum confinement", authors: "A Bruno, J Zuniga-Perez", venue: "Organic Photonic Materials and Devices XXVII", year: 2025 },
  { title: "Mechanism of Quantum Cutting in Yb-Doped CsPbCl3", authors: "SM Loh, Y Jing, TC Sum, A Bruno, SG Mhaisalkar, SA Blundell", venue: "The Journal of Physical Chemistry Letters", citedBy: 7, year: 2025 },
  { title: "From Scalable Solar Cells to Quantum Wells: Changing Perovskite Processes for Green Energy Applications", authors: "A Bruno", venue: "Proceedings of MATSUS Spring 2025 Conference", year: 2025 },

  // 2024
  { title: "Advancing perovskite and organic photovoltaics", authors: "G Tregnago", venue: "Nat Energy", citedBy: 1, year: 2024 },
  { title: "Stable and Highly Emissive Infrared Yb-Doped Perovskite Quantum Cutters Engineered by Machine Learning", authors: "Y Jing, AKY Low, Y Liu, M Feng, JWM Lim, SM Loh, Q Rehman", venue: "Advanced Materials", citedBy: 25, year: 2024 },
  { title: "Unraveling the Morphological and Energetic Properties of 2PACz Self-Assembled Monolayers Fabricated With Upscaling Deposition Methods", authors: "S Mariotti, IN Rabehi, C Zhang, X Huo, J Zhang, P Ji, T Wu, T Li, S Yuan", venue: "Energy & Environmental Materials", citedBy: 18, year: 2024 },
  { title: "MAPbI3 Perovskite Multiple Quantum Wells for Enhanced Light Emission and Detection", authors: "LRW White, FU Kosasih, K Ma, J Fu, M Feng, MP Sherburne, M Asta", venue: "ACS Energy Letters", citedBy: 14, year: 2024 },
  { title: "Accelerated MAPbI3 Co-evaporation: Productivity Gains without Compromising Performance", authors: "HA Dewi, E Erdenebileg, D De Luca, SG Mhaisalkar, A Bruno", venue: "ACS Energy Letters", citedBy: 19, year: 2024 },
  { title: "Superfluorescence in Metal Halide Perovskites", authors: "Y Tang, Y Jing, TC Sum, A Bruno, SG Mhaisalkar", venue: "Advanced Energy Materials", citedBy: 15, year: 2024 },
  { title: "Buried interface defects 2-bromo-1-ethylpyridinium tetrafluoroborate passivates tin oxide layer for high-performance planar perovskite solar cells", authors: "M Thambidurai, HA Dewi, W Xizu, A Kanwat, A Bruno, N Mathews", venue: "Materials Today Energy", citedBy: 1, year: 2024 },
  { title: "Vapor Phase Deposition of Perovskite Photovoltaics: Short Track to Commercialization?", authors: "A Tobias, D Moore, M Ross, S Albrecht, J Silvia, H Tan, Q Jeangros", venue: "Royal Society of Chemistry", year: 2024 },
  { title: "Recent developments in low-dimensional heterostructures of halide perovskites and metal chalcogenides as emergent materials", authors: "PYD Maulida, S Hartati, Y Firdaus, AT Hidayat, LJ Diguna, D Kowal", venue: "Chemical Physics Reviews", citedBy: 11, year: 2024 },
  { title: "Perovskite multiple quantum well superlattices: potentials and challenges", authors: "LRW White, FU Kosasih, MP Sherburne, N Mathews, S Mhaisalkar", venue: "ACS Energy Letters", citedBy: 22, year: 2024 },
  { title: "Towards scalability for metal halide perovskites photovoltaics", authors: "D De Luca, A Bruno", venue: "EPJ Web of Conferences", citedBy: 1, year: 2024 },
  { title: "Effects of co-doping the SnO 2 electron transport layer with boron and indium on the photovoltaic performance of planar perovskite solar cells", authors: "PG Wagle, M Thambidurai, HA Dewi, W Xizu, N Mathews, A Bruno", venue: "Sustainable Energy & Fuels", citedBy: 1, year: 2024 },
  { title: "Vapor phase deposition of perovskite photovoltaics: short track to commercialization?", authors: "T Abzieher, DT Moore, M Roß, S Albrecht, J Silvia, H Tan, Q Jeangros", venue: "Energy & Environmental Science", citedBy: 97, year: 2024 },
  { title: "Enhancing FAPbI 3 perovskite solar cell performance with a methanesulfonate-based additive", authors: "JJYW Foong, HA Dewi, AA Zhumekenov, B Febriansyah, A Bruno", venue: "Sustainable Energy & Fuels", citedBy: 8, year: 2024 },

  // 2023
  { title: "Solution-Processed, Highly Crystalline, and Oriented MAPbI3 Thin Films by Engineering Crystal-Growth Kinetics", authors: "R Ahmad, PJS Buenconsejo, MPA Lim, PC Harikesh, V Sugathan", venue: "Solar RRL", citedBy: 3, year: 2023 },
  { title: "Asynchronous Charge Carrier Injection in Perovskite Light-Emitting Transistors", authors: "M Klein, B Blecharz, WH Cheng, A Bruno, C Soci", venue: "Advanced Electronic Materials", citedBy: 5, year: 2023 },
  { title: "Co-evaporated pin perovskite solar cells with sputtered NiOx hole transport layer", authors: "E Erdenebileg, N Tiwari, FU Kosasih, HA Dewi, L Jia, N Mathews", venue: "Materials Today Chemistry", citedBy: 17, year: 2023 },
  { title: "Simultaneous improvement to performance and stability of perovskite solar cells through incorporation of imidazolium-based ionic liquid", authors: "M Thambidurai, HA Dewi, A Kanwat, SS Periyal, NF Jamaludin, A Bruno", venue: "Journal of Power Sources", citedBy: 9, year: 2023 },
  { title: "Light-emitting field-effect transistors (LET) based on metal halide perovskites", authors: "M Klein, A Bruno, C Soci", venue: "Metal Halide Perovskites for Generation, Manipulation and Detection of Light", citedBy: 1, year: 2023 },
  { title: "The role of Mg dopant concentration in tuning the performance of the SnO 2 electron transport layer in perovskite solar cells", authors: "GV Sannino, A Pecoraro, P Maddalena, A Bruno, PD Veneri, M Pavone", venue: "Sustainable Energy & Fuels", citedBy: 17, year: 2023 },

  // 2022
  { title: "Thermal evaporation and hybrid deposition of perovskite solar cells and mini-modules", authors: "FU Kosasih, E Erdenebileg, N Mathews, SG Mhaisalkar, A Bruno", venue: "Joule", citedBy: 146, year: 2022 },
  { title: "Back Cover Image", authors: "G Bhat, M Kielar, H Rao, MD Gholami, I Mathers, ACR Larin, T Flanagan", venue: "InfoMat", citedBy: 1, year: 2022 },
  { title: "Versatile aza-BODIPY-based low-bandgap conjugated small molecule for light harvesting and near-infrared photodetection", authors: "G Bhat, M Kielar, H Rao, MD Gholami, I Mathers, ACR Larin, T Flanagan", venue: "InfoMat", citedBy: 18, year: 2022 },
  { title: "Amplified spontaneous emission threshold dependence on determination method in dye-doped polymer and lead halide perovskite waveguides", authors: "S Milanese, ML De Giorgi, L Cerdán, MG La-Placa, NF Jamaludin", venue: "Molecules", citedBy: 20, year: 2022 },
  { title: "Halide perovskite solar cells for building integrated photovoltaics: Transforming building façades into power generators", authors: "TM Koh, H Wang, YF Ng, A Bruno, S Mhaisalkar, N Mathews", venue: "Advanced Materials", citedBy: 110, year: 2022 },
  { title: "Charge Carrier Dynamics in Co-evaporated MAPbI3 with a Gradient in Composition", authors: "J Zhao, J Li, X Liu, LJ Bannenberg, A Bruno, TJ Savenije", venue: "ACS Applied Energy Materials", citedBy: 8, year: 2022 },
  { title: "Alkali Additives Enable Efficient Large Area (>55 cm2) Slot-Die Coated Perovskite Solar Modules", authors: "PJS Rana, B Febriansyah, TM Koh, BT Muhammad, T Salim, TJN Hooper", venue: "Advanced Functional Materials", citedBy: 102, year: 2022 },
  { title: "Perovskite Solar Modules", authors: "A Bruno, A Di Carlo, UW Paetzold", venue: "Solar RRL", citedBy: 6, year: 2022 },
  { title: "Advances and Potentials of NiO x Surface Treatments for p-i-n Perovskite Solar Cells", authors: "N Tiwari, H Arianita Dewi, E Erdenebileg, R Narayan Chauhan", venue: "Solar RRL", citedBy: 50, year: 2022 },
  { title: "Semitransparent perovskite solar cells with> 13% efficiency and 27% transperancy using plasmonic Au nanorods", authors: "S Lie, A Bruno, LH Wong, L Etgar", venue: "ACS Applied Materials & Interfaces", citedBy: 68, year: 2022 },
  { title: "Interfacial passivation with 4-chlorobenzene sulfonyl chloride for stable and efficient planar perovskite solar cells", authors: "F Shini, M Thambidurai, HA Dewi, NF Jamaludin, A Bruno, A Kanwat", venue: "Journal of Materials Chemistry C", citedBy: 12, year: 2022 },
  { title: "Efficient bandgap widening in co-evaporated MAPbI 3 perovskite", authors: "HA Dewi, J Li, E Erdenebileg, H Wang, M De Bastiani, S De Wolf", venue: "Sustainable Energy & Fuels", citedBy: 28, year: 2022 },
  { title: "Low-Temperature Atomic Layer Deposited Electron Transport Layers for Co-Evaporated Perovskite Solar Cells", authors: "E Erdenebileg, H Wang, J Li, N Singh, HA Dewi, N Tiwari, N Mathews", venue: "Solar RRl", citedBy: 40, year: 2022 },

  // 2021
  { title: "Design of versatile and ultra-stable co-evaporated perovskites solar cells and minimodules", authors: "AD Herlina, E Erdenebileg, J Li, H Wang, N Mathews, S Mhaisalkar, A Bruno", venue: "Proceedings of International Conference on Perovskite Thin Film", year: 2021 },
  { title: "Co-Evaporated MAPbI3 with Graded Fermi Levels Enables Highly Performing, Scalable, and Flexible p-i-n Perovskite Solar Cells", authors: "J Li, HA Dewi, H Wang, J Zhao, N Tiwari, N Yantara, T Malinauskas", venue: "Advanced Functional Materials", citedBy: 86, year: 2021 },
  { title: "Slot-die coated methylammonium-free perovskite solar cells with 18% efficiency", authors: "M Fievez, PJS Rana, TM Koh, M Manceau, JH Lew, NF Jamaludin", venue: "Solar Energy Materials and Solar Cells", citedBy: 65, year: 2021 },
  { title: "Co-Evaporated Perovskite Light-Emitting Transistor Operating at Room Temperature", authors: "M Klein, J Li, A Bruno, C Soci", venue: "Advanced Electronic Materials", citedBy: 29, year: 2021 },
  { title: "Picosecond Charge Localization Dynamics in CH3NH3PbI3 Perovskite Probed by Infrared-Activated Vibrations", authors: "K Stallhofer, M Nuber, D Cortecchia, A Bruno, R Kienberger, F Deschler", venue: "The Journal of Physical Chemistry Letters", citedBy: 11, year: 2021 },
  { title: "Excellent Intrinsic Long-Term Thermal Stability of Co-Evaporated MAPbI3 Solar Cells at 85 °C", authors: "HA Dewi, J Li, H Wang, B Chaudhary, N Mathews, S Mhaisalkar, A Bruno", venue: "Advanced Functional Materials", citedBy: 89, year: 2021 },
  { title: "Vacuum-Processed Metal Halide Perovskite Light-Emitting Diodes: Prospects and Challenges", authors: "S Bhaumik, MR Kar, BN Thorat, A Bruno, SG Mhaisalkar", venue: "ChemPlusChem", citedBy: 20, year: 2021 },
  { title: "Colorful perovskite solar cells: progress, strategies, and potentials", authors: "H Wang, J Li, HA Dewi, N Mathews, S Mhaisalkar, A Bruno", venue: "The Journal of Physical Chemistry Letters", citedBy: 62, year: 2021 },
  { title: "Ammonium sulfate treatment at the TiO 2/perovskite interface boosts operational stability of perovskite solar cells", authors: "BT Muhammad, T Salim, A Bruno, AC Grimsdale, WL Leong", venue: "Journal of Materials Chemistry C", citedBy: 3, year: 2021 },

  // 2020
  { title: "Improving the Performance of Carbon-Based Perovskite Solar Modules (70 cm2) by Incorporating Cesium Halide in Mesoporous TiO2", authors: "KS Keremane, S Prathapani, LJ Haur, A Bruno, A Priyadarshi", venue: "ACS Applied Energy Materials", citedBy: 28, year: 2020 },
  { title: "Performance Enhanced Light-Emitting Diodes Fabricated from Nanocrystalline CsPbBr3 with In Situ Zn2+ Addition", authors: "P Vashishtha, BE Griffith, AAM Brown, TJN Hooper, Y Fang, MS Ansari", venue: "ACS Applied Electronic Materials", citedBy: 43, year: 2020 },
  { title: "Potassium acetate-based treatment for thermally co-evaporated perovskite solar cells", authors: "J Li, H Wang, HA Dewi, N Mathews, S Mhaisalkar, A Bruno", venue: "Coatings", citedBy: 22, year: 2020 },
  { title: "Realizing reduced imperfections via quantum dots interdiffusion in high efficiency perovskite solar cells", authors: "L Xie, P Vashishtha, TM Koh, PC Harikesh, NF Jamaludin, A Bruno", venue: "Advanced Materials", citedBy: 65, year: 2020 },
  { title: "Design of Perovskite Thermally Co-Evaporated Highly Efficient Mini-Modules with High Geometrical Fill Factors", authors: "L Li, HA Dewi, W Hao, L Jia Haur, N Mathews, S Mhaisalkar, A Bruno", venue: "Solar RRL", citedBy: 64, year: 2020 },
  { title: "Disordered polymer antireflective coating for improved perovskite photovoltaics", authors: "NR Thangavel, GWP Adhyaksa, HA Dewi, L Tjahjana, A Bruno", venue: "ACS Photonics", citedBy: 20, year: 2020 },
  { title: "Hybrid 2D [Pb(CH3NH2)I2]n Coordination Polymer Precursor for Scalable Perovskite Deposition", authors: "B Febriansyah, TM Koh, PJS Rana, TJN Hooper, ZZ Ang, Y Li, A Bruno", venue: "ACS Energy Letters", citedBy: 24, year: 2020 },
  { title: "Highly efficient thermally co-evaporated perovskite solar cells and mini-modules", authors: "J Li, H Wang, XY Chin, HA Dewi, K Vergeer, TW Goh, JWM Lim, JH Lew", venue: "Joule", citedBy: 396, year: 2020 },
  { title: "Origin of Amplified Spontaneous Emission Degradation in MAPbBr3 Thin Films under Nanosecond-UV Laser Irradiation", authors: "ML De Giorgi, T Lippolis, NF Jamaludin, C Soci, A Bruno, M Anni", venue: "The Journal of Physical Chemistry C", citedBy: 19, year: 2020 },
  { title: "Designing the perovskite structural landscape for efficient blue emission", authors: "N Yantara, NF Jamaludin, B Febriansyah, D Giovanni, A Bruno, C Soci", venue: "ACS Energy Letters", citedBy: 114, year: 2020 },
  { title: "Four-terminal perovskite on silicon tandem solar cells optimal measurement schemes", authors: "HA Dewi, H Wang, J Li, M Thway, F Lin, AG Aberle, N Mathews", venue: "Energy Technology", citedBy: 23, year: 2020 },
  { title: "Mixed-dimensional naphthylmethylammonium-methylammonium lead iodide perovskites with improved thermal stability", authors: "B Chaudhary, TM Koh, B Febriansyah, A Bruno, N Mathews", venue: "Scientific reports", citedBy: 59, year: 2020 },
  { title: "Low temperature, solution processed spinel NiCo2O4 nanoparticles as efficient hole transporting material for mesoscopic nip perovskite solar cells", authors: "A Bashir, S Shukla, R Bashir, R Patidar, A Bruno, D Gupta, MS Satti", venue: "Solar Energy", citedBy: 40, year: 2020 },
  { title: "Novel amphiphilic corannulene additive for moisture-resistant perovskite solar cells", authors: "BT Muhammad, V Barát, TM Koh, X Wu, A Surendran, N Yantara, A Bruno", venue: "Chemical Communications", citedBy: 16, year: 2020 },
  { title: "Investigating the structure-function relationship in triple cation perovskite nanocrystals for light-emitting diode applications", authors: "P Vashishtha, SA Veldhuis, SSH Dintakurti, NL Kelly, BE Griffith", venue: "Journal of Materials Chemistry C", citedBy: 43, year: 2020 },
  { title: "Roadmap for cost-effective, commercially-viable perovskite silicon tandems for the current and future PV market", authors: "SE Sofia, H Wang, A Bruno, JL Cruz-Campa, T Buonassisi, IM Peters", venue: "Sustainable Energy & Fuels", citedBy: 111, year: 2020 },

  // 2019
  { title: "Interlayer engineering for flexible large-area planar perovskite solar cells", authors: "J Li, G Han, K Vergeer, HA Dewi, H Wang, S Mhaisalkar, A Bruno", venue: "ACS Applied Energy Materials", citedBy: 16, year: 2019 },
  { title: "Bifacial, color-tunable semitransparent perovskite solar cells for building-integrated photovoltaics", authors: "H Wang, HA Dewi, TM Koh, A Bruno, S Mhaisalkar, N Mathews", venue: "ACS applied materials & interfaces", citedBy: 121, year: 2019 },
  { title: "Regulating Vertical Domain Distribution in Ruddlesden-Popper Perovskites for Electroluminescence Devices", authors: "N Yantara, NF Jamaludin, B Febriansyah, A Bruno, YB Tay, S Mhaisalkar", venue: "The Journal of Physical Chemistry Letters", citedBy: 6, year: 2019 },
  { title: "Highly efficient semitransparent perovskite solar cells for four terminal perovskite-silicon tandems", authors: "HA Dewi, H Wang, J Li, M Thway, R Sridharan, R Stangl, F Lin, AG Aberle", venue: "ACS applied materials & interfaces", citedBy: 109, year: 2019 },
  { title: "Perturbation-induced seeding and crystallization of hybrid perovskites over surface-modified substrates for optoelectronic devices", authors: "R Ahmad, A Surendran, PC Harikesh, R Haselsberger, NF Jamaludin", venue: "ACS applied materials & interfaces", citedBy: 15, year: 2019 },
  { title: "Cu-doped nickel oxide interface layer with nanoscale thickness for efficient and highly stable printable carbon-based perovskite solar cell", authors: "A Bashir, JH Lew, S Shukla, D Gupta, T Baikie, S Chakraborty, R Patidar", venue: "Solar Energy", citedBy: 95, year: 2019 },
  { title: "Improved Photovoltaic Efficiency and Amplified Photocurrent Generation in Mesoporous n = 1 Two-Dimensional Lead-Iodide Perovskite Solar Cells", authors: "B Febriansyah, TM Koh, Y Lekina, NF Jamaludin, A Bruno, R Ganguly", venue: "Chemistry of Materials", citedBy: 78, year: 2019 },
  { title: "Self-assembly of a robust hydrogen-bonded octylphosphonate network on cesium lead bromide perovskite nanocrystals for light-emitting diodes", authors: "AAM Brown, TJN Hooper, SA Veldhuis, XY Chin, A Bruno, P Vashishtha", venue: "Nanoscale", citedBy: 93, year: 2019 },
  { title: "Improved photovoltaic performance of triple-cation mixed-halide perovskite solar cells with binary trivalent metals incorporated into the titanium dioxide electron transport layer", authors: "M Thambidurai, S Foo, KMM Salim, PC Harikesh, A Bruno, NF Jamaludin", venue: "Journal of Materials Chemistry C", citedBy: 50, year: 2019 },

  // 2018
  { title: "Structure-controlled optical thermoresponse in Ruddlesden-Popper layered perovskites", authors: "D Cortecchia, S Neutzner, J Yin, T Salim, AR Srimath Kandada, A Bruno, C Soci", venue: "APL Materials", citedBy: 42, year: 2018 },
  { title: "Brightness enhancement in pulsed-operated perovskite light-emitting transistors", authors: "F Maddalena, XY Chin, D Cortecchia, A Bruno, C Soci", venue: "ACS applied materials & interfaces", citedBy: 67, year: 2018 },
  { title: "Inducing panchromatic absorption and photoconductivity in polycrystalline molecular 1D lead-iodide perovskites through π-stacked viologens", authors: "B Febriansyah, TM Koh, RA John, R Ganguly, Y Li, A Bruno", venue: "Chemistry of Materials", citedBy: 54, year: 2018 },
  { title: "Designing Efficient Energy Funneling Kinetics in Ruddlesden-Popper Perovskites for High-Performance Light-Emitting Diodes", authors: "N Yantara, A Bruno, A Iqbal, NF Jamaludin, C Soci, S Mhaisalkar", venue: "Advanced Materials", citedBy: 106, year: 2018 },
  { title: "Nitrogen doped cuprous oxide as low cost hole-transporting material for perovskite solar cells", authors: "G Han, WH Du, BL An, A Bruno, SW Leow, C Soci, S Zhang", venue: "Scripta Materialia", citedBy: 27, year: 2018 },
  { title: "Efficient and ambient-air-stable solar cell with highly oriented 2D@3D perovskites", authors: "T Ye, A Bruno, G Han, TM Koh, J Li, NF Jamaludin, C Soci, SG Mhaisalkar", venue: "Advanced Functional Materials", citedBy: 126, year: 2018 },
  { title: "Recovery of Shallow Charge-Trapping Defects in CsPbX3 Nanocrystals through Specific Binding and Encapsulation with Amino-Functionalized Silanes", authors: "V González-Pedro, SA Veldhuis, R Begum, MJ Bañuls, A Bruno", venue: "ACS Energy Letters", citedBy: 77, year: 2018 },
  { title: "Extended absorption window and improved stability of cesium-based triple-cation perovskite solar cells passivated with perfluorinated organics", authors: "KMM Salim, TM Koh, D Bahulayan, PC Harikesh, NF Jamaludin", venue: "ACS Energy Letters", citedBy: 60, year: 2018 },
  { title: "Additive selection strategy for high performance perovskite photovoltaics", authors: "G Han, HD Hadi, A Bruno, SA Kulkarni, TM Koh, LH Wong, C Soci", venue: "The Journal of Physical Chemistry C", citedBy: 112, year: 2018 },
  { title: "Crown Ethers Enable Room-Temperature Synthesis of CsPbBr3 Quantum Dots for Light-Emitting Diodes", authors: "SA Veldhuis, YF Ng, R Ahmad, A Bruno, NF Jamaludin, B Damodaran", venue: "ACS Energy Letters", citedBy: 129, year: 2018 },
  { title: "Engineering the emission of broadband 2D perovskites by polymer distributed bragg reflectors", authors: "P Lova, D Cortecchia, HN S. Krishnamoorthy, P Giusto, C Bastianini", venue: "ACS Photonics", citedBy: 45, year: 2018 },
  { title: "Self-assembled hierarchical nanostructured perovskites enable highly efficient LEDs via an energy cascade", authors: "XY Chin, A Perumal, A Bruno, N Yantara, SA Veldhuis, L Martínez-Sarti", venue: "Energy & Environmental Science", citedBy: 165, year: 2018 },
  { title: "Perovskite templating via a bathophenanthroline additive for efficient light-emitting devices", authors: "NF Jamaludin, N Yantara, YF Ng, A Bruno, BK Chandran, XY Chin", venue: "Journal of Materials Chemistry C", citedBy: 17, year: 2018 },
  { title: "Spinel Co 3 O 4 nanomaterials for efficient and stable large area carbon-based printed perovskite solar cells", authors: "A Bashir, S Shukla, JH Lew, S Shukla, A Bruno, D Gupta, T Baikie", venue: "Nanoscale", citedBy: 147, year: 2018 },
  { title: "Benzyl Alcohol-Treated CH3NH3PbBr3 Nanocrystals Exhibiting High Luminescence, Stability, and Ultralow Amplified Spontaneous Emission Thresholds", authors: "SA Veldhuis, YKE Tay, A Bruno, SSH Dintakurti, S Bhaumik, SK Muduli", venue: "Nano Letters", citedBy: 127, year: 2017 },

  // 2017
  { title: "Cathodoluminescence of self-organized heterogeneous phases in multidimensional perovskite thin films", authors: "D Cortecchia, KC Lew, JK So, A Bruno, C Soci", venue: "Chemistry of Materials", citedBy: 44, year: 2017 },
  { title: "Intrinsic Lead Ion Emissions in Zero-Dimensional Cs4PbBr6 Nanocrystals", authors: "J Yin, Y Zhang, A Bruno, C Soci, OM Bakr, JL Brédas, OF Mohammed", venue: "ACS Energy Letters", citedBy: 175, year: 2017 },
  { title: "Effect of Formamidinium/Cesium Substitution and PbI2 on the Long-Term Stability of Triple-Cation Perovskites", authors: "S Shukla, S Shukla, LJ Haur, SSH Dintakurti, G Han, A Priyadarshi", venue: "ChemSusChem", citedBy: 36, year: 2017 },
  { title: "Temperature and Electrical Poling Effects on Ionic Motion in MAPbI3 Photovoltaic Cells", authors: "A Bruno, D Cortecchia, XY Chin, K Fu, PP Boix, S Mhaisalkar, C Soci", venue: "Advanced Energy Materials", citedBy: 36, year: 2017 },
  { title: "ZnO nanorods/AZO photoanode for perovskite solar cells fabricated in ambient air", authors: "V La Ferrara, A De Maria, G Rametta, M Della Noce, LV Mercaldo", venue: "Materials Research Express", citedBy: 19, year: 2017 },
  { title: "Light-emitting device, method of forming and operating the same", authors: "C Soci, XY Chin, D CORTECCHIA, A Bruno, J Yin, F Maddalena", venue: "US Patent", citedBy: 11, year: 2017 },
  { title: "Highly efficient Cs-based perovskite light-emitting diodes enabled by energy funnelling", authors: "YF Ng, SA Kulkarni, S Parida, NF Jamaludin, N Yantara, A Bruno, C Soci", venue: "Chemical Communications", citedBy: 106, year: 2017 },
  { title: "Polaron self-localization in white-light emitting hybrid perovskites", authors: "D Cortecchia, J Yin, A Bruno, SZA Lo, GG Gurzadyan, S Mhaisalkar, C Soci", venue: "Journal of Materials Chemistry C", citedBy: 275, year: 2017 },

  // 2016
  { title: "X-ray scintillation in lead halide perovskite crystals", authors: "MD Birowosuto, D Cortecchia, W Drozdowski, K Brylew, W Lachmanski, A Bruno, C Soci", venue: "Scientific reports", citedBy: 413, year: 2016 },
  { title: "Lead-Free MA2CuClxBr4-x Hybrid Perovskites", authors: "D Cortecchia, HA Dewi, J Yin, A Bruno, S Chen, T Baikie, PP Boix, C Soci", venue: "Inorganic chemistry", citedBy: 627, year: 2016 },
  { title: "Facile synthesis of a hole transporting material with a silafluorene core for efficient mesoscopic CH 3 NH 3 PbI 3 perovskite solar cells", authors: "A Krishna, D Sabba, J Yin, A Bruno, LJ Antila, C Soci, S Mhaisalkar", venue: "Journal of Materials Chemistry A", citedBy: 43, year: 2016 },

  // 2015
  { title: "Facile Synthesis of a Furan-Arylamine Hole-Transporting Material for High-Efficiency, Mesoscopic Perovskite Solar Cells", authors: "A Krishna, D Sabba, J Yin, A Bruno, PP Boix, Y Gao, HA Dewi", venue: "Chemistry–A European Journal", citedBy: 64, year: 2015 },
  { title: "Lead iodide perovskite light-emitting field-effect transistor", authors: "XY Chin, D Cortecchia, J Yin, A Bruno, C Soci", venue: "Nature communications", citedBy: 875, year: 2015 },

  // 2014
  { title: "Morphological and spectroscopic characterizations of inkjet-printed poly (3-hexylthiophene-2, 5-diyl): Phenyl-C61-butyric acid methyl ester blends for organic solar cell", authors: "A Bruno, F Villani, IA Grimaldi, F Loffredo, P Morvillo, R Diana, S Haque", venue: "Thin Solid Films", citedBy: 20, year: 2014 },
  { title: "Ternary hybrid systems of P3HT-CdSe-WS 2 nanotubes for photovoltaic applications", authors: "A Bruno, C Borriello, SA Haque, C Minarini, T Di Luccio", venue: "Physical Chemistry Chemical Physics", citedBy: 25, year: 2014 },

  // 2013
  { title: "Determining the exciton diffusion length in a polyfluorene from ultrafast fluorescence measurements of polymer/fullerene blend films", authors: "A Bruno, LX Reynolds, C Dyer-Smith, J Nelson, SA Haque", venue: "The Journal of Physical Chemistry C", citedBy: 79, year: 2013 },
  { title: "Controlling the interaction of light with polymer semiconductors", authors: "C Hellmann, F Paquin, ND Treat, A Bruno, LX Reynolds, SA Haque", venue: "Advanced Materials", citedBy: 78, year: 2013 },

  // 2015 (additional)
  { title: "Optoelectronic properties of OLEDs based on CdSe/ZnS quantum dots and F8BT", authors: "C Borriello, CT Prontera, SA Mansour, S Aprano, MG Maglione, A Bruno...", venue: "physica status solidi (c)", citedBy: 5, year: 2015 },
  { title: "Influence of ligand exchange on the electrical transport properties of PbS nanocrystals", authors: "C Borriello, R Miscioscia, SA Mansour, T Di Luccio, A Bruno, F Loffredo...", venue: "physica status solidi (a)", citedBy: 11, year: 2015 },
  { title: "Spectroscopic investigation of flame synthesized carbon nanoparticle/P3HT blends", authors: "A Bruno, M Commodo, SA Haque, P Minutolo", venue: "Carbon", citedBy: 10, year: 2015 },
  { title: "Physicochemical evolution of nascent soot particles in a laminar premixed flame: from nucleation to early growth", authors: "M Commodo, G De Falco, A Bruno, C Borriello, P Minutolo, A D'Anna", venue: "Combustion and Flame", citedBy: 118, year: 2015 },
  { title: "Caratterizzazione teorico-sperimentazione di ricevitori ottimizzati per applicazioni solari termiche a media temperatura", authors: "A Ebolese, D Marano, G Canneto, V Sabatelli", venue: "Report RdS/PAR2014/232", citedBy: 1, year: 2015 },
  { title: "CH3NH3PbI3 Perovskite Light Emitting Field-Effect Transistor", authors: "XY Chin, D Cortecchia, J Yin, A Bruno, C Soci", venue: "The European Conference on Lasers and Electro-Optics, CE_12_3", year: 2015 },
  { title: "PbS nanocrystals in hybrid systems for solar cell applications", authors: "C Borriello, A Bruno, R Diana, T Di Luccio, P Morvillo, R Ricciardi...", venue: "physica status solidi (a)", citedBy: 21, year: 2015 },
  { title: "Further details on particle inception and growth in premixed flames", authors: "M Commodo, G Tessitore, G De Falco, A Bruno, P Minutolo, A D'Anna", venue: "Proceedings of the Combustion Institute", citedBy: 55, year: 2015 },

  // 2014
  { title: "Spectroscopic evaluation of mixing and crystallinity of fullerenes in bulk heterojunctions", authors: "AAY Guilbert, M Schmidt, A Bruno, J Yao, S King, SM Tuladhar...", venue: "Advanced functional materials", citedBy: 39, year: 2014 },
  { title: "Sviluppo e validazione sperimentale di metodiche per la caratterizzazione ottica e termica di concentratori a media temperatura", authors: "V Sabatelli, D Marano, A Ebolese, A Bruno, C Copeta", venue: "Report RdS/PAR2013/162", citedBy: 4, year: 2014 },
  { title: "Light extraction in organic light-emitting diode using PDMS/TiO2 scattering substrates", authors: "ADG Del Mauro, E Lepera, A Bruno, T Fasolino, MG Maglione, G Nenna...", venue: "2014 Fotonica AEIT Italian Conference on Photonics Technologies", citedBy: 1, year: 2014 },
  { title: "Photoresponse of pentacene-based transistors", authors: "F Loffredo, A Bruno, ADG Del Mauro, IA Grimaldi, R Miscioscia, G Nenna...", venue: "physica status solidi (a)", citedBy: 12, year: 2014 },
  { title: "Exciton dynamics in hybrid polymer/qd blends", authors: "A Bruno, T Di Luccio, C Borriello, F Villani, S Haque, C Minarini", venue: "Energy Procedia", citedBy: 8, year: 2014 },
  { title: "Carrier motion in as-spun and annealed P3HT: PCBM blends revealed by ultrafast optical electric field probing and Monte Carlo simulations", authors: "V Abramavičius, DA Vithanage, A Devižis, Y Infahsaeng, A Bruno...", venue: "Physical Chemistry Chemical Physics", citedBy: 32, year: 2014 },
  { title: "Microscopic and spectroscopic investigation of MoS2 nanotubes/P3HT nanocomposites", authors: "A Varlec, SA Mansour, TD Luccio, C Borriello, A Bruno, J Jelenc...", venue: "physica status solidi (a)", citedBy: 3, year: 2013 },

  // 2013
  { title: "White light-emitting nanocomposites based on an oxadiazole–carbazole copolymer (POC) and InP/ZnS quantum dots", authors: "A Bruno, C Borriello, T Di Luccio, G Nenna, L Sessa, S Concilio...", venue: "Journal of nanoparticle research", citedBy: 21, year: 2013 },
  { title: "Preparation and characterization of novel nanocomposites of WS2 nanotubes and polyfluorene conductive polymer", authors: "T Di Luccio, C Borriello, A Bruno, MG Maglione, C Minarini, G Nenna", venue: "physica status solidi (a)", citedBy: 8, year: 2013 },
  { title: "Insights on photophysical proprieties of DCM dye in PVK host matrix", authors: "A Bruno, ADGD Mauro, G Nenna, SA Haque, C Minarini", venue: "Polymer composites", citedBy: 8, year: 2013 },
  { title: "Emission Properties of Polydioctylfluorene and InP/ZnS Quantum Dots Nanocomposites Devices", authors: "C Borriello, A Bruno, G Nenna, M Maglione, G Pandolfi, C Minarini...", venue: "Sensor Letters", year: 2013 },
  { title: "Fast Fourier Transform and autocorrelation function for the analysis of complex mass spectra", authors: "B Apicella, A Bruno, X Wang, N Spinelli", venue: "International Journal of Mass Spectrometry", citedBy: 43, year: 2013 },
  { title: "Superconducting and structural properties of Nb films covered by plasma enhanced chemical vapor deposited a-Si: H layers for superconducting qubit application", authors: "A Bruno, P Mengucci, LV Mercaldo, MP Lisitskiy", venue: "Superconductor Science and Technology", citedBy: 7, year: 2013 },
  { title: "Armonizzazione dei sistemi di contabilità e bilancio: lo stato dell'arte della sperimentazione in Regione Campania", authors: "A Bruno", venue: "Finanza locale", citedBy: 5, year: 2013 },
  { title: "Electroluminescence and fluorescence emission of poly(n-vinylcarbazole) and poly(n-vinylcarbazole)--based organic light-emitting devices", authors: "A Bruno, A De Girolamo Del Mauro, G Nenna, MG Maglione, SA Haque...", venue: "Journal of Photonics for Energy", citedBy: 6, year: 2013 },

  // 2012
  { title: "Effect of multiple adduct fullerenes on microstructure and phase behavior of P3HT: fullerene blend films for organic solar cells", authors: "AAY Guilbert, LX Reynolds, A Bruno, A MacLachlan, SP King, MA Faist", venue: "Acs Nano", citedBy: 69, year: 2012 },
  { title: "Photoluminescence and energy transfer in PVK/DCM blends", authors: "A Bruno, ADG Del Mauro, G Nenna, MG Maglione, C Minarini", venue: "AIP Conference Proceedings", year: 2012 },
  { title: "Solvent effects on spectral emission of PVK and PVK-Ir (ppy) 3 based OLEDs", authors: "A Bruno, ADG Del Mauro, G Nenna, MG Maglione, SA Haque, C Minarini", venue: "Organic Photonics V", citedBy: 3, year: 2012 },
  { title: "Transient Optical Studies of Exciton Dynamics in Organic Solar Cells", authors: "LX Reynolds", venue: "Department of Chemistry, Imperial College London", year: 2012 },
  { title: "Research Article Optical Properties of Polystyrene-ZnO Nanocomposite Scattering Layer to Improve Light Extraction in Organic Light-Emitting Diode", authors: "G Nenna, ADG Del Mauro, E Massera, A Bruno, T Fasolino, C Minarini", year: 2012 },
  { title: "Thermal depinning of Abrikosov vortices in a Nb polycrystalline bulk absorber for gamma-ray superconducting detector", authors: "MP Lisitskiy, AP Volodin, A Bruno, C Van Haesendonck", venue: "Physics Procedia", citedBy: 1, year: 2012 },
  { title: "Investigation of the Superconducting Properties of Nb Films covered by PECVD a-Si: H Layers for Superconducting Qubit Application", authors: "A Bruno, P Mengucci, LV Mercaldo, MP Lisitskiy", venue: "Physics Procedia", citedBy: 5, year: 2012 },
  { title: "Investigation of dielectric losses in hydrogenated amorphous silicon (a-Si: H) thin films using superconducting microwave resonators", authors: "A Bruno, ST Skacel, C Kaiser, S Wünsch, M Siegel, AV Ustinov...", venue: "Physics Procedia", citedBy: 11, year: 2012 },
  { title: "Optical Properties of Polystyrene–ZnO Nanocomposite Scattering Layer to Improve Light Extraction in Organic Light–Emitting Diode", authors: "G Nenna, A De Girolamo Del Mauro, E Massera, A Bruno, T Fasolino...", venue: "Journal of Nanomaterials", citedBy: 29, year: 2012 },

  // 2011
  { title: "Ultrafast transient optical studies of charge pair generation and recombination in poly-3-hexylthiophene (P3ht):[6, 6] phenyl C61 butyric methyl acid ester (PCBM) blend films", authors: "J Kirkpatrick, PE Keivanidis, A Bruno, F Ma, SA Haque, A Yarstev...", venue: "The Journal of Physical Chemistry B", citedBy: 36, year: 2011 },
  { title: "Diffusivity in water and fluorescence properties of organic nanoparticles produced in flames", authors: "A Bruno, C de Lisio, M Iuorio, P Minutolo", venue: "Applied Physics B", year: 2011 },

  // 2010
  { title: "Triplet formation in fullerene multi-adduct blends for organic solar cells and its influence on device performance", authors: "C Dyer-Smith, LX Reynolds, A Bruno, DDC Bradley, SA Haque, J Nelson", venue: "Advanced Functional Materials", citedBy: 60, year: 2010 },
  { title: "Ultrafast Fluorescence Anisotropy for Combustion-Produced Nanoparticles Analysis", authors: "A Bruno, C de Lisio, P Minutolo", venue: "Handbook of Combustion: Online", year: 2010 },
  { title: "Time Resolved Fluorescence Anisotropy measurements of nanoparticle sizes in a diffusion flame", authors: "P Minutolo, F Ossler, C De Lisio, A Bruno, A D'Anna", venue: "International Conference on Processes and Technologies for a Sustainable", citedBy: 1, year: 2010 },

  // 2009
  { title: "The Impact of Nanoparticle Aggregation in Liquid Solution for Toxicological and Ecotoxicological Studies", authors: "ML Miglietta, G Rametta, G Di Francia, A Bruno, C De Lisio, G Leter...", venue: "Sensors and Microsystems: AISEM 2009 Proceedings", year: 2009 },
  { title: "Picosecond and nanosecond laser ionization for the on-line analysis of combustion-formed pollutant", authors: "B Apicella, X Wang, M Armenante, A Bruno, N Spinelli", venue: "Proceedings of the 32nd Meeting of the Italian Section of Combustion", citedBy: 2, year: 2009 },
  { title: "Optical characterization of particles collected from combustion systems by water-based sampling", authors: "P Minutolo, LA Sgro, A Bruno, A D'Anna, A D'Alessio", venue: "Combustion Generated Fine Carbonaceous Particles", year: 2009 },
  { title: "Characterization of particles collected from combustion systems by water-based sampling", authors: "P Minutolo, LA Sgro, A Bruno, A D'Anna, A D'Alessio", venue: "Combustion generated fine carbonaceous particles", citedBy: 4, year: 2009 },
  { title: "CARBON NANOPARTICLES DETECTION AND SIZING IN COMBUSTION SYSTEMS BY FLUORESCENCE ANALYSIS", authors: "A Bruno, C De Lisio, F Ossler, P Minutolo, A D'ALESSIO, N Spinelli", venue: "Sensors And Microsystems", year: 2009 },

  // 2008
  { title: "FUEL 146-Detection of fluorescent nanoparticles in flame with femtosecond laser-induced fluorescence anisotropy", authors: "B Annalisa, F Ossler, C de Lisio, P Minutolo, N Spinelli, A D'Alessio", venue: "ABSTRACTS OF PAPERS OF THE AMERICAN CHEMICAL SOCIETY", year: 2008 },
  { title: "In situ detection of soot nanoparticles by time-resolved fluorescence analysis", authors: "A Bruno, F Ossler, P Minutolo, C de Lisio", venue: "Journal of Optics A: Pure and Applied Optics", citedBy: 6, year: 2008 },
  { title: "Detection of fluorescent nanoparticles in flame with femtosecond laser-induced fluorescence anisotropy", authors: "A Bruno, F Ossler, C de Lisio, P Minutolo, N Spinelli, A D'Alessio", venue: "Optics Express", citedBy: 31, year: 2008 },
  { title: "Analysis of polycyclic aromatic hydrocarbon sequences in a premixed laminar flame by on‐line time‐of‐flight mass spectrometry", authors: "M Panariello, B Apicella, M Armenante, A Bruno, A Ciajolo, N Spinelli", venue: "Rapid Communications in Mass Spectrometry", citedBy: 36, year: 2008 },
  { title: "Measurements of nanoparticles of organic carbon and soot in flames and vehicle exhausts", authors: "LA Sgro, A Borghese, L Speranza, AC Barone, P Minutolo, A Bruno...", venue: "Environmental science & technology", citedBy: 72, year: 2008 },
  { title: "Real time analysis of polycyclic aromatic hydrocarbons from atmospheric pressure combustion sources", authors: "B Apicella, M Armenante, M Panariello, A Bruno, N Spinelli", venue: "Chem. Eng. Trans", citedBy: 2, year: 2008 },
  { title: "Time Resolved Fluorescence Anisotropy of Combustion Generated Nanoparticles Ex Situ and In Situ", authors: "A Bruno, P Minutolo, C de Lisio, N Spinelli, A D'Alessio", venue: "Chemical Engineering", year: 2008 },
  { title: "Analysis of combustion products by time of flight mass spectrometry", authors: "M Panariello, B Apicella, M Armenante, A Bruno, N Spinelli", venue: "Chem. Eng. Trans", citedBy: 1, year: 2008 },
  { title: "Analysis of PAH Mass Spectra Periodicity by Fast Fourier Transform", authors: "A Bruno, M Panariello, B Apicella, N Spinelli", venue: "Chemical Engineering", year: 2008 },
  { title: "FUEL 151-Microporous carbon films for maximizing supercapacitor performance", authors: "B Annalisa, F Ossler, C de Lisio, P Minutolo, N Spinelli, A D'Alessio", venue: "236th National Meeting of the American-Chemical-Society", year: 2008 },
  { title: "Time-resolved fluorescence polarization anisotropy of multimodal samples: the asphaltene case", authors: "A Bruno, M Alfè, A Ciajolo, C de Lisio, P Minutolo", venue: "Applied Physics B", citedBy: 4, year: 2008 },

  // 2007
  { title: "Evidence of fluorescent carbon nanoparticles produced in premixed flames by time-resolved fluorescence polarization anisotropy", authors: "A Bruno, C de Lisio, P Minutolo, A D'Alessio", venue: "Combustion and Flame", citedBy: 49, year: 2007 },

  // 2006
  { title: "Characterization of nanometric carbon materials by time-resolved fluorescence polarization anisotropy", authors: "A Bruno, M Alfè, B Apicella, C de Lisio, P Minutolo", venue: "Optics and lasers in engineering", citedBy: 19, year: 2006 },
  { title: "Characterization of ultrafast fluorescence from nanometric carbon particles", authors: "A Bruno, C de Lisio, P Minutolo, A D'Alessio", venue: "Journal of Optics A: Pure and Applied Optics", citedBy: 21, year: 2006 },
  { title: "Effect of silica on the catalytic destruction of chlorinated organics over V2O5/TiO2 catalysts", authors: "S Albonetti, S Blasioli, A Bruno, JE Mengou, F Trifiro", venue: "Applied Catalysis B: Environmental", citedBy: 44, year: 2006 },
  { title: "Experimental Techniques for the Detection of Nanoparticles and Soot in Flames, Engines exhausts and Urban Atmosphere", authors: "A D'Anna, P Minutolo, LA Sgro, A Barone, A Bruno, M Commodo...", venue: "CHEMICAL ENGINEERING TRANSACTIONS", year: 2006 },
  { title: "Characterization of nanoparticles formed in gas fuelled burners", authors: "P Minutolo, A Bruno, D Galla, A D'Anna, A D'Alessio", venue: "CHEMICAL ENGINEERING TRANSACTIONS", citedBy: 1, year: 2006 },
  { title: "Time resolved fluorescence anisotropy of organic nanoparticles formed in combustion processes", authors: "A Bruno, P Minutolo, C de Lisio, A D Alessio", venue: "EUROPHYSICS CONFERENCE ABSTRACTS ECA 30 (D)", year: 2006 },
  { title: "Infrared analysis of nano organic particles produced in laminar flames", authors: "G Rusciano, G Cerrone, A Sasso, A Bruno, P Minutolo", venue: "Applied Physics B", citedBy: 16, year: 2006 },

  // 2005
  { title: "Time resolved fluorescence polarization anisotropy of carbonaceous particles produced in combustion systems", authors: "A Bruno, C De Lisio, P Minutolo", venue: "Optics Express", citedBy: 38, year: 2005 },
  { title: "Aggregation and interactions of C60 and C70 fullerenes in neat N-methylpyrrolidinone and in N-methylpyrrolidinone/toluene mixtures", authors: "M Alfe, B Apicella, R Barbella, A Bruno, A Ciajolo", venue: "Chemical physics letters", citedBy: 65, year: 2005 },
  { title: "The effect of the nature of vanadium species on chlorinated organics total oxidation over TiO2 supported catalysts", authors: "S Albonetti, S Blasioli, A Bruno, J EPOUPA MENGOU, F Trifiro", venue: "Book of Abstracts-7th European Congress on Catalysis", year: 2005 },
  { title: "Dls Measurement of Nanometric Carbon Clusters Produced in Laminar Premixed Flames", authors: "A Bruno, D Cecere, P Minutolo, A D'Alessio", venue: "Frontiers of Optical Spectroscopy: Investigating Extreme Physical Conditions", year: 2005 },
  { title: "Solution behaviour of C 60 fullerene in N-Methylpyrrolidinone/toluene mixtures", authors: "M Alfè, R Barbella, A Bruno, P Minutolo, A Ciajolo", venue: "Carbon", citedBy: 16, year: 2005 },

  // 2004
  { title: "Time evolution of plasma afterglow produced by femtosecond laser pulses", authors: "AE Martirosyan, C Altucci, A Bruno, C de Lisio, A Porzio, S Solimeno", venue: "Journal of applied physics", citedBy: 35, year: 2004 },

  // 2003
  { title: "DLS measurements on nanoparticles produced in laminar premixed flames", authors: "D Cecere, A Bruno, P Minutolo, A d'Alessio", venue: "Synthetic metals", citedBy: 22, year: 2003 },

  // 2002
  { title: "Self-, nitrogen-, and oxygen-broadening coefficient measurements in the ν1 band of H2O using a difference frequency generation spectrometer at 3 μm", authors: "A Bruno, G Pesce, G Rusciano, A Sasso", venue: "Journal of Molecular Spectroscopy", citedBy: 19, year: 2002 },
  { title: "Detection and spectroscopy of the ν1+ ν3 band of N2O by difference-frequency spectrometer at 3 μm", authors: "A Bruno, G Pesce, G Rusciano, A Sasso", venue: "Spectrochimica Acta Part A: Molecular and Biomolecular Spectroscopy", citedBy: 9, year: 2002 },
  { title: "PRESSURE BROADENING ANALYSIS OF 1 AND 3 BANDS OF WATER VAPOUR BY DIFFERENCE FREQUENCY GENERATION", authors: "G Rusciano, A Sasso, A Bruno, G Pesce", venue: "JOURNAL OF MOLECULAR SPECTROSCOPY", year: 2002 },
  { title: "DETECTION AND SPECTROSCOPY OF THE 1+ 3 BAND OF N2O BY DIFFERECE-FREQUENCY SPECTROMETER AT 3 M", authors: "G Rusciano, A Sasso, A Bruno, G Pesce", venue: "SPECTROCHIMICA ACTA. PART A, MOLECULAR AND BIOMOLECULAR SPECTROSCOPY", year: 2002 },
  { title: "Spectroscopy of engines and flames produced nano organic compounds suspended in water", authors: "A Bruno, C de Lisio, D Galla, P Minutolo, A D'Alessio", venue: "Proc. 29th Symp.(Int.) on Combustion", citedBy: 1, year: 2002 },
];
