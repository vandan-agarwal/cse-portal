//conference-component
Vue.component('conference-item',{
    props: ['conference'],
    template:     
    '<li><span v-html="conference.detail"></span></li></br>'
})

//conference-object
var conference = new Vue({
    el: '#conference-list',
    data: {
      ConferencesList:
      [   
{
    detail: 'Anirban Sengupta, Shubha Neema, Pallabi Sarkar, Sri Harsha, Saraju P Mohanty, Mrinal Kanti Naskar, <strong>"Obfuscation of Fault Secured DSP Design through Hybrid Transformation",</strong> Proceedings of 17th IEEE Computer Society Annual Symposium on VLSI (ISVLSI), Accepted, 2018.',
},     
{
  detail: 'Anirban Sengupta, Saraju P. Mohanty, <strong>"Functional Obfuscation of DSP cores using Robust Logic Locking and Encryption",</strong> Proceedings of 17th IEEE Computer Society Annual Symposium on VLSI (ISVLSI),  Accepted, 2018.',
},     
{
  detail: 'Anirban Sengupta, Hui Zhao, Saraju P. Mohanty, <strong>"Energy Efficient and Hardware Secured Architectures for Smart Electronics",</strong> Proceedings of 17th IEEE Computer Society Annual Symposium on VLSI (ISVLSI), Accepted, 2018.',
},     
{
  detail: 'Anirban Sengupta, Jong Lee, <strong>"Message from the Technical Program Chairs",</strong> Proceedings of 36th IEEE International Conference on Consumer Electronics (ICCE), Las Vegas, Jan 2018.',
},     
{
  detail: 'Anirban Sengupta, Dipanjan Roy, <strong>"Multi-Phase Watermark for IP Core Protection",</strong> Proc. 36th IEEE International Conference on Consumer Electronics (ICCE) 2018, Las Vegas, 2018.',
},     
{
  detail: 'Dipanjan Roy, Anirban Sengupta, <strong>"Reusable Intellectual Property Core Protection for Both Buyer and Seller",</strong> Proc. 36th IEEE International Conference on Consumer Electronics (ICCE) 2018, Las Vegas, 2018.',
},     
{
  detail: 'Dipanjan Roy, Anirban Sengupta <strong>"Reusable Intellectual Property Core Protection for Both Buyer and Seller",</strong> Proc. 36th IEEE International Conference on Consumer Electronics (ICCE) 2018, Las Vegas, Accepted, Jan 2018.',
},     
{
  detail: 'Anirban Sengupta, Dipanjan Roy <strong>"Multi-Phase Watermark for IP Core Protection",</strong> Proc. 36th IEEE International Conference on Consumer Electronics (ICCE) 2018, Las Vegas, Accepted, Jan 2018.',
},   
{
  detail: 'Anirban Sengupta <strong>"Architecture-Level Energy, Security, and Reliability Solutions for CE Digital Hardware",</strong> Proc. 36th IEEE International Conference on Consumer Electronics (ICCE) 2018, Las Vegas, Accepted, Jan 2018.',
},   
{
  detail: 'Anuja Tayal, Neminath Hubballi, Maitreya Natu and Vaishali Sadaphal, <strong>"Congestion-Aware Probe Selection for Fault Detection in Networks" 10th International Conference on Communications Systems and Networks (COMSNETS 2018)",</strong> Bangalore, India  (Jan 2018)',
},     
{
  detail: 'Anirban Sengupta, "<strong>Reliability and Performance Aware SoC solutions for IoT Framework</strong>", IEEE International Symposium on Nanoelectronic and Information Systems (iNIS), Dec 2017.',
},    
{
  detail: 'Anirban Sengupta, Dipanjan Roy <strong>“Mathematical Validation of 2D HWT based Lossless Image Compression for CE applications”,</strong> Proc. IEEE International Symposium on Nanoelectronic and Information Systems (iNIS), Accepted, Dec 2017. ',
},    
{
  detail: 'Pallabi Sarkar, Anirban Sengupta, Santosh Rathlavat, Mrinal Kanti Naskar <strong>“A Firefly Algorithm Driven Approach for High Level Synthesis”,</strong> Proc. IEEE International Symposium on Nanoelectronic and Information Systems (iNIS), Accepted, Dec 2017.',
},    
{
  detail: 'Deepak Kachave, Anirban Sengupta, Shubha Neema, Sri Harsha <strong>“Reliability and Threat analysis of NBTI Stress on DSP cores”</strong>Proc. IEEE International Symposium on Nanoelectronic and Information Systems (iNIS), Accepted, Dec 2017.',
},    
{
  detail: 'Vipul Mishra, Anirban Sengupta <strong>“Comprehensive Operation Chaining Based Schedule Delay Estimation during High Level Synthesis”,</strong> Proc. IEEE International Symposium on Nanoelectronic and Information Systems (iNIS), Accepted, Dec 2017.',
},    
{
  detail: 'Neminath Hubballi and Mayank Swarnkar, <strong>"BitCoding : Protocol Type Agnostic Robust Bit Level Signatures for Traffic Classification",</strong>IEEE Global Communications Conference (GLOBECOM ) (To Appear Dec 2017)',
},    
{
  detail: 'Anuja Total, Neminath Hubballi and Nikhil Tripathi,  <strong>"Communication recurrence and similarity detection in network flows",</strong> IEEE  International Conference on Advanced Networks and Telecommunications System (ANTS), Dec 2017.',
},    
{
  detail: 'Himsnshu Dogra, Sudhakar Verma, Neminath Hubballi and Mayank Swarnkar,  <strong>"Security Service level agreements in Cloud :a proof of concept implementation",</strong> International Conference on  Advanced Networks and Telecommunications Systems (ANTS), Dec 2017.',
},    
{
  detail: 'Nikhil Tripathi, Neminath Hubballi and  Mayank Swarnkar,  <strong>"DNS Spoofing in local networks made easy",</strong> International Conference on Advanced Networks and Telecommunications System (ANTS), Dec 2017',
},    
{
  detail: 'G. Iyyakutti Iyappan and Surya Prakash, "<strong> 3D Ear based Human Recognition Using Gauss Map Clustering</strong>", 10th Annual ACM India Conference (ACM Compute 2017), Bhopal, India,  Nov 2017.',
},    
{
  detail: 'Syed Sadaf Ali and Surya Prakash, "<strong>Fingerprint Shell construction with prominent minutiae points</strong>", 10th Annual ACM India Conference (ACM Compute 2017), Bhopal, India, Nov 2017',
},    
{
  detail: 'Dipanjan Roy, Anirban Sengupta "<strong>Low overhead symmetrical protection of reusable IP core using robust fingerprinting and watermarking during high level synthesis</strong>", Cyber Security Awareness Applied Research, IIT Kanpur- New York University, Accepted, Nov 2017.  ',
},    
{
  detail: 'Deepak Kachave, Anirban Sengupta <strong>"Forensic engineering for resolving ownership problem of reusable IP core generated during high level synthesis"</strong>, Cyber Security Awareness Applied Research, IIT Kanpur- New York University, Accepted, Nov 2017.  ',
},    
{
  detail: 'Saumya Bhadauria, Anirban Sengupta, Saraju P Mohanty <strong>"Methodology for Low Cost Hardware Trojan Security Aware Scheduling With Optimal Loop Unrolling Factor During High Level Synthesis"</strong> Cyber Security Awareness Applied Research, IIT Kanpur- New York University, Accepted, Nov 2017.  ',
},    
{
  detail: 'Muhammad Yasin, Bodhisatwa Mazumdar, Jeyavijayan Rajendran, Ozgur Sinanoglu, "<strong>TTLock: Tenacious and Traceless Logic Locking</strong>", IEEE International Symposium on Hardware Oriented Security and Trust, May 1-5, 2017,Mclean, VA, USA.',
},    
{
  detail: 'Anirban Sengupta&nbsp;<strong>"Architecture-Level Energy, Security, and Reliability Solutions for CE Digital Hardware"</strong>,&nbsp;36th IEEE International Conference on Consumer Electronics (ICCE), Las Vegas, March 2017.',
},    
{
  detail: 'Deepak Kachave, Anirban Sengupta <strong>"Protecting Ownership of Reusable IP Core Generated during High Level Synthesis&quot;</strong>, Proc. IEEE International    Symposium on Nanoelectronic and Information Systems (iNIS), Dec 2016.',
},    
{
  detail: 'Nikhil Tripathi and Neminath Hubballi, <strong>&quot;A Probabilistic Anomaly Detection Scheme to Detect DHCP Starvation Attacks &quot;</strong> 10th IEEE International Conference on Advanced Networks and Telecommunications Systems (To Appear)  November 2016.',
},    
{
  detail: 'Rajat Saxena and Somnath Dey,&nbsp; <strong>&quot;Cloud Audit: A Data Integrity Verification Approach for Cloud Computing&quot;</strong>,&nbsp; Twelfth International Conference on Communication Networks (ICCN 2016), August 19&ndash; 21, 2016, Bangalore, India, (Procedia Computer Science, vol. 89,&nbsp;&nbsp; pp. 142-151).',
},    
{
  detail: 'Sainath Bhattala, Mayank Swarnkar, Neminath Hubballi and Maitreya Natu, <strong>&quot;VoIP Profiler: Profiling Voice Over IP Communication for User Classification&rdquo;</strong>, The 11th International Workshop on Frontiers in Availability, Reliability and Security (FARES 2016) held along with ARES 2016 (Double Blind Review)  Aug 2016.',
},    
{
  detail: 'Nikhil Tripathi ,Neminath Hubballi and Yogendra Singh <strong>&quot;How Secure are Web Servers? An Empirical Study of Slow HTTP DoS Attacks and Detection&quot;</strong>,The 3rd International Workshop on Software Assurance (SAW 2016) held along with ARES 2016 (Double Blind Review) Aug 2016.',
},    
{
  detail: 'Neminath Hubballi and Himanshu Dogra, <strong>&quot;Detecting Packed Executable File: Supervised or Anomaly Detection Method ?&quot;</strong>, The 1st International Workshop on Malware Analysis (WMA 2016) held along with ARES 2016 (Double Blind Review)  Aug 2016.',
},    
{
  detail: 'Chandan Gautam, Aruna  Tiwari and Sriram Ravindran, <strong>&quot;Construction of Multi-class  Classifiers by Extreme Learning Machine Based One Class Classifiers&quot;</strong>,&nbsp;  International Joint Conference on Neural Networks (IJCNN 2016), Sponsored by  the IEEE Computational Intelligence Society (CIS), IEEE WCCI 2016, Vancouver,  Canada, 24-29 July 2016.',
},  
{
  detail: 'Neha Bharill, Aruna  Tiwari, Aayushi Malviya, <strong>&quot;Fuzzy Based Clustering Algorithms to Handle Big  Data with Implementation on Apache Spark&quot;</strong>,&nbsp; IEEE Big Data Service 2016  Exeter College, Oxford, UK, March 29- April 1, 2016. (IEEE Computer Society  Conference), 2016.',
},
{
  detail: 'Rajat Saxena and Somnath Dey,&nbsp;<strong>&quot; A Novel Authentication Approach for Cloud Computing&quot;</strong>,&nbsp; International Conference on Recent Trends in Engineering and Material Sciences (ICEMS-2016), March 17-19, 2016, Jaipur, India, p. 214.',
},
{
  detail: 'Diksha Golait and Neminath Hubballi, &quot;<strong>VoIPFD: Voice Over IP Flooding Detection</strong>", 22nd National Conference on Communication (NCC 2016), IIT Guwahati, India&nbsp;To Appear.&nbsp;',
},
{
  detail: 'Anirban Sengupta, Saumya Bhadauria, Saraju Mohanty <strong>&quot;Embedding Low Cost Optimal Watermark During High Level Synthesis for Reusable IP Core Protection&quot;</strong>, Proc. of 48th IEEE Int\'l Symposium on Circuits &amp; Systems (ISCAS), Montreal, March 2016.',
},
{
  detail: 'Anirban Sengupta, Deepak Kachave <strong>&quot;Generating Multi-Cycle and Multiple Transient Fault Resilient Design during Physically Aware High Level Synthesis&quot;</strong>, Proc. 15th IEEE Computer Society Annual Symposium on VLSI (ISVLSI), Pittsburgh, March 2016',
},
{
  detail: 'Bharath Subrananyan, Piyush Joshi, Manoj Kumar Meena  and Surya Prakash, "<strong>Quality Based Classification Of Images For Illumination Invariant Face Recognition"</strong>, IEEE International Conference on Identity, Security and Behavior Analysis (ISBA 2016), Sendai, Japan, February-March 2016. &nbsp;(Double Blind Review).',
},
{
  detail: 'Iyyakutti Iyappan G and Surya Prakash, &quot;<strong>False Mapped Feature Removal in Spin Image based 3D Ear Recognition&quot;</strong>, International Conference on Signal Processing and Integrated Networks (SPIN 2016), NOIDA-Delhi, February 12-13, 2016.',
},
{
  detail: 'Saumya Bhadauria, Anirban Sengupta, "<strong>A High Level Synthesis Approach for Exploring Low Cost kc-cycle Transient Fault Secured Solution</strong>",&nbsp;21st Asia South Pacific-Design Automation Conference (ASP-DAC),<strong>&nbsp;</strong>Jan 2016,&nbsp;.',
},
{
  detail: 'Sainath Batthala, Neminath Hubballi, Maitreya Natu and Vaishali Sadaphal "<strong>Answering If- What Questions to Manage Batch Systems</strong>",22nd annual IEEE International Conference on High Performance Computing (HiPC 2015), Bangalore, India.',
},
{
    detail: 'Nikhil Tripathi and Neminath Hubballi, <strong>"Exploiting DHCP Server-side IP Address Conflict Detection: A DHCP Starvation Attack"</strong>, Ninth IEEE International Conference on Advanced Networks and Telecommunications Systems (ANTS 2015), ISI Kolkata, India&nbsp;(',
  },
{
  detail: 'Mayank Swarnkar and Neminath Hubballi, <strong>"Rangegram: A Novel Payload based Anomaly Detection Technique Against Web Traffic"</strong>, Ninth IEEE International Conference on Advanced Networks and Telecommunications Systems (ANTS 2015), ISI Kolkata, India&nbsp;(',
},
{
  detail: 'Anirban Sengupta and Saumya Bhadauria, &ldquo;<strong>Secure Information Processing during System level: Exploration of an Optimized Trojan Secured Datapath for CDFGs during HLS based on User Constraints</strong>&rdquo;,&nbsp;&nbsp;Proceedings of IEEE iNIS 2015 Special Session,&nbsp;Dec 2015.',
},
{
  detail: 'Chandan Gautam, Aruna Tiwari, <strong>&quot;On The Construction of Extreme Learning Machine for One Class  Classifier&quot;</strong>,&nbsp; The International Conference on Extreme Learning Machines  (ELM2015), Hangzhou, China, 15-17 Dec 2015 , &nbsp;vol. 6, &nbsp; pp. 447-461,  &nbsp; 2015.',
},
{
  detail: 'Omprakash Patel, Aruna Tiwari, Ojas Gupta, Vikram Patel ,  &nbsp;<strong>&quot;A Quantum-based Neural Network Classifier and its application for  Firewall to Detect Malicious Web Request&quot;</strong>,&nbsp; IEEE Symposium Series on  Computational Intelligence&rdquo;, 7-10 Dec. 2015, Captown, South Africa , pp. 67 - 74, 2015.',
},
{
  detail: 'Neha Bharill , Om Prakash  Patel, Aruna Tiwari, &nbsp;<strong>"An Enhanced Quantum-Inspired Evolutionary Fuzzy  Clustering"</strong>,&nbsp; IEEE Symposium Series on Computational Intelligence&rdquo;, 7-10  Dec. 2015, Captown, South Africa , pp. 772 - 779, 2015.',
},
{
  detail: 'Sriram  Ravindran, Chandan Gautam, Aruna Tiwari, &nbsp;<strong>&quot;Keystroke user recognition  through Extreme Learning Machine and evolving cluster method&quot;</strong>,&nbsp; ICCIC 2015  - IEEE International Conference on Computational Intelligence and Computing  Research, 10-12 Dec. 2015, Madurai, Tamilnadu, India (Best Paper Award), pp. 1 - 5, &nbsp; 2015.',
},
{
  detail: 'Gourinath B., Chaitanya B.K. and Harsh M,&nbsp;<strong>"An IoT Protocol and Framework for OEMs to make IoT-enabled devices forward compatible"</strong>, n IEEE 11th International Conference in Signal &amp; Image Technologies and Internet-based Systems (SITIS-2015), Bangkok, Thailand, November 2015 (To Appear).',
},
{
  detail: 'Anirban Sengupta&nbsp;<strong>&ldquo;Reliability and Security Aware RTL/System Design&rdquo;,&nbsp;</strong>Special Session in IEEE iNIS 2015,&nbsp;Participants: Intel Corporation, Broadcom Corporation (USA), Pennsylvania State University (USA) and Indian Institute of Science,&nbsp;Proposal.'
}, 
{
  detail: '&nbsp;Rajat Saxena and Somnath Dey, <strong>&quot;Cloud Shield: Effective Solution for DDoS in Cloud&quot;</strong>, The 8th International Conference on Internet and Distributed Computing Systems (IDCS 2015), September 2-4, 2015, Windsor, UK, . vol. LNCS 9258,&nbsp;&nbsp; pp. 3-10.',
},    
  {
      detail: 'Om Prakash  Patel, Neha Bharill, Aruna Tiwari,<strong> &quot;A Quantum-Inspired Fuzzy Based  Evolutionary Algorithm for Data Clustering&quot;</strong>,&nbsp; IEEE International Conference  on Fuzzy Systems (FUZZ-IEEE 2015),), 2-5 Aug. 2015, Istanbul, Turkey , &nbsp;  &nbsp; pp. 1 - 8, &nbsp; 2015.',
    },
{
  detail: 'Arpit Bhardwaj, Aruna Tiwari, M. Vishaal Varma, M. Ramesh Krishna,  <strong>&quot;An Analysis of Integration of Hill Climbing in Crossover and Mutation Operation for EEG Signal Classification&quot;</strong>,  Genetic and Evolutionary Computation Conference, GECCO, 11-15 July 2015,     pp. 209-216,   2015',
},
{
  detail: 'Omprakash Patel, Aruna Tiwari,<strong>"Advance Quantum inspired binary neural network algorithm"</strong>,  16th International Conference on Software Engineering, Artificial Intelligence, Networking and Parallel/Distributed Computing (SNPD 2015), June 1-3, 2015, Takamatsu, Japan, (IEEE Xplore) ., pp. 1-6, 2015.',
},
{
  detail: 'Sri Yogesh Dorbala, Kishore R and Neminath Hubballi, <strong>"An Experience Report on Scalable Implementation of DDoS Attack Detection"</strong> Fifth International Workshop on Information Systems Security (WISSE 2015) held with 27th CAiSE\'15.',
},
{
  detail: 'Jayeeta Dutta, Neha Kataria and Neminath Hubballi,<strong> "Network Traffic Classification in Encrypted Environment: A Case Study of Google Hangout"</strong> 21st National Conference on Communication (NCC 2015), IIT Bombay, India.',
},
{
  detail: 'Anirban Sengupta, Saumya Bhadauria, <strong> "Automated Design Space Exploration of Transient Fault Detectable Datapath Based on User Specified Power and Delay Constraints,"</strong> Proceedings of 33rd VLSI - Design, Automation & Test (VLSI - DAT), Taiwan, 2015.  &nbsp;',
},
{
  detail: 'Anirban Sengupta, Saumya Bhadauria, <strong> "Untrusted Third Party Digital IP cores: Power-Delay Trade-off Driven Exploration of Hardware Trojan Secured Datapath during High Level Synthesis,"</strong> Proc. of 25th IEEE/ACM Great Lake Symposium on VLSI (GLSVLSI), Pennsylvania, May 2015 (DOUBLE BLIND REVIEW).  &nbsp;',
},
{
  detail: 'Anirban Sengupta, Vipul Kumar Mishra and Reza Sedaghat,  <strong> &ldquo;Exploration of Optimal Multi-Cycle Transient Fault Secured Datapath during High Level Synthesis based on User Area-Delay Budget&rdquo;, </strong> &nbsp;Proceedings of 28th&nbsp;IEEE Canadian Conference on Electrical &amp; Computer Engineering (CCECE), Halifax,&nbsp;May 2015.',
},
{
  detail: 'Pallabi Sarkar,&nbsp;Anirban Sengupta, Mrinal Kanti Naskar, <strong>&ldquo;GA Driven Integrated Exploration of Loop Unrolling Factor and Datapath For Optimal Scheduling of CDFGs During High Level Synthesis&rdquo;,&nbsp;</strong>Proceedings of 28th&nbsp;IEEE Canadian Conference on Electrical &amp; Computer Engineering (CCECE), Halifax,&nbsp;May 2015.',
},
{
  detail: 'Piyush Joshi and Surya Prakash, <strong> "An efficient technique for Image Contrast Enhancement using Artificial Bee Colony, IEEE International Conference on Identity, Security and Behavior Analysis (ISBA 2015),"</strong> Hong Kong, China, March 2015.&nbsp;',
},
{
  detail: 'Anirban Sengupta&nbsp;<i><strong>"User Power-Delay Budget Driven PSO Based Design Space&nbsp;Exploration of Optimal k-cycle Transient Fault Secured&nbsp;Datapath during High Level Synthesis"&nbsp;</strong></i>Proceedings of 16th IEEE International Symposium on Quality Electronic Design (ISQED) 2015, California,&nbsp;bsp;<u>(Double Blind Review).</u>',
},
{
  detail: 'Rudresh Dwivedi, Somnath Dey, <strong>&quot;Cancelable Iris Template Generation using Look-up Table Mapping, The Second International Conference on Signal Processing and Integrated Networks (SPIN 2015)&quot;</strong>, 19-20 February, 2015, pp: 785 -- 790, Noida, India (IEEE Xplorer).',
},
{
  detail: 'Syed Sadaf Ali and Surya Prakash, <strong> "Enhanced Fingerprint Shell, International Conference on Signal Processing and Integrated Networks (SPIN 2015),"</strong> NOIDA-Delhi, February 2015.',
},
{
  detail: 'Piyush Joshi and Surya Prakash, <strong>"A Quality Aware Technique for Biometric Recognition, International Conference on Signal Processing and Integrated Networks (SPIN 2015),"</strong> NOIDA-Delhi, February 2015.',
},
{
  detail: 'Neha Bharill, Aruna Tiwari, <strong>&quot;A novel technique  of feature extraction based on local and global similarity measure for protein  sequence classification&quot;</strong>,&nbsp; International conference on Bioinformatics  Models, Methods and Algorithms (BIOINFORMATICS-2015), Libson, Portugal, pp. 219-224, &nbsp;12-15 Jan&nbsp; 2015.',
},
{
  detail: 'Neminath Hubballi and Vinoth Suryanarayanan, <strong>"Application Workload Pattern and Its Implications for Resource Provisioning in Cloud: An Early Experience"</strong>, 35th IEEE Region 10 Conference (TENCON 2014), Bangkok, Thailand.',
},
{
  detail: 'Omprakash Patel, Aruna  Tiwari, <strong>&quot;Quantum Inspired Binary Neural Network Algorithm&quot;</strong>,&nbsp;  International Conference on Information Technology (ICIT),Bhubaneswar, India,  IEEEE, pp. 270-274, &nbsp; 21-23 Dec 2014',
},
{
  detail: 'Anirban Sengupta, Vipul Mishra, <i><strong>&ldquo;Multidimensional Encoding Based Evolutionary Exploration Approach: Adaptive Methodology for Parametric Trade-offs in High Level Synthesis for Control flow Graphs&rdquo</strong></i>;,&nbsp;Proceedings of 3rd&nbsp;IEEE CALCON, IEEE Kolkata, Nov 2014, pp. 43 - 46.&nbsp;',
},
{
  detail: 'Anirban Sengupta&nbsp;and Vipul Kumar Mishra, <i><strong>"Time Varying vs. Fixed Acceleration Coefficient PSO Driven Exploration during High Level Synthesis: Performance and Quality ",&nbsp;</strong>Proceedings of 13th IEEE International Conference on Information&nbsp; Technology</strong></i>, 2014 (DOUBLE BLIND REVIEW).',
},
{
  detail: 'Anirban Sengupta&nbsp; and Saumya Bhadauria, <i><strong>"Error Masking of Transient Faults: Exploration of a Fault Tolerant Datapath Based on User Specified Power and Delay Budget",&nbsp;</strong></i>Proceedings of 13th IEEE International Conference on Information&nbsp; Technology, 2014 (DOUBLE BLIND REVIEW).',
},
{
  detail: 'Vipul Mishra, Anirban Sengupta,<i><strong>"PSDSE: Particle Swarm Driven Design Space Exploration of Architecture and Unrolling Factors for Nested Loops in High Level Synthesis"</strong></b></i>, Proceedings of 5th IEEE International Symposium on Electronic Design (ISED), Dec 2014.',
},
{
  detail: 'Omprakash Patel,  Aruna Tiwari, &nbsp;<strong>&quot;Quantum Based Learning with Binary Neural Network&quot;</strong>,&nbsp;  International Conference on Computational Intelligence in Data Mining,  Sambalpur, India, &nbsp;vol. 32, &nbsp; pp. 473-482, 19-21 December 2014.',
},
{
  detail: 'Omprakash Patel, Aruna Tiwari,<strong> &quot;Liver Disease Diagnosis using Quantum based Binary Neural Network  Learning Algorithm&quot;</strong>,&nbsp; 4th international conference on Soft Computing for  Problem Solving , NIT Silchar, India, (Two Awards: Best Paper in the Track, Overall  Best Paper), &nbsp;vol. 336, &nbsp; pp. 421-430, &nbsp; 27-29 Dec 2014.',
},
{
  detail: 'Arpit Bhardwaj, Aruna  Tiwari, M Vishaal Varma, M Ramesh Krishna,<strong> &quot;An Innovative Genetic  Programming Framework in modelling a real time Epileptic Seizure detection  system&quot;</strong>,&nbsp; ASE Big Data/Social Informatics/PASSAT/BioMedCom Conference,  Harvard University, &nbsp; &nbsp; pp. 1-10, 14-16 Dec&nbsp; 2014.',
},
{
  detail: 'Anirban Sengupta, Vipul Mishra, <i><b><strong>&ldquo;Multidimensional Encoding Based Evolutionary Exploration Approach: Adaptive Methodology for Parametric Trade-offs in High Level Synthesis for Control flow Graphs&rdquo;</strong></b></i>, nbsp;Proceedings of 3rd IEEE CALCON,&nbsp;<span id="OBJ_PREFIX_DWT409_com_zimbra_date">Nov 2014.',
},
{
  detail: 'Tanveer Ahmed, Abhishek Srivastava,&nbsp;<i><b><strong>&quot;Choreographing Services Over Mobile Devices&quot;.</strong></b></i>&nbsp;s a short paper at the 12th International Conference on Service-Oriented Computing (ICSOC)&quot;, Paris,&nbsp;<span id="OBJ_PREFIX_DWT739_com_zimbra_date">November 2014.',
},
{
  detail: 'Pramod Mane, Nagarajan Krishnamurthy, and Kapil Ahuja, "<strong>Externalities and Stability in a Social Cloud</strong>". In&nbsp;Proceedings of&nbsp;the 5th International Conference on Game Theory for Networks, IEEE, Beijing (China), 1-6, 2014.&nbsp;',
},
{
  detail: 'Rohit Verma, Tanveer Ahmed, Abhishek Srivastava,&nbsp;<i><b><strong>&quot;Expressing Workflow and Workflow Enactment using P Systems</strong></b></i>&quot;. In Proceedings of the 15th International Conference on Membrane Computing (CMC), Prague, Czech Republic,&nbsp;<span id="OBJ_PREFIX_DWT744_com_zimbra_date">August 2014.',
},
{
  detail: 'Tanveer Ahmed, Rohit Verma, Miroojin Bakshi, Abhishek Srivastava,&nbsp;<i><b><strong>&quot;Membrane Computing Inspired Approach for Executing Scientific Workflow in the Cloud &quot;</strong></b></i> . In Proceedings of the 15th International Conference on Membrane Computing (CMC), Prague, Czech Republic,&nbsp;<span id="OBJ_PREFIX_DWT745_com_zimbra_date">August 2014.',
},
{
  detail: 'Arpit Bhardwaj, Aruna Tiwari, M  Vishaal Varma, M Ramesh Krishna, <strong>&quot;&nbsp;Classification of EEG signals using a  novel genetic programming approach&quot;</strong>,&nbsp; GECCO Comp 14 Proceedings of the 2014  conference companion on Genetic and evolutionary computation companion,  Vancouver, BC Canada , pp. 1297-1304, &nbsp;12-16 July 2014.',
},
{
  detail: 'Aruna Tiwari, Neha Bharill,  <strong>&quot;Enhanced Cluster Validity Index for the Evaluation of Optimal Number of Clusters for Fuzzy c-Means Algorithm&quot;</strong> ,  IEEE World Congress on Computational Intelligence- WCCI, IEEE Computational Intelligence Society Beijing International Convention Center, China, July 6-11, 2014,     pp. 1526-1523,   2014.',
},
{
  detail: 'Tanveer Ahmed, Michael Mrissa, <i><b><strong>&quot;Abhishek Srivastava.&nbsp;MagEl: A Magneto-Electric Effect-Inspired Approach for&nbsp;Web Service Composition&quot;</strong></b></i>.&nbsp;In Proceedings of the 21st IEEE International Conference on Web-Services (ICWS)&quot;,&nbsp;Anchorage, Alaska,&nbsp;<span id="OBJ_PREFIX_DWT740_com_zimbra_date">June 2014.',
},
{
  detail: 'Tanveer Ahmed, Abhinav Tripathi, Abhishek Srivastava,&nbsp;<i><b><strong>&quot;Rain4Service: An approach towards&nbsp;Decentralized Web Service Composition&quot;</strong></b></i>. In Proceedings of the 11th IEEE International Services &nbsp;Computing Conference (SCC), Anchorage, Alaska,&nbsp;<span id="OBJ_PREFIX_DWT741_com_zimbra_date">June 2014.&nbsp;',
},
{
  detail: 'Rohit Verma, Abhishek Srivastava,&nbsp;<i><b><strong>&quot;A Novel Web Service Directory Framework for Mobile&nbsp;&nbsp;Environments&quot;</strong></b></i>.&nbsp;In&nbsp;Proceedings of the 21st IEEE International Conference on Web-Services (ICWS), Anchorage, Alaska,&nbsp;<span id="OBJ_PREFIX_DWT742_com_zimbra_date">June&nbsp;2014.&nbsp;',
},
{
  detail: 'Tanveer Ahmed, Abhishek Srivastava,&nbsp;<i><b><strong>&quot;Service Choreography: Present and Future&quot;</strong></b></i>. In Proceedings of the 11th IEEE International Services Computing Conference (SCC), Work In Progress Track, Anchorage, Alaska,&nbsp;<span id="OBJ_PREFIX_DWT743_com_zimbra_date">June 2014.',
},
{
  detail: 'Anirban Sengupta, Vipul Mishra, <i><b><strong>"Automated Parallel Exploration of Datapath and Unrolling Factor in High Level Synthesis using Hyper-Dimensional Particle Swarm Encoding&quot;,</strong></b></i> Proceedings of 27th IEEE Canadian Conference on Electrical and Computer Engineering, Toronto,&nbsp;<span id="OBJ_PREFIX_DWT243_com_zimbra_date">May 2014, pp.&nbsp;<span id="OBJ_PREFIX_DWT244_com_zimbra_phone"><a href="callto:000069 - 000073" onClick="window.top.Com_Zimbra_Phone.unsetOnbeforeunload()">000069 - 000073</a>.',
},
{
  detail: 'Anirban Sengupta, Saumya Bhadauria, <i><b><strong>&quot;Automated Exploration of Datapath in High Level Synthesis using Temperature Dependent Bacterial Foraging Optimization Algorithm&quot;,</strong></b></i> Proceedings of 27th IEEE Canadian Conference on Electrical and Computer Engineering, Toronto,&nbsp;<span id="OBJ_PREFIX_DWT242_com_zimbra_date">May 2014.',
},
{
  detail: '<strong><span lang="EN-US">Anirban Sengupta</strong><span lang="EN-US">, Vipul Kumar Mishra, "Swarm Intelligence Driven Simultaneous Adaptive Exploration of Datapath and Loop Unrolling Factor during Area-Performance Trade-off ",&nbsp;<strong>Proceedings of 13th IEEE Computer Society Annual Symposium on VLSI (ISVLSI)</strong>,&nbsp;<strong>Florida</strong>, USA, pp. 106 &ndash; 112. &nbsp;(A*: BLIND REVIEW).',
},
{
  detail: 'Anirban Sengupta,<span lang="EN-US"> Vipul Kumar Mishra,&nbsp;<strong>&quot;Integrated Particle Swarm Optimization (i-PSO): An Adaptive Design Space Exploration Framework for Power-Performance Tradeoff in Architectural Synthesis&quot;</strong>,&nbsp;Proceedings of&nbsp;15th&nbsp;IEEE &nbsp;International Symposium on Quality Electronic Design (ISQED 2014), Santa Clara, California,&nbsp;USA,&nbsp;March 2014.',
},
{
  detail: 'Anirban Sengupta and Vipul Kumar Mishra, <i><strong> &quot;Integrated Particle Swarm Optimization (i-PSO): An Adaptive Design Space Exploration Framework for Power-Performance Tradeoff in Architectural Synthesis&quot;</strong></i>, Proceedings of IEEE 15th International Symposium on Quality Electronic Design (ISQED 2014), Santa Clara, California, March 2014.',
},
{
  detail: 'Rajat Saxena and Somnath Dey, <i><b><strong>&quot;Collaborative Approach for Data Integrity Verification in Cloud Computing&quot;</strong></b></i>, Proceedings of Second International Conference on Security in Computer Networks and Distributed Systems (SNDS 2014), vol: CCIS 420, pp: 1 - 15, Thiruvananthapuram, India (Springer Berlin Heidelberg), March, 2014. [Best Paper Award].',
},
{
  detail: 'Anirban Sengupta, Vipul Mishra, <i><b><strong>&quot;Automate&#8203;d Parallel Exploratio&#8203;n of Datapath and Unrolling Factor in High Level Synthesis using Hyper-Dime&#8203;nsional Particle Swarm Encoding&quot;,</strong></b></i>&nbsp;or publication, Proceedings of 27th&nbsp;IEEE Canadian Conference on Electrical and Computer Engineering, Feb&nbsp;2014, Toronto.',
},
{
  detail: 'Piyush Joshi and Surya Prakash, <i><b><strong>"Image Quality Assessment based on Noise Detection"</strong></b></i>, Proceedings of International Conference on Signal Processing and Integrated Networks (SPIN 2014), pp. 755-759, NOIDA-Delhi,&nbsp;<span id="OBJ_PREFIX_DWT74_com_zimbra_date"><span id="OBJ_PREFIX_DWT75_com_zimbra_date">February 2014.&nbsp;</span></span>',
},
{
  detail: 'Anirban Sengupta, Saumya Bhadauria, <i><b><strong>"Automate&#8203;d Exploratio&#8203;n of Datapath in High Level Synthesis using Temperatur&#8203;e Dependent Bacterial Foraging Optimizati&#8203;on Algorithm&quot;,</strong></b></i>&nbsp;or publication, Proceedings of 27th&nbsp;IEEE Canadian Conference on Electrical and Computer Engineering, Feb&nbsp;2014, Toronto.',
},
{
  detail: 'Vipul Mishra, Anirban Sengupta,&nbsp;<b><strong>&quot;Swarm Intelligence Driven Design Space Exploration: An Integrated Framework for Power-Performance Trade-off in Architectural Synthesis&quot;</strong></b>,&nbsp;Proceedings of 25th IEEE International Conference on Microelectronics (ICM&nbsp;2013),&nbsp;Dec 2013, pp. 1 - 4.',
},
{
  detail: 'Neha Bharill, Aruna Tiwari, <strong>&quot;Handling Big Data with Fuzzy Based Classification Approach&quot;</strong>,&nbsp; 3rd  Annual World Conference on Soft Computing-WCSC, Texas, USA, &nbsp;vol. 312,  &nbsp; pp. 219-227, &nbsp;16-18 Dec 2013.',
},
{
  detail: 'Rajeev Rathore, Surya Prakash and Phalguni Gupta, <i><strong>&quot;Efficient Human Recognition System using Ear and Profile Face&quot;</strong></i>, Proceedings of IEEE International Conference on Biometrics: Theory, Applications and Systems (BTAS 2013), Washington, DC,USA, September-October 2013.',
},
{
  detail: 'Anirban Sengupta, Vipul Kumar Mishra and Pallabi Sarkar, <i><strong>&quot;Rapid Search of Pareto Fronts using D-logic Exploration during Multi-Objective Tradeoff of Computation Intensive Applications&quot;</strong></i>, Proceedings of IEEE 5th Asian Symposium on Quality Electronic Design (ASQED), pp. 113-122, Malaysia, August 2013.',
},
{
  detail: 'Anirban Sengupta and Vipul Mishra, <i><strong>&quot;D-logic Exploration: Rapid Search of Pareto Fronts during Architectural Synthesis of Custom Processors&quot;</strong></i>, Proceedings of IEEE International Conference on Advances in Computing, Communications and Informatics (ICACCI-2013), pp. 586 - 593, Mysore, INDIA, August 2013.',
},
{
  detail: 'Anirban Sengupta, <i><strong>&quot;A Methodology for Self Correction Scheme Based Fast Multi Criterion Exploration and Architectural Synthesis of Data Dominated Applications</strong></i><strong>&quot;</strong>, Proceedings of IEEE International Conference on Advances in Computing, Communications and Informatics (ICACCI-2013), pp.430 - 436, Mysore, INDIA, August 2013.',
},
{
  detail: 'Anirban Sengupta, <i><strong>&quot;An Architecture Synthesis Tool for Rapid Multi-Objective Exploration and RTL Circuit Generation</strong></i><strong>&quot;</strong>, Proceedings of ACM International Conference on Advances in Computing & Artificial Intelligence, Chandigarh, INDIA, 2013.',
},
{
  detail: 'Arpit Bhardwaj, Aruna Tiwari,  <strong>&quot;A Novel Genetic Programming Based Classifier Design Using a New Constructive Crossover Operator with a Local Search Technique&quot;</strong>,  Ninth International conference on Intelligent computing (ICIC) 2013,Nanning, China,  vol. LNCS 7995,  pp. 86-95,  28-31 July 2013.',
},
{
  detail: 'Arpit Bhardwaj, Aruna  Tiwari, <strong>&quot;Performance Improvement in Genetic Programming using Modified  Crossover and Node Mutation&quot;</strong>,&nbsp; Genetic and Evolutionary Computation  Conference(GECCO) 2013, Amsterdam, The Netherland, &nbsp;vol. ACM  978-1-4503-1964-5/13/07., &nbsp; pp. 1721-22, &nbsp;6-10 July &nbsp;2013.',
},
{
  detail: 'Tanveer Ahmed, Abhishek Srivastava. <i><b><strong>&quot; Minimizing Waiting-time for Service Compositions: A Frictional Approach&quot;.&nbsp;</strong></b></i>In&nbsp;Proceedings of the 11th IEEE International Conference on Web-Services, Santa Clara, California, June&nbsp;2013.&nbsp;',
},
{
  detail: 'Rohit Verma, Sushmita Ruj, <i><b><strong>&quot;Abhishek Srivastava.&nbsp;Security Verification using Crowd Sourcing&quot;.</strong></b></i>&nbsp;In Proceedings of &nbsp;the Security and Privacy Symposium, IIT Kanpur, India,&nbsp;<span id="OBJ_PREFIX_DWT746_com_zimbra_date">February 2013.',
},
{
  detail: 'Narendra S. Chaudhari, <i><strong>&quot;3-CNF Satisfiability in Polynomial Time&quot;</strong></i>, Proceedings of 5th Indian International Conference on Artificial Intelligence (IICAI-11), December 14-16, 2011, Siddaganga Institute of Technology (SIT), Tumkur, Bangalore, India (To appear in proceedings of the conference: 20 pages).',
},
{
  detail: 'Anuradha Purohit, Aruna Tiwari and Narendra S Chaudhari, <i><strong>&quot;Handling the problem of code bloating to enhance the performance of classifier designed using genetic programming</strong></i>&quot;, 5th Indian International Conference on Artificial Intelligence (IICAI-11), December 14-16, 2011, Siddaganga Institute of Technology (SIT), Tumkur, Bangalore, India.',
},
{
  detail: 'Sapna Gulani, Pratibha Singh, Ajay Verma, Narendra S. Chaudhari, <i><strong>&quot;An Intelligent Network for handwritten Devnagri Digit recognition using Structural features</strong></i>&quot;, 5th Indian International Conference on Artificial Intelligence (IICAI-11), December 14-16, 2011, Siddaganga Institute of Technology (SIT), Tumkur, Bangalore, India.',
},
{
  detail: 'Juhisabharwal, Pratibha Singh, Ajay Verma, Narendra S. Chaudhari, <i><strong>&quot;An Efficient method for the Devnagri handwritten vowel recognition&quot;</strong></i>, 5th Indian International Conference on Artificial Intelligence (IICAI-11), December 14-16, 2011, Siddaganga Institute of Technology (SIT), Tumkur, Bangalore, India.',
},
{
  detail: 'Rajkumar Jain and Narendra S. Chaudhari, <i><strong>&quot;Formulation of 3-Clustering as a 3-SAT Problem&quot;</strong></i>, 5th Indian International Conference on Artificial Intelligence (IICAI-11), December 14-16, 2011, Siddaganga Institute of Technology (SIT), Tumkur, Bangalore, India.',
},
{
  detail: 'Jaya Thomas and Narendra S Chaudhari, <i><b><strong>&quot;Two Approaches for Hamiltonian Circuit Problem using Satisfiability&quot;</strong></i></b>, 5th  Indian International Conference on Artificial Intelligence (IICAI-11), December 14-16, 2011, Siddaganga Institute of Technology (SIT), Tumkur, Bangalore, India.',
},
{
  detail: 'Narendra S. Chaudhari, <b><strong>&quot;NP=P: Polynomial Solvability of 3-SAT&quot;</strong></b>, In Proceedings, International Conference on Advances in Modelling, Optimization, and Computing (AMOC-2011), Indian Institute of Technology, Roorkee, Uttarakhand State, India (05-07 Dec. 2011).',
},
{
  detail: 'Rajkumar Jain, Narendra S. Chaudhari, <i><b><strong>&quot;Identification & Generation of Constraints in Social Network&quot;</strong></i></b>, International Conference "Emerging Trends in Networks & Computer Communications" (ETNCC) April 22-24,2011, College of Technology & Engineering, Maharana Pratap University of Agri. & Tech, Udaipur, Rajasthan, India, Co-Sponsored by IEEE.',
},
{
  detail: 'Jaya Thomas and Narendra S Chaudhari, <b><strong>&quot;Polynomial Solvability of Satisfiability and its implication to hybrid.cryptosystem security&quot;</strong></b>, IEEE International Conference "Emerging Trends in Networks & Computer Communications" (ETNCC) April 22-24,2011, College of Technology & Engineering, Maharana Pratap University of Agri. & Tech, Udaipur, Rajasthan, India, Co-Sponsored by IEEE.',
},
{
  detail: 'Prakash C. Sharma and Narendra S Chaudhari, <b><strong>"A Graph Colouring Approach for Channel Assignment in Cellular Network through Propositional Satisfiabilty&quot;</strong></b>, IEEE International Conference "Emerging Trends in Networks & Computer Communications" (ETNCC) April 22-24,2011, College of Technology & Engineering, Maharana Pratap University of Agri. & Tech, Udaipur, Rajasthan, India,  Co-Sponsored by IEEE.',
},
{
  detail: 'Khitij Pathak, Aruna Tiwari and Narendra S. Chaudhari, <i><b><strong>&quot;A Reduction of 3-SAT problem from optimal sanitization in Association Rule Hiding&quot;</strong></i></b>, IEEE International Conference "Emerging Trends in Networks & Computer Communications" (ETNCC) April 22-24,2011, College of Technology & Engineering, Maharana Pratap University of Agri. & Tech, Udaipur, Rajasthan, India, Co-Sponsored by IEEE.',
},
{
  detail: 'Pratibha Singh, Ajay Verma, Narendra S. Chaudhari, <i><b>&quot;<strong>Performance analysis of flexible zone based features to classify Hindi numerals&quot;</strong></i></b>, In Proceedings of The 2011 International Conference on Network and Computer Science (ICNCS\'11) Kanyakumari, Tamil Nadu Sate, India (8-10 April 2011) pp. V6-292-296.',
},
{
  detail: 'Pratibha Singh, Ajay Verma, Narendra S. Chaudhari, <i><strong>&quot;Performance evaluation of classifiers applying directional features for Devnagri numeral Recognition&quot;</strong></i>, In Proceedings International Conference on Control, Robotics and Cybernetics (ICCRC\'11) New Delhi, (Proceedings ISBN  97-1-4244-9709-6; IEEE Catalog Number: CFP1176M-PRT)  (21-23 March 2011) pp. V2-242-245.',
},
{
  detail: 'Narendra S. Chaudhari, P.R. Pal and Swata Pawar, <i><strong>&quot;Combinatorial Approach of Association Rule Mining in Software Engineering&quot;</strong></i>, In Proceddings of International Conference on Software Engineering: CONSEG - 2011 (Ed. Anirban Basu, H.. Vishwakarma, T V Gopal), Bangalore, Karnataka State,  Tata McGraw Hill Education Pvt Ltd, New Delhi (ISBN: 0-07-107816-9) (17-19 Feb. 2011) pp. 148-157.',
},
{
  detail: 'Mahesh K. Panwar, Narendra S. Chaudhari, and Ravindra Patel, <i><strong>&quot;Integration testing for Component-based System with UML and OCL&quot;</strong></i>, In Proceddings International Conference on Software Engineering: CONSEG - 2011 (Ed. Anirban Basu, H.. Vishwakarma, T V Gopal), Bangalore, Karnataka State,  Tata McGraw Hill Education Pvt Ltd, New Delhi (ISBN: 0-07-107816-9) (17-19 Feb. 2011) pp. 213-222.',
},
{
  detail: 'Pratibha Singh,  Ajay Verma, Narendra S. Chaudhari, <i><b><strong>&quot;Classification of Hindi numeral using Fuzzy Zoning  and SVM &quot;</strong></i></b>, In Proceedings of the International Conference on Advanced Computing and Communication Technologies (ACCT 2011),  Rohtak, Haryana State, India. Publisher: RG Education Society (ISBN: 978-981-08-7932-7) (21-23  January 2011) pp. 259-262.',
},
{
  detail: 'Narendra S. Chaudhari, <i><b><strong>&quot;Polynomial Solvability of 3-SAT - Part I: Similarities and Differences of 2-SAT and 3-SAT&quot;</strong></i></b>, In Proceedings of ETNCC 2011  Twenty Fifth National Convention of Computer Engineers and National Seminar, The Computer Engineering Division, The Institution of Engineers (India): Networked Home Systems and Services (Ed. D. Singh) Himanshu Publications - New Delhi (ISBN 978-81-7906-266-1) Udaipur, India (04-06 Feb. 2011) pp. 59-64, 2011.',
},
{
  detail: 'Narendra S. Chaudhari, <i><b><strong>&quot;Polynomial Solvability of 3-SAT - Part II: Algorithmic Formulations for 2-SAT&quot;</strong></i></b>, In Proceedings of Twenty Fifth National Convention of Computer Engineers and National Seminar, The Computer Engineering Division, The Institution of Engineers (India): Networked Home Systems and Services (Ed. D. Singh) Himanshu Publications - New Delhi (ISBN 978-81-7906-266-1) Udaipur, India (04-06 Feb. 2011) pp. 65-70, 2011.',
},
{
  detail: 'Narendra S. Chaudhari, <i><b><strong>&quot;Polynomial Solvability of 3-SAT - Part III: Polynomial Algorithm for 3-SAT&quot;</strong></i></b>, In Proceedings of Twenty Fifth National Convention of Computer Engineers and National Seminar, The Computer Engineering Division, The Institution of Engineers (India): Networked Home Systems and Services (Ed. D. Singh) Himanshu Publications - New Delhi (ISBN 978-81-7906-266-1) Udaipur, India (04-06 Feb. 2011) pp. 71-76, 2011.',
},
{
  detail: 'Prakash C. Sharma, and Narendra S. Chaudhari, <i><b><strong>&quot;Cellular Networks, k-Coloring, and 7 3-SAT - Part III: Polynomial Algorithm for 3-SAT&quot;</strong></i></b>, In Proceedings of Twenty Fifth National Convention of Computer Engineers and National Seminar, The Computer Engineering Division, The Institution of Engineers (India): Networked Home Systems and Services (Ed. D. Singh) Himanshu Publications - New Delhi (ISBN 978-81-7906-266-1) Udaipur, India (04-06 Feb. 2011) pp. 57-58.',
},
{
  detail: 'Jaya Thomas, and Narendra S. Chaudhari, <i><b><strong>&quot;Knapsack Cryptosystem and its Reduction to 3-CNF</strong></i><strong>&quot;</strong></b>, In Proceedings of Twenty Fifth National Convention of Computer Engineers and National Seminar, The Computer Engineering Division, The Institution of Engineers (India): Networked Home Systems and Services (Ed. D. Singh) Himanshu Publications - New Delhi (ISBN 978-81-7906-266-1) Udaipur, India (04-06 Feb. 2011) pp. 23-26.',
},
{
  detail: 'Rajkumar Jain, and Narendra S. Chaudhari, <i><b><strong>&quot;Cluster Analysis in Social Networks and 2-CNF&quot;</strong></i></b>, In Proceedings of Twenty Fifth National Convention of Computer Engineers and National Seminar, The Computer Engineering Division, The Institution of Engineers (India): Networked Home Systems and Services (Ed. D. Singh) Himanshu Publications - New Delhi (ISBN 978-81-7906-266-1) Udaipur, India (04-06 Feb. 2011) pp. 169-172.  ',
},  
{
  detail: 'Narendra S. Chaudhari, Aruna Tiwari and Jaya Thomas, <i><b><strong>&quot;A Novel SVM Based Approach for Noisy Data Elemination</strong></i><strong>"</strong></b>, In Proceedings,  11th International Conference on Control, Automation, robotics and Vision (ICARCV 2010), Grand Copthrone Waterfront Hotel, Singapore, (07-10 Dec, 2010) pp. 1760-1765.',
},
{
  detail: 'Narendra S. Chaudhari, and Aruna Tiwari, <i><b><strong>&quot;Binary Neural Network Classifier and it\'s Bound for the Number of Hidden Layer Neurons&quot;</strong></i></b>, In Proceedings 11th International Conference on Control, Automation, robotics and Vision (ICARCV 2010), Grand Copthrone Waterfront Hotel, Singapore, (07-10 Dec, 2010) pp. 2012-2017.',
},
{
  detail: 'Arvind Singh Chandel, Aruna Tiwari and Narendra S. Chaudhari, <i><b><strong>&quot;A Constructive Approach for Classification of Semi-Labeled data by Extending the BLTA Algorithm&quot;</strong></i></b>, Proceedings of International Conference on Computational Intelligence and Communication Systems (CICN 2010), Published by IEEE Computer Society, ISBN No:978-0-7695-4254-6/10, Bhopal, (26-28 Nov. 2010) pp. 588-590.',
},
{
  detail: 'Sujata Negi, Aruna Tiwari and Narendra S. Chaudhari, <i><b><strong>&quot;Optimization of Boolean expression based neural network learning by using Rough Set&quot;</strong></i></b>, 2nd International Conference on Information Technology and Business Intelligence (ITBI-10), Sponsored by IEEE Computational Intelligence Society, Institute of Management Technology (IMT), Nagpur, Proceedings ISBN No:978-81-7446-900-7, paper no. 52,  (12-14 Nov. 2010).',
},
{
  detail: 'Aruna Tiwari and Narendra S. Chaudhari, Satyam Saxena, Chetan Gurjar, <i><b><strong>&quot;Design of Intelligent Tutoring System using Neural Fuzzy Learning Technique&quot;</strong></i></b>, 2nd International Conference on Information Technology and Business Intelligence (ITBI-10), Sponsored by IEEE Computational Intelligence Society, Institute of Management Technology (IMT), Nagpur, Proceedings ISBN No:978-81-7446-900-7, paper no. 58, (12-14 Nov. 2010).',
},
{
  detail: 'Anuradha Purohit, Narendra S. Chaudhari, and Aruna Tiwari, <i><b><strong>&quot;Construction of Classifier with Feature Selection based on Genetic Programming&quot;</strong></i></b>, IEEE World Congress on Evolutionary Computation (Computational Intelligence), Centre de Convencions Internacional de Barcelona, Barcelona, Spain, proceedings pp. 1-5 (18-23 July, 2010) Proceedings pp. 01-05, 2010.',
},
]
  }
})