import type { FaqItem } from "../lib/seo";

export interface WorkoutSection {
  heading: string;
  body?: string;
  bullets?: string[];
}

export interface WorkoutTopic {
  title: string;
  slug: string;
  path: string;
  description: string;
  summary: string;
  image: string;
  imageAlt: string;
  quickFacts: string[];
  sections: WorkoutSection[];
  faqs: FaqItem[];
  relatedLinks: { label: string; href: string }[];
}

const legCurlRelatedLinks = [
  { label: "Leg Curl Machine", href: "/workouts/leg-curl-machine/" },
  { label: "How to Use a Leg Curl Machine", href: "/workouts/leg-curl-machine/how-to-use-a-leg-curl-machine/" },
  { label: "Leg Curl Machine Muscles Worked", href: "/workouts/leg-curl-machine/muscles-worked/" },
  { label: "Seated vs Lying Leg Curl", href: "/workouts/leg-curl-machine/seated-vs-lying-leg-curl/" },
  { label: "Leg Curl Machine Alternatives", href: "/workouts/leg-curl-machine/alternatives/" },
];

const legMachineRelatedLinks = [
  { label: "Leg Curl Machine", href: "/workouts/leg-curl-machine/" },
  { label: "Leg Curl Extension Machine", href: "/workouts/leg-curl-machine/leg-curl-extension-machine/" },
  { label: "Leg Extension Machine", href: "/workouts/leg-curl-machine/leg-extension-machine/" },
  { label: "Leg Workouts", href: "/workouts/leg-workouts/" },
];

export const RELATED_EXERCISE_TOPICS: WorkoutTopic[] = [
  {
    title: "Prone Leg Curl",
    slug: "prone-leg-curl",
    path: "/workouts/leg-curl-machine/prone-leg-curl/",
    description: "Prone leg curl guide with setup, form, muscles worked, common mistakes, and FAQs for lying hamstring curl training.",
    summary: "A prone leg curl is a lying leg curl variation where you lie face down and curl your heels toward your glutes. It is one of the easiest leg curl machine styles to learn and is useful for building hamstring strength with controlled reps.",
    image: "https://images.pexels.com/photos/29149073/pexels-photo-29149073.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Modern gym interior with strength training machines",
    quickFacts: [
      "Prone means lying face down, so a prone leg curl is usually the same as a lying leg curl.",
      "The hamstrings are the main muscles worked, with calves and glutes helping stabilize the movement.",
      "The best starting range for most people is 2–4 sets of 8–15 controlled reps."
    ],
    sections: [
      { heading: "What is a prone leg curl?", body: "A prone leg curl is a hamstring exercise performed face down on a machine. You place the back of your ankles under or against a padded lever, then bend your knees to bring your heels toward your glutes. The machine adds resistance so the hamstrings have to work through the full curl and lowering phase." },
      { heading: "How to set up a prone leg curl machine", bullets: ["Adjust the machine so your knees sit close to the edge of the bench or just before the pivot point.", "Place the pad just above your ankles, not on the Achilles or calves.", "Grip the handles and press your hips lightly into the bench.", "Start with a light weight so you can learn the path before adding load."] },
      { heading: "How to perform the rep", body: "Curl your heels toward your glutes without lifting your hips off the bench. Pause briefly when your knees are bent, then lower the weight slowly for 2–3 seconds. Do not let the weight stack slam down, because the lowering phase is where the hamstrings do a lot of useful work." },
      { heading: "Common prone leg curl mistakes", bullets: ["Using too much weight and swinging the legs.", "Lifting the hips or arching the lower back.", "Placing the pad too high behind the knees or too low near the heels.", "Cutting the range of motion short instead of curling through a full but comfortable path."] },
      { heading: "How to add prone leg curls to leg day", body: "Use prone leg curls after squats, leg press, lunges, or Romanian deadlifts. Start with 2–3 sets of 10–15 reps, rest 60–90 seconds, and add weight only when you can keep your hips down and your reps smooth." }
    ],
    faqs: [
      { q: "What is a prone leg curl?", a: "A prone leg curl is a lying leg curl performed face down on a machine. It trains the hamstrings by bending the knees against resistance." },
      { q: "What is a leg curl machine?", a: "A leg curl machine is a strength-training machine that trains the hamstrings through knee flexion, meaning you bring your heels toward your glutes." },
      { q: "How to set up leg curl machine?", a: "Adjust the pad just above the ankles, align your knees near the machine pivot, keep your hips stable, and choose a weight you can control for the full range of motion." },
      { q: "Are prone leg curls the same as lying leg curls?", a: "Yes. Prone means lying face down, so prone leg curls and lying leg curls are usually the same exercise." },
      { q: "What muscles does prone leg curl work?", a: "It primarily works the hamstrings. The calves help hold the lower leg against the pad, and the glutes and core help keep the hips stable." },
      { q: "Why do my hips lift during prone leg curls?", a: "Hip lifting usually means the weight is too heavy, the pad position is wrong, or you are curling too aggressively. Lower the weight and slow the rep." }
    ],
    relatedLinks: legCurlRelatedLinks,
  },
  {
    title: "Leg Extension Machine",
    slug: "leg-extension-machine",
    path: "/workouts/leg-curl-machine/leg-extension-machine/",
    description: "Leg extension machine guide explaining muscles worked, setup, form, safety, and how it differs from leg curl machines.",
    summary: "The leg extension machine trains the quadriceps by extending the knees against resistance. It is different from a leg curl machine, which trains the hamstrings by bending the knees.",
    image: "https://images.pexels.com/photos/8933584/pexels-photo-8933584.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Gym equipment arranged in a modern fitness center",
    quickFacts: [
      "Leg extensions train the quadriceps, while leg curls train the hamstrings.",
      "A leg extension machine is not the same as a leg curl machine, even if they are sometimes built into one frame.",
      "Use controlled reps and avoid locking the knees hard at the top."
    ],
    sections: [
      { heading: "What is a leg extension machine?", body: "A leg extension machine is a strength machine for the quadriceps. You sit with your knees bent and a pad resting on the lower shins, then straighten your legs against resistance. The movement is knee extension, which is the opposite pattern of a leg curl." },
      { heading: "Leg extension machine muscles worked", body: "The main muscle worked is the quadriceps, including the rectus femoris, vastus lateralis, vastus medialis, and vastus intermedius. The quads help straighten the knee, support squat and lunge strength, and contribute to daily movements like standing up, climbing stairs, and walking." },
      { heading: "How to set up the leg extension machine", bullets: ["Adjust the back pad so your knees line up with the machine pivot.", "Set the shin pad so it rests on the lower shin, above the ankle.", "Keep your back and hips against the pad.", "Choose a weight that lets you pause briefly at the top without swinging."] },
      { heading: "How to perform leg extensions", body: "Straighten your knees smoothly until your legs are almost extended. Pause for one second, then lower the weight slowly. Avoid snapping the knees straight or using momentum. A controlled lowering phase keeps tension on the quads and helps protect the knees." },
      { heading: "Is leg curl machine same as leg extension?", body: "No. A leg curl machine trains knee flexion and the hamstrings. A leg extension machine trains knee extension and the quadriceps. Some gyms have a leg curl extension machine that combines both movements in one frame, but the exercises are still different." }
    ],
    faqs: [
      { q: "Is leg curl machine same as leg extension?", a: "No. A leg curl machine trains the hamstrings through knee flexion. A leg extension machine trains the quadriceps through knee extension." },
      { q: "What muscles does the leg extension machine work?", a: "It primarily works the quadriceps: rectus femoris, vastus lateralis, vastus medialis, and vastus intermedius." },
      { q: "How should I adjust the leg extension machine?", a: "Line your knees up with the machine pivot, place the shin pad above the ankles, and keep your back and hips firmly against the seat." },
      { q: "Are leg extensions bad for knees?", a: "Leg extensions are not automatically bad for knees. Use a comfortable range of motion, avoid heavy jerky reps, and reduce the load if you feel sharp pain." },
      { q: "Should I lock my knees on leg extensions?", a: "Do not forcefully lock or snap the knees. Extend smoothly, pause briefly, then lower under control." },
      { q: "Can I do leg extensions and leg curls in the same workout?", a: "Yes. They complement each other because leg extensions train quads and leg curls train hamstrings." }
    ],
    relatedLinks: legMachineRelatedLinks,
  },
  {
    title: "Leg Curl Extension Machine",
    slug: "leg-curl-extension-machine",
    path: "/workouts/leg-curl-machine/leg-curl-extension-machine/",
    description: "Leg curl extension machine hamstring machine guide for combo machines that train hamstrings and quadriceps.",
    summary: "A leg curl extension machine is a combination machine that lets you train hamstrings with leg curls and quadriceps with leg extensions. It is useful when gym space is limited or when you want to pair opposing leg movements.",
    image: "https://images.pexels.com/photos/17227607/pexels-photo-17227607.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Home gym space with strength training equipment",
    quickFacts: [
      "A leg curl extension machine combines hamstring curls and quad extensions in one frame.",
      "The curl side trains hamstrings; the extension side trains quadriceps.",
      "Adjust each side separately before starting the exercise."
    ],
    sections: [
      { heading: "What is a leg curl extension machine?", body: "A leg curl extension machine is a combo strength machine. One part lets you perform leg curls for the hamstrings, while the other part lets you perform leg extensions for the quadriceps. Some people search for this as a hamstring machine, quad machine, or leg curl leg extension machine." },
      { heading: "How to set up a leg curl extension machine", bullets: ["For leg curls, place the pad just above the ankles and keep the hips stable.", "For leg extensions, line your knees with the pivot and place the shin pad above the ankles.", "Adjust the seat or back pad so your joints feel aligned.", "Start with lighter weight on the movement that feels less familiar."] },
      { heading: "How to train hamstrings on the combo machine", body: "Use the leg curl portion to bend your knees and bring your heels toward your glutes. Keep your hips pressed into the pad, curl smoothly, pause briefly, and lower slowly. The hamstrings should feel like the main working muscles." },
      { heading: "How to train quads on the combo machine", body: "Use the leg extension portion to straighten your knees against resistance. Keep your back against the seat, extend without jerking, pause briefly near the top, and lower under control. Do not force a hard knee lockout." },
      { heading: "Best way to program it", body: "A simple setup is 2–4 sets of 8–15 reps for leg curls and 2–4 sets of 10–15 reps for leg extensions. You can alternate them as a superset, but keep the weight moderate if you want clean form on both movements." }
    ],
    faqs: [
      { q: "What is a leg curl extension machine?", a: "It is a combination machine that trains hamstrings with leg curls and quadriceps with leg extensions." },
      { q: "Is leg curl machine same as leg extension?", a: "No. Leg curls train hamstrings through knee flexion, while leg extensions train quadriceps through knee extension." },
      { q: "Which leg curl machine is best?", a: "The best leg curl machine is the one that fits your body, has adjustable pads, feels stable, and lets you control the full range of motion." },
      { q: "How to set up leg curl machine on a combo machine?", a: "Set the curl pad just above the ankles, align your knees with the pivot if possible, keep your hips stable, and start with light weight." },
      { q: "Can I superset leg curls and leg extensions?", a: "Yes. They are a good pair because one trains hamstrings and the other trains quadriceps. Keep the load controlled so form does not break down." },
      { q: "Is a leg curl extension machine good for beginners?", a: "Yes, if the pads adjust well and the weight is light. Beginners should learn each movement separately before using heavy loads." }
    ],
    relatedLinks: legMachineRelatedLinks,
  },
  {
    title: "Evolve Stehende Beinbeuger-Maschine Evolve Fitness UL-140 Größe",
    slug: "evolve-stehende-beinbeuger-maschine-evolve-fitness-ul-140-grosse",
    path: "/workouts/leg-curl-machine/evolve-stehende-beinbeuger-maschine-evolve-fitness-ul-140-grosse/",
    description: "Evolve Fitness UL-140 standing leg curl machine guide with size, setup, muscles worked, and training tips.",
    summary: "The Evolve Stehende Beinbeuger-Maschine Evolve Fitness UL-140 Größe refers to the Evolve Fitness UL-140 standing leg curl machine. It is designed for upright hamstring curls with stable handles and knee support.",
    image: "https://images.pexels.com/photos/32233887/pexels-photo-32233887.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Indoor gym with kettlebells and strength training equipment",
    quickFacts: [
      "Stehende Beinbeuger-Maschine means standing leg curl machine in German.",
      "The Evolve Fitness UL-140 is built for upright hamstring curl training.",
      "Good setup depends on handle position, knee pad contact, and controlled range of motion."
    ],
    sections: [
      { heading: "What is the Evolve Fitness UL-140 standing leg curl machine?", body: "The Evolve Stehende Beinbeuger-Maschine Evolve Fitness UL-140 Größe is a German product-style search term for the Evolve Fitness UL-140 standing leg curl machine. In English, it is a standing hamstring curl machine. You stand upright, hold the handles, place the working leg against the pad, and curl the heel toward the glutes." },
      { heading: "Size and fit considerations", body: "When people search for Größe, they usually want to know whether the machine fits their height and body size. The key fit checks are handle height, knee pad position, ankle pad position, and whether you can stand tall without leaning forward. If the machine feels too tall, too short, or unstable, choose another machine or reduce the weight." },
      { heading: "How to adjust the standing leg curl machine", bullets: ["Stand tall with your hips square and your working knee slightly bent.", "Hold the handles with both hands so your torso stays still.", "Place the pad against the lower leg or ankle according to the machine design.", "Start with a light load and move through a smooth range before adding weight."] },
      { heading: "How to perform the Evolve UL-140 hamstring curl", body: "Curl your heel toward your glute without swinging your torso. Pause briefly when the knee is bent, then lower slowly. The hamstrings should feel like the main working muscle. If your lower back, hips, or standing leg take over, the weight is probably too heavy." },
      { heading: "Why use a standing leg curl machine?", body: "Standing leg curls are useful for single-leg hamstring strength, balance, and variety. They can also help reveal left-right strength differences. Pair them with seated, lying, or prone leg curls if your gym has multiple options." }
    ],
    faqs: [
      { q: "What is Evolve Stehende Beinbeuger-Maschine Evolve Fitness UL-140 Größe?", a: "It refers to the Evolve Fitness UL-140 standing leg curl machine. Stehende Beinbeuger-Maschine means standing leg curl machine, and Größe refers to size or fit." },
      { q: "How to set up leg curl machine for standing curls?", a: "Stand tall, hold the handles, keep hips square, place the pad according to the machine design, and start with a weight you can control." },
      { q: "What muscles does the Evolve UL-140 train?", a: "It mainly trains the hamstrings. The glutes, calves, core, and standing leg help stabilize the movement." },
      { q: "Is leg curl machine same as leg extension?", a: "No. A leg curl trains hamstrings through knee flexion. A leg extension trains quadriceps through knee extension." },
      { q: "How many reps should I do on a standing leg curl machine?", a: "A good starting point is 2–4 sets of 8–15 reps per leg, using controlled reps and a slow lowering phase." },
      { q: "Why do I lean forward on the Evolve UL-140?", a: "Leaning usually means the weight is too heavy, your standing leg is tired, or your torso is not braced. Reduce the weight and focus on staying tall." }
    ],
    relatedLinks: [
      { label: "Standing Leg Curl Guide", href: "/workouts/leg-curl-machine/standing-leg-curl-guide/" },
      { label: "Lying Hamstring Curl", href: "/workouts/leg-curl-machine/lying-hamstring-curl/" },
      { label: "Leg Curl Machine", href: "/workouts/leg-curl-machine/" },
      { label: "Leg Curl Extension Machine", href: "/workouts/leg-curl-machine/leg-curl-extension-machine/" },
    ],
  },
  {
    title: "Lying Hamstring Curl",
    slug: "lying-hamstring-curl",
    path: "/workouts/leg-curl-machine/lying-hamstring-curl/",
    description: "Lying hamstring curl guide with setup, muscles worked, common mistakes, and beginner-friendly programming.",
    summary: "A lying hamstring curl is a classic leg curl machine exercise performed face down. It trains the hamstrings through knee flexion and is useful for building stronger, more balanced legs.",
    image: "https://images.pexels.com/photos/3916766/pexels-photo-3916766.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Dumbbells arranged on a gym rack for strength training",
    quickFacts: [
      "Lying hamstring curls are another name for prone or lying leg curls.",
      "The hamstrings are the main target, with calves and glutes helping stabilize.",
      "Slow lowering and stable hips matter more than using a very heavy weight."
    ],
    sections: [
      { heading: "What is a lying hamstring curl?", body: "A lying hamstring curl is performed on a leg curl machine while lying face down. You bend your knees to bring your heels toward your glutes, then lower the weight back down. It is one of the simplest ways to isolate the hamstrings." },
      { heading: "How to set up a lying hamstring curl", bullets: ["Adjust the ankle pad so it sits just above the ankles.", "Line your knees near the edge of the bench or machine pivot.", "Grip the handles and keep your hips pressed lightly into the bench.", "Choose a weight that allows a full range without lifting your hips."] },
      { heading: "How to perform lying hamstring curls", body: "Curl your heels toward your glutes in a smooth arc. Pause briefly at the top, squeeze the hamstrings, and lower the weight slowly. Do not let the weight stack drop, because the eccentric lowering phase is important for hamstring strength." },
      { heading: "Lying hamstring curl vs seated leg curl", body: "Both train hamstrings, but they feel different. Lying curls are stable and beginner-friendly. Seated curls often create a stronger stretch because the hips are more flexed. Neither is automatically better; choose the one you can perform with control." },
      { heading: "Programming for hamstring growth", body: "Start with 2–4 sets of 8–15 reps. Keep 1–3 reps in reserve on most sets, especially while learning. Add reps before weight, and only progress when your hips stay down and your knees feel comfortable." }
    ],
    faqs: [
      { q: "What is a leg curl machine?", a: "A leg curl machine is a strength machine that trains the hamstrings by making you bend your knees against resistance." },
      { q: "How to set up leg curl machine for lying hamstring curls?", a: "Place the pad just above the ankles, align your knees near the pivot, grip the handles, keep hips down, and start with light weight." },
      { q: "Are lying hamstring curls the same as prone leg curls?", a: "Yes. Lying hamstring curls are also called prone leg curls or lying leg curls." },
      { q: "Should I feel lying hamstring curls in my hamstrings?", a: "Yes. You should feel the back of the thighs working. If your lower back or hips take over, reduce the weight and slow the movement." },
      { q: "How often should I do lying hamstring curls?", a: "Most people can start with 1–3 hamstring sessions per week, depending on total leg training volume and recovery." },
      { q: "What is the best tempo for lying hamstring curls?", a: "Use a smooth curl, a short pause at the top, and a 2–3 second lowering phase." }
    ],
    relatedLinks: legCurlRelatedLinks,
  },
  {
    title: "Lying Leg Raises",
    slug: "lying-leg-raises",
    path: "/workouts/lying-leg-raises/",
    description: "Lying leg raises guide with form, muscles worked, common mistakes, variations, and FAQs for lower abs and core training.",
    summary: "Lying leg raises are a bodyweight core exercise performed on your back. They train the abs and hip flexors while teaching you to control your pelvis and lower back.",
    image: "https://images.pexels.com/photos/17210041/pexels-photo-17210041.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Person training in a modern gym",
    quickFacts: [
      "Lying leg raises mainly train the abs and hip flexors.",
      "Keep the lower back controlled instead of letting it arch as the legs lower.",
      "Bent-knee variations are a good beginner option."
    ],
    sections: [
      { heading: "What are lying leg raises?", body: "Lying leg raises are a core exercise where you lie on your back and lift your legs upward, then lower them under control. The abs work to keep the pelvis stable while the hip flexors help lift the legs. They are useful for building core control, but they should be performed slowly." },
      { heading: "How to do lying leg raises", bullets: ["Lie on your back with your legs straight or slightly bent.", "Place your hands under your hips or by your sides for support.", "Lift your legs until they are roughly perpendicular to the floor.", "Lower slowly without letting the lower back arch off the floor.", "Stop the set when you can no longer control the pelvis."] },
      { heading: "Muscles worked by lying leg raises", body: "The main muscles are the abdominal muscles, especially the lower portion of the rectus abdominis, plus the hip flexors. The deep core helps control pelvic position. The hamstrings are not the main target, so lying leg raises are different from lying hamstring curls." },
      { heading: "Common lying leg raise mistakes", bullets: ["Letting the lower back arch as the legs lower.", "Dropping the legs quickly instead of controlling the movement.", "Lifting the head or pulling on the neck.", "Going too low before you have enough core control."] },
      { heading: "Beginner and harder variations", body: "If straight-leg raises are too hard, bend the knees or lower only as far as you can without arching your back. To make the exercise harder, slow the lowering phase, use ankle weights, or add a reverse crunch at the top." }
    ],
    faqs: [
      { q: "What muscles do lying leg raises work?", a: "Lying leg raises mainly work the abs and hip flexors. The deep core helps control pelvic position while the legs move." },
      { q: "How do I do lying leg raises correctly?", a: "Lie on your back, lift your legs under control, then lower slowly without arching your lower back. Stop before your back starts to lift off the floor." },
      { q: "Are lying leg raises good for lower abs?", a: "Yes. They can help train the abs, especially when you keep the pelvis controlled and avoid swinging the legs." },
      { q: "Why does my lower back hurt during lying leg raises?", a: "Lower-back discomfort often means the legs are lowering too far, the abs are losing control, or the movement is too hard. Bend your knees or reduce the range of motion." },
      { q: "Are lying leg raises the same as lying hamstring curls?", a: "No. Lying leg raises are a core exercise performed on your back. Lying hamstring curls are a leg curl machine exercise that trains the hamstrings." },
      { q: "How many lying leg raises should I do?", a: "Start with 2–3 sets of 6–12 controlled reps. Quality matters more than count, so stop when your lower back starts to arch." }
    ],
    relatedLinks: [
      { label: "Leg Workouts", href: "/workouts/leg-workouts/" },
      { label: "Home Workouts", href: "/workouts/home-workouts/" },
      { label: "Lying Hamstring Curl", href: "/workouts/leg-curl-machine/lying-hamstring-curl/" },
      { label: "Leg Curl Machine", href: "/workouts/leg-curl-machine/" },
    ],
  },
];
