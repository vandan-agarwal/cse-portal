//journal-component
Vue.component('journal-item',{
    props: ['journal'],
    template:     
    '<li><span v-html="journal.detail"></span></li></br>'
})

//journal-object
var Journals = new Vue({
    el: '#journals-list',
    data: {
      JournalsList:
      [   {
      detail: 'Pallabi Sarkar, Dipanjan Roy, Anirban Sengupta, Mrinal Kanti Naskar <strong>"Signature-Free Watermark for Protecting DSP core used in CE Devices",</strong> IEEE Consumer Electronics, Accepted, Nov 2018.',
    },     
    {
      detail: 'Anirban Sengupta, Peter Corcoran <strong>"Multi-Phase Obfuscation of Fault Secured DSP Designs with Enhanced Security Feature",</strong> IEEE Transactions on Consumer Electronics, Accepted, Aug 2018.',
    },       
    {
      detail: 'Deepak Kachave, Anirban Sengupta, <strong>"Effect of NBTI Stress on DSP cores used in CE Devices: Threat Model and Performance Estimation",</strong> IET Computers and Digital Techniques, Accepted, July 2018. ',
    },     
    {
      detail: 'Anirban Sengupta, Dipanjan Roy,  <strong>"Low-Cost Obfuscated JPEG CODEC IP Core for Secure CE Hardware",</strong>  IEEE Transactions on Consumer Electronics, Accepted, 2018.',
    },              
    {
      detail: 'Anirban Sengupta, Saraju P Mohanty,  <strong>"Smart Electronic Systems for Consumer Electronics",</strong>  IEEE Transactions on Consumer Electronics, Accepted, 2018.',
    },              
    {
      detail: 'Dipanjan Roy, Pallabi Sarkar, Anirban Sengupta, MK Naskar,  <strong>"Optimizing DSP IP Cores using Design Transformation",</strong>  IEEE Consumer Electronics, Accepted, 2018. ',
    },              
    {
      detail: 'Deepak Kachave, Anirban Sengupta,  <strong>"Effect of NBTI Stress on DSP Cores used in CE Devices",</strong>  IEEE Potential, Invited Paper, Accepted, 2018. ',
    },              
    {
      detail: 'Syed Sadaf Ali and Surya Prakash,  <strong>"3-Dimensional Secured Fingerprint Shell",</strong>  Pattern Recognition Letters, 2018 (Accepted). <a href="https://www.sciencedirect.com/science/article/pii/S0167865518301375?via%3Dihub">[Link]</a>',
    },                
    {
      detail: 'Iyyakutti Iyappan G and Surya Prakash,  <strong>"3D Ear Recognition using Global and Local Features",</strong>  IET Biometrics, IET, 2018 (Accepted). <a href="http://www.iiti.ac.in/people/~surya/publications.html">[Link]</a>',
    },                
    {
      detail: 'Anirban Sengupta, Deepak Kachave, Dipanjan Roy <strong>"Low Cost Functional Obfuscation of Reusable IP Cores used in CE Hardware through Robust Locking",</strong> IEEE Transactions on Computer Aided Design of Integrated Circuits & Systems (TCAD), Accepted, 2018.',
    },       
    {
      detail: 'Anirban Sengupta, Saraju P Mohanty <strong>"Smart DSP Cores for Consumer Electronics",</strong> IEEE Transactions on Consumer Electronics (TCE), Accepted, 2018.',
    },   
    {
      detail: 'Dipanjan Roy, Pallabi Sarkar, Anirban Sengupta, MK Naskar <strong>"Optimizing DSP IP Cores using Design Transformation",</strong> IEEE Consumer Electronics, Accepted, 2018',
    },         
    {
      detail: 'Mayank Swarnkar and Neminath Hubballi,  <strong>"RDClass: On Using Relative Distance of Keywords for Accurate Network Traffic Classification",</strong>  IET Networks (To Appear), Dec 2018.',
    },                
    {
      detail: 'Nikhil Tripathi and Neminath Hubballi,  "<strong>Detecting Stealth DHCP Starvation Attack Using Machine Learning Approach"</strong>,  Journal of Computer Virology and Hacking Techniques (Springer),  Dec 2018.',
    },                
    {
      detail: 'Anirban Sengupta, Dipanjan Roy "<strong>Obfuscated JPEG Image Decompression IP Core for Protecting Against Reverse Engineering</strong>", IEEE Consumer Electronics, Accepted, July 2018.        ',
    },                              
    {
      detail: 'Anirban Sengupta, Dipanjan Roy "<strong>DSP Design Protection in CE through Algorithmic Transformation Based Structural Obfuscation</strong>", IEEE Transactions on Consumer Electronics, Accepted, June 2018.',
    },                
    {
      detail: 'Anirban Sengupta, Deepak Kachave "<strong>Spatial and Temporal Redundancy for Transient Fault Tolerant Datapath</strong>",&nbsp;IEEE Transactions on Aerospace and Electronic Systems Accepted, June 2018.',
    },         
    {
    detail: ' Anirban Sengupta, SP Mohanty, Garrett Rose <strong>"Hardware - Assisted Design for Security and Protection of Consumer Electronics IP ",</strong> IET Computers and Digital Techniques, Accepted, June 2018 (Impact Factor ~ 0.8).',
    },              
    {
    detail: ' Deepak Kachave, Anirban Sengupta <strong>"Functionally Locked IP Core in CE Hardware for Shielding against Reverse Engineering Attacks",</strong> IEEE Consumer Electronics, Accepted, June 2018 (Impact Factor ~ 1.15).',
    },       
    {
      detail: 'Anirban Sengupta, Dipanjan Roy <strong>"Framework for IP based Lossless Image Compression for Camera Systems",</strong> IEEE Consumer Electronics, Accepted, March 2018 (Impact Factor ~ 1.15).',
    },              
    {
      detail: 'Nikhil Tripathi and Neminath Hubballi,<strong>"Slow Rate Denial of Service Attacks Against HTTP/2 and Detection",</strong>Computers & Security, (To Appear March 2018)',
    },                    
    {
      detail: 'Anirban Sengupta, Deepak Kachave <strong>"Forensic Engineering for Resolving Ownership Problem of Reusable IP Core generated during High Level Synthesis",</strong> Elsevier Journal on Future Generation Computer Systems, Accepted, Jan 2018 (Impact Factor ~ 4.8).',
    },            
    {
      detail: 'Anirban Sengupta, Dipanjan Roy<strong> "Triple-Phase Watermarking for Reusable IP Core Protection during Architecture Synthesis"</strong>IEEE Transactions on Computer Aided Design of Integrated Circuits & Systems (TCAD), Accepted, Jan 2018 Impact factor ~ 2.',
    },            
    {
      detail: 'Anirban Sengupta, Dipanjan Roy, Peter Corcoran <strong>"A Framework for Hardware Efficient Reusable IP Core for Grayscale Image CODEC",</strong> IEEE Access Journal, Accepted, 2018, DOI: 10.1109/ACCESS.2017.2776293',
    },               
    {
      detail: 'Piyush Joshi, Surya Prakash and Sonika Rawat,<strong>"Continuous Wavelet Transform based No-reference Quality Assessment of Deblocked Images",</strong> The Visual Computer, Springer, 2017 (Accepted). <a href="http://www.iiti.ac.in/people/~surya/publications.html">[Link]</a>',
    },                  
    {
      detail: 'Anirban Sengupta, Sandip Kundu <strong>"Securing IoT Hardware: Threat models and Reliable, Low-power Design Solutions",</strong> IEEE Transactions on Very Large Scale Integration (VLSI) Systems, Dec 2017, Volume: 25, Issue:12, pp. 3265 - 3267',
    },          
    {
      detail: 'Anirban Sengupta, Dipanjan Roy<strong> "Automated Low Cost Scheduling Driven Watermarking Methodology for Modern CAD High-Level Synthesis Tools"</strong> Elsevier Journal of Advances in Engineering Software, Accepted, Dec 2017.',
    },        
    {
      detail: 'Dipanjan Roy,&nbsp;Anirban Sengupta<strong>&nbsp;"Low Overhead Symmetrical Protection of Reusable IP Core using Robust Fingerprinting and Watermarking during High Level Synthesis"</strong>,&nbsp;Elsevier Journal on Future Generation Computer Systems,&nbsp;Accepted, Dec 2017.&nbsp;',
    },        
    {
      detail: 'Neminath Hubballi, Nikhil Tripathi, <strong>"An Event based Technique for Detecting Spoofed IP Packets"</strong>, Journal of Information Security and Applications, Elsevier&nbsp;(To Appear Dec 2017)',
    },        
    {
      detail: 'Diksha Golait and Neminath Hubballi, <strong>"Detecting Anomalous Behaviour in VoIP Systems:A Discrete Event System Modeling"</strong> IEEE Transactions on Information and Forensic Security&nbsp; (To appear Dec 2017).',
    },        
    {
      detail: 'Anirban Sengupta, Deepak Kachave, <strong>"Particle Swarm Optimisation Driven Low Cost Single Event Transient Fault Secured Design during Architectural Synthesis"</strong>Accepted, IET Journal of Engineering, Dec 2017 (to appear).',
    },        
    {
      detail: 'Anirban Sengupta, Dipanjan Roy, <strong>"Protecting an Intellectual Property Core during Architectural Synthesis using High-Level Transformation Based Obfuscation"</strong>IET Electronics Letters, Accepted, 2017. Impact factor ~ 1.1',
    },        
    {
      detail: 'Anirban Sengupta, Deepak Kachave, <strong>"Low Cost Fault Tolerance against kc-cycle and km-unit Transient for Loop Based Control Data Flow Graphs during Physically Aware High Level Synthesis"</strong> Elsevier Journal on Microelectronics Reliability, Accepted, 2017. Impact factor ~ 1.6',
    },        
    {
      detail: 'Anirban Sengupta, <strong>"Hardware Vulnerabilities and its Effect on CE Devices: Design-for-Security against Trojan"</strong> IEEE Consumer Electronics, Accepted, Nov 2017. Impact factor ~ 1.15.',
    },        
    {
      detail: 'Anirban Sengupta, Madhavi Ganapathiraju, "<strong>Audio & Video Technologies of Consumer Electronics Devices"</strong>,&nbsp;IEEE Consumer Electronics, Accepted, October 2017. Impact factor ~ 1.15.',
    },        
    {
      detail: 'Anirban Sengupta "<strong>Hardware Vulnerabilities and its Effect on CE Devices: Design-for-Security against Trojan"</strong>,&nbsp;IEEE Consumer Electronics, Accepted, Oct 2017.',
    },                  
    {
      detail: 'Anirban Sengupta "<strong>Hardware Security of CE Devices: Threat Models and Defence against IP Trojans and IP Piracy"</strong>, IEEE Consumer Electronics, Accepted, Sep 2017.',
    },           
    {
      detail: 'Anirban Sengupta, Dipanjan Roy "<strong>Automated Low Cost Scheduling Driven Watermarking Methodology for Modern CAD High-Level Synthesis Tools"</strong>&nbsp;Elsevier Journal of Advances in Engineering Software, Accepted, June 2017.',
    },        
    {
      detail: 'Dipanjan Roy,&nbsp;Anirban Sengupta&nbsp;<strong>"Anti-Piracy aware IP Chipset Design for CE Devices: Robust Watermarking Approach"</strong>,&nbsp;IEEE Consumer Electronics<strong>,&nbsp;</strong>Volume : 6, Issue: 2, pp. 1- 8,April 2017.',
    },        
    {
      detail: 'Saraju P. Mohanty, Anirban Sengupta, Parthasarathy Guturu, and Elias Kougianos <strong>"Everything You Want to Know About Watermarking: From Paper Marks to Hardware Protection",</strong>&nbsp;IEEE Consumer Electronics Magazine, Accepted, To appear in April 2017.',
    },        
    {
      detail: 'Piyush Joshi and Surya Prakash<strong>"Retina Inspired No-reference Image Quality Assessment for Blur and Noise, Multimedia Tools and Applications",</strong>&nbsp;Springer, February 2017. <a href = "https://link.springer.com/article/10.1007%2Fs11042-017-4418-2">URL </a>',
    },        
    {
      detail: 'Anirban Sengupta, Sandip Kundu <strong>"Securing IoT Hardware: Threat models and Reliable, Low-power Design Solutions"</strong>,&nbsp;IEEE Transactions on VLSI Systems,&nbsp;<u>Accepted</u>, Dec 2016',
    },        
    {
      detail: 'Mayank Swarnkar and Neminath Hubballi, "<strong>OCPAD: One Class Naive Bayes Classifier for Payload based Anomaly Detection</strong>", Expert Systems with Applications, Elsevier,&nbsp; (To Appear, Dec 2016).',
    },        
    {
      detail: 'Anirban Sengupta<strong>&nbsp;</strong>"<strong>Mathematical Models for Latency Estimation of Loop Unrolled and Loop Pipelined CDFGS during High Level Synthesis"</strong>,&nbsp;IEEE VLSI Circuits &amp; Systems Letter, Invited paper, Accepted, Oct 2016.',
    },        
    {
    detail: ' Neminath Hubballi and Nikhil Tripathi, &quot;<strong>A Closer Look into DHCP Starvation Attack in Wireless Networks&quot;</strong>, Computers &amp; Security, Elsevier  (To Appear) Accepted in October 2016.',
    },        
    {
        detail: 'Dipanjan Roy, Anirban Sengupta, Saumya Bhadauria  "<strong>Low Cost Optimized Trojan Secured Schedule at Behavioral Level for Single & Nested Loop Control Data Flow Graphs</strong>", Elsevier Journal on VLSI Integration, Accepted, Sep 22/2016.',
    },        
    {
      detail: 'Anirban Sengupta, Saumya Bhadauria, and Saraju P. Mohanty, <strong>&ldquo;Low Cost Security Aware High Level Synthesis Methodology&rdquo;</strong>,&nbsp;IET Journal on Computers &amp; Digital Techniques (CDT), Accepted, Aug 2016.',
    },        
    {
        detail: 'Anirban Sengupta, Saumya Bhadauria <strong>"TL-HLS: Methodology for Low Cost Hardware Trojan Security Aware Scheduling with Optimal Loop Unrolling Factor during High Level Synthesis"</strong>,&nbsp;IEEE Transactions on Computer Aided Design of Integrated Circuits (TCAD),&nbsp;<u>Accepted</u>,&nbsp;<span data-term="goog_684405930" tabindex="0">July 25/2016</span>.',
    },        
    {
      detail: 'Anirban Sengupta <strong>"Cognizance on Intellectual Property: A High-Level Perspective",</strong>&nbsp;IEEE Consumer Electronics, July 2016.',
    },        
    {
      detail: 'Anirban Sengupta, F. Lombardi, S.P Mohanty, M. Zwolinski, <strong>"Security and Reliability Aware System Design for Mobile Computing Systems"</strong>,&nbsp;IEEE Access Journal,&nbsp;Volume: 4, 2016, pp. 2976 - 2980 (Impact factor ~ 1.25).',
    },        
    {
      detail: 'Om Prakash Patel, &nbsp;Aruna Tiwari, <strong>"Novel Quantum Inspired Binary Neural Network Algorithm"</strong>, &nbsp;Sadhana - Academy Proceedings in Engineering Sciences, Springer, &nbsp; (SCIE Index, &nbsp;last 5-year Impact factor- &nbsp;0.65).',
    },        
    {
      detail: 'Anirban Sengupta, <strong>"Design Flow of a Digital IC for CE Products"</strong>, IEEE Consumer Electronics, April 2016, Vol.5, Issue: 2, pp.58 - 62.  ',
    },        
    {
      detail: 'Anirban Sengupta<strong> "Evolution of IP Design Process in Semiconductor/EDA Industry"</strong>, IEEE Consumer Electronics,&nbsp;April 2016, Vol.5, Issue: 2, pp.123 - 126.',
    },        
    {
      detail: 'Anirban Sengupta, Peter Corcoran <strong>"Advances in Smart Robust Low Cost Hardware System Design for Digital Consumer Electronics"</strong>, IEEE Transactions on Consumer Electronics, Accepted, special section, &nbsp;March 2016.',
    },        
    {
      detail: 'Anirban Sengupta, Saumya Bhadauria, <strong>"Exploring Low Cost Optimal Watermark for Reusable IP Cores during High Level Synthesis"</strong> ,&nbsp;IEEE Access Journal,&nbsp;Invited paper, Volume:4, Issue: 99, pp. 2198 - 2215, March 2016.',
    },        
    {
      detail: 'Deepak Kachave,&nbsp;Anirban Sengupta, <strong>&ldquo;Integrating Physical Level Design and High Level Synthesis for Simultaneous Multi-Cycle Transient and Multiple Transient Fault Resiliency of Application Specific Datapath Processors&rdquo;</strong>, Elsevier Journal on Microelectronics Reliability, Accepted, doi:10.1016/j.microrel.2016.03.006, March 2016.<strong>      </strong>     ',
    },    
    {
      detail: 'Anirban Sengupta, Saumya Bhadauria <strong>"IP core Protection of CDFGs using Robust Watermarking during Behavioral Synthesis Based on User Resource Constraint and Loop Unrolling Factor"</strong>, IET Electronics Letters<strong>,&nbsp;</strong>March 2016, Vol. 52, No. 6 pp. 439-441',
    },        
    {
      detail: 'Arpit Bhardwaj, &nbsp;Aruna Tiwari, M. Vishaal Varma, M. Ramesh  Krishna , <strong>&quot;&nbsp;A Novel Genetic Programming Approach for Epileptic Seizure  Detection,&nbsp; Elsevier Journal Computer methods and programs in biomedicine&quot;</strong>,  &nbsp;vol. 124, &nbsp; pp. 2-18, &nbsp; February 2016. ',
    },        
    {
      detail: 'A. Sengupta, S. Bhadauria, "<strong>Optimized&nbsp;Hardware Design for Trojan Security at Behavioral Level for Loop Based Applications</strong>",&nbsp;Elsevier Journal on VLSI Integration, Jan 2016',
    },
    {
      deytail: 'Chandan Gautam, Aruna  Tiwari,<strong> &quot;On The Construction of  Extreme Learning Machine for Online and Offline One Class Classifier&quot;</strong>,&nbsp;  Neurocomputing,  Elsevier, Impact Factor 2.292 , 2016.',
    },
    {
      details: 'Arpit Bhardwaj, Aruna  Tiwari, <strong>&quot;A Genetically Optimized Neural Network Model for  Multi-class Classification&quot;</strong>,&nbsp; Expert Systems With Applications, Elsevier,  Impact Factor 2.24 , 2016.',
    },        
    {
      detail: 'Amit Amritkar, Eric de Sturler, Katarzyna &#346;wirydowicz, Danesh Tafti,&nbsp;Kapil Ahuja, &quot;<strong>Recycling Krylov Subspaces for CFD Applications and a New Hybrid Recycling Solver&quot;</strong>, Journal of Computational Physics by Elsevier, vol. 303, pp. 222&ndash;237, December 2015.',
    },        
    {
      detail: 'Anirban Sengupta <strong>"Protection of IP-Core Designs for CE Products",</strong>IEEE Consumer Electronics, Dec 2015, Vol 5, pp. 83- 89.',
    },        
    {
      detail: 'Kapil Ahuja, Peter Benner, Eric de Sturler, and Lihong Feng, &quot;<strong>Recycling BiCGSTAB with an Application to Parametric Model Order Reduction&quot;</strong>, SIAM Journal on Scientific Computing, vol. 37(5), pp. S429&ndash;S446, October 2015.',
    },        
    {
      detail: 'Anirban Sengupta <strong>"Protection of Reusable IP core at Architectural Level"</strong>,&nbsp;IEEE VLSI Circuits &amp; Systems Letter,&nbsp;<u>Accepted</u>, Oct 2015.',
    },    
    {
      detail: 'Saumya Bhadauria, Anirban Sengupta, <strong> "Multi-Cycle Single Event Transient Fault Security Aware MO-DSE for Single loop CDFGs in HLS",&nbsp;</strong>IEEE VLSI Circuits &amp; Systems Letter, Accepted,&nbsp;Aug 2015',
    },    
    {
      detail: 'Anirban Sengupta, Saumya Bhadauria, <strong>"Adaptive Bacterial Foraging Driven Datapath Optimization: Exploring Power-Performance Tradeoff in High Level Synthesis",&nbsp;Elsevier Journal on Applied Mathematics &amp; Computation</strong>,&nbsp;Accepted,&nbsp;<span data-term="goog_1322390998" tabindex="0">July 13, 2015</span>&nbsp;(IF ~ 1.68).',
    },    
    {
      detail: '<span class="style2 style6">Arpit Bhardwaj,  Aruna Tiwari, <strong>&nbsp;&quot;Breast cancer diagnosis using Genetically Optimized Neural  Network model,&nbsp; Elsevier journal :Expert Systems with Applications&quot;</strong>,  &nbsp;vol. 42, &nbsp; pp. 4611-4620, &nbsp;June 2015.</span>',
    },
    {
      detial: 'Neha Bharill,  Aruna Tiwari, Anshul Rawat, <strong>&quot; &nbsp;A Novel Technique of Feature Extraction with  Dual Similarity Measures for Protein Sequence Classification,&nbsp; Procedia  computer Science&quot;</strong>, Elsevier, &nbsp;vol. 48, &nbsp; pp. 795-801, &nbsp;May 2015.',
    },        
    {
      detail: 'Anirban Sengupta, Vipul Kumar Mishra, &ldquo;<strong>A Methodology for Comprehensive Schedule Delay Estimation during Design space Exploration in Architectural Synthesis&rdquo;,&nbsp;</strong>IEEE VLSI Circuits &amp; Systems Letter (Letter of TCVLSI),&nbsp;Volume 1, Issue 1, April 2015, pp. 2 - 8.',
    },    
    {
      detail: 'Anirban Sengupta, Reza Sedaghat,<strong> "Swarm Intelligence Driven Design Space Exploration of Optimal k-Cycle Transient Fault Secured Datapath during High Level Synthesis Based on User Power-Delay Budget",&nbsp;</strong>Elsevier Journal on Microelectronics Reliability, Accepted, March 2015.',
    },    
    {
      detail: 'Anirban Sengupta <strong>&nbsp;"Exploration of kc-cycle Transient Fault Secured Datapath and Loop Unrolling Factor for Control Data Flow Graphs during High Level Synthesis",&nbsp;</strong>IEEE/IET Electronics Letters,&nbsp;Accepted, Feb 2015 (IF ~ 1.1)',
    },   
    {
      detail: 'Anirban Sengupta, Saumya Bhadauria&nbsp;<strong><i>&ldquo;Bacterial Foraging Driven Exploration of Multi Cycle Fault Tolerant Datapath based on Power-Performance Tradeoff in High Level Synthesis&rdquo;,</i></strong> Elsevier Journal on Expert Systems With Applications,&nbsp;<u>Accepted</u>, 2015&nbsp;(5yr Impact Factor = 2.339).',
    },    
      {
        detail: 'Anirban Sengupta,Saumya  Bhadauria <i> <strong> "Automated Design Space Exploration of Multi-Cycle Transient Fault Detectable Datapath based on Multi-Objective User Constraints for Application Specific Computing"</strong></i> Elsevier Journal on Advances in Engineering Software, Accepted, 2015. (Impact Factor = 1.4)',
      },        
    {
      detail: 'Anirban Sengupta, VK Mishra. <strong>"Simultaneous Exploration of Optimal Datapath and Loop Based High level Transformation during Area-Delay Tradeoff in Architectural Synthesis Using Swarm Intelligence",</strong>&nbsp;IOS Press, Journal of Knowledge-Based and Intelligent Engineering Systems,&nbsp;<u>Accepted</u>, 2015.',
    },    
    {
      detail: 'VK Mishra, Anirban Sengupta,<i><strong>"Swarm Inspired Exploration of Architecture and Unrolling Factors for Nested Loop Based Application in Architectural Synthesis",</strong></i>&nbsp;IEEE/IET Electronics Letters,<u>Accepted</u>, Dec 2014.',
    },    
    {
      detail: 'Reza Sedaghat, Anirban Sengupta<strong>, "Rapid Exploration of Cost-Performance Tradeoffs using Dominance Effect during Design of Hardware Accelerators,&nbsp;</strong>Journal of Facta Universitatis: Series Electronics and Energetics, Volume 27, No. 3, pp. 317 &ndash; 328,&nbsp;<span id="OBJ_PREFIX_DWT256_com_zimbra_date">September 2014</span>.',
    },    
    {
      detail: 'Surya Prakash and Phalguni Gupta, <i><b><strong>"Human Recognition using 3D Ear Images" </strong></b></i>, Neurocomputing, 40, 317-325, Elsevier,&nbsp;<span id="OBJ_PREFIX_DWT72_com_zimbra_date"><span id="OBJ_PREFIX_DWT73_com_zimbra_date">September 2014</span></span>.',
    },    
    {
      detail: 'Neminath Hubballi and Vinoth Suryanarayanan, <i><b><strong>"False Alarm Minimization Techniques in Signature-Based Intrusion Detection Systems: A Survey"</strong></b></i> &nbsp;Computer Communications Journal of Elsevier, vol. 49, no. 1, pp. 1-17,&nbsp;<span id="OBJ_PREFIX_DWT193_com_zimbra_date"><span id="OBJ_PREFIX_DWT194_com_zimbra_date">August 2014</span></span>.',
    },    
    {
      detail: 'Anirban Sengupta, Reza Sedaghat, Vipul Kumar Mishra,<i><b><strong>&quot;Execution Time &ndash; Area Tradeoff in GA using Residual Load Decoder: Integrated Exploration of Chaining Based Schedule and Allocation in HLS for Hardware Accelerators&quot;</strong></b></i>, Journal of Facta Universitatis: Series Electronics and Energetics, Volume 27, No. 2, pp. 235 &ndash; 249,  June 2014 (Invited Paper).',
    },    
    {
      detail: 'Anirban Sengupta, Vipul Kumar Mishra,<i><strong> &quot;Automated Exploration of Datapath and Unrolling Factor during Power-Performance Tradeoff in Architectural Synthesis Using Multi-Dimensional PSO Algorithm&quot;</strong></i>,&nbsp;ELSEVIER JOURNAL ON EXPERT SYSTEMS WITH APPLICATIONS, Accepted, Jan 2014.',
    },    
    {
      detail: 'Vipul Kumar Mishra and Anirban Sengupta, <i><strong>&quot;MO-PSE: Adaptive Multi Objective Particle Swarm Optimization Based Design Space Exploration in Architectural Synthesis for Application Specific Processor Design&quot;</strong></i>, Elsevier Journal on Advances in Engineering Software, Vol. 67, pp. 111-124, January 2014.',
    },        
    {
      detail: 'Anirban Sengupta, Saumya Bhadauria <i><b><strong>&ldquo;Exploration of Multi-Objective Tradeoff During High Level Synthesis Using Bacterial Chemotaxis and Dispersal&rdquo;</strong></b></i>,&nbsp;Elsevier Journal on Procedia Computer Science, 2014, Volume. 35, Issue. C, pp. 63 &ndash; 72.',
    },        
    {
      detail: 'Om Prakash Singh, Somnath Dey and Debasis Samanta,<strong> &quot;Fingerprint Indexing using Minutiae-based Invariable Set of Multidimensional Features&quot;</strong> ,International Journal of Biometrics, vol: 6, no: 3, pp: 272--303, 2014. ',
    },    
    {
      detail: 'Jyotirmay Dewangan and Somnath Dey and Debasis Samanta, <i><b><strong>"Face Images Database Indexing for Person Identification Problem"</strong></b></i>, International Journal of Biometrics and Bioinformatics (IJBB), vol. 7, no. 2, pp. 93 - 122,&nbsp;<span id="OBJ_PREFIX_DWT191_com_zimbra_date"><span id="OBJ_PREFIX_DWT192_com_zimbra_date">October 2013</span></span>.',
    },    
    {
      detail: 'Narendra S. Chaudhari and  Jaya Thomas, <i><b><strong>&quot;Hybrid Cryptosystem Based on 2-SAT & 3-SAT and the Implications of Polynomial Solvability of 3-SAT&quot;</strong></b></i>, International Journal of Computer Applications (IJCA):  Special Issue on Evolution in Networks and Computer Communications, Vol. 2011, No. 2, pp.:01-06, New York, USA  (Oct. 2011). <a href="http://www.ijcaonline.org/specialissues/encc/number2/3720-encc009" target="_newTab">Link</a>.',
    },    
    {
      detail: 'Rajkumar Jain and Narendra S. Chaudhari, <i><b><strong>&quot;Representation of k-Cluster constraint as k-SAT in Social Networking&quot;</strong></b></i>, International Journal of Computer Applications (IJCA): Special Issue on Evolution in Networks and Computer Communications, Vol. 2011, No.1, pp.:13-18, New York (USA) (Oct. 2011). <a href="http://www.ijcaonline.org/specialissues/encc/number1/3714-encc003" target="_newTab">Link</a>.',
    },    
    {
      detail: 'Neetesh Saxena and Narendra S. Chaudhari, <strong><i><b>&quot;A Secure Digital Signature Approach for SMS Security&quot;</b></i></strong>, In,  International Journal of Computer Applications (IJCA): Special issue on IP Multimedia Communications,  Vol. 2011, No.1, pp.:98-102, New York (USA) (Oct. 2011). <a href="http://www.ijcaonline.org/specialissues/ipmc/number1/3758-ipmc022" target="_newTab">Link</a>.',
    },    
    {
      detail: 'Prakash C Sharma and Narendra S Chaudhari, <i><b><strong>&quot;Polynomial 3-SAT Encoding for K-Colorability of Graph&quot;</strong></b></i>, International Journal of Computer Applications (IJCA):  Special Issue on Evolution in Networks and Computer Communications Vol.2011, No. 1, pp.:19-24, New York, USA  (Oct. 2011). <a href="http://www.ijcaonline.org/specialissues/encc/number1/3715-encc004" target="_newTab">Link</a>.',
    },    
    {
      detail: 'Kshitij Pathak, Aruna Tiwari and Narendra S Chaudhari, <i><strong>&quot;Computational Complexity of Association Rule Hiding Algorithms&quot;</strong></i>,  In,  International Journal of Computer Applications (IJCA):  Special Issue on Evolution in Networks and Computer Communications Vol.2011, No. 1, pp.:39-43, New York, USA  (Oct. 2011). <a href="http://www.ijcaonline.org/specialissues/encc/number1/3718-encc007" target="_newTab">Link</a>.',
    },    
    {
      detail: 'Li Shukai, Narendra S. Chaudhari, Manoranjan Dash, <strong><i>&quot;Selecting useful features for personal credit risk analysis&quot;</i></strong>, International Journal of Business Information Systems (IJBIS)  Vol. 6, No. 4, pp.  530-546 (Dec. 2010).',
    },    
    {
      detail: 'Narendra S. Chaudhari, <i><strong>&quot;Improved polynomial algorithm for 3-SAT&quot;</strong></i>, The Journal of the Indian Academy of Mathematics, Vol. 32, No. 1 (Oct. 2010) pp. 251-267.',
    }
      ]
  }
})