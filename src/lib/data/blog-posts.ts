import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "5-tips-for-a-healthy-winter",
    title: "5 Essential Tips for Staying Healthy This Winter",
    excerpt:
      "Winter brings unique health challenges. Learn how to boost your immune system and stay well during the colder months with these practical tips from our care team.",
    content: `Winter is here, and with it comes the familiar concerns about colds, flu, and seasonal affective disorder. But staying healthy during the colder months doesn't have to be complicated. Here are five evidence-based strategies to keep you and your family well this winter.

1. Prioritize Sleep
Your immune system works hardest while you sleep. Aim for 7-9 hours of quality sleep each night. Keep your bedroom cool, dark, and quiet, and maintain a consistent sleep schedule even on weekends.

2. Stay Physically Active
Cold weather can make it tempting to skip exercise, but physical activity is crucial for immune function. Indoor workouts, yoga, or even a brisk walk during daylight hours can make a significant difference.

3. Eat Immune-Boosting Foods
Focus on foods rich in vitamin C (citrus fruits, bell peppers), zinc (nuts, seeds, legumes), and antioxidants (berries, dark leafy greens). Bone broth and warm soups are also excellent choices for winter wellness.

4. Stay Hydrated
We tend to drink less water in winter because we don't feel as thirsty. But indoor heating dries out our mucous membranes, making us more susceptible to infections. Aim for at least 8 glasses of water daily.

5. Manage Stress
Chronic stress suppresses immune function. Incorporate stress-reduction techniques like meditation, deep breathing, or journaling into your daily routine. Even five minutes of mindfulness can make a difference.

Remember, if you do feel unwell, our team is here for you. Same-day appointments are available for acute concerns.`,
    author: "Dr. Sarah Mitchell",
    date: "2026-01-15",
    image:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80",
    category: "Wellness",
    readTime: "4 min read",
  },
  {
    slug: "understanding-preventive-care",
    title: "Understanding Preventive Care: What Screenings You Need and When",
    excerpt:
      "Preventive care saves lives. Here's a comprehensive guide to recommended health screenings by age group so you can stay ahead of potential health issues.",
    content: `Preventive care is the cornerstone of long-term health. By catching potential issues early — or preventing them altogether — you can avoid more serious health problems down the road. Here's what you need to know about recommended screenings based on your age.

For Adults 18-39:
- Annual physical examination
- Blood pressure screening (every 2 years if normal)
- Cholesterol screening (starting at age 20)
- Dental exam (every 6 months)
- Eye exam (every 2 years)

For Adults 40-49:
- All of the above, plus:
- Diabetes screening (every 3 years starting at 45)
- Mammogram (women, starting at 40)
- Colorectal cancer screening (starting at 45)

For Adults 50+:
- All of the above, plus:
- Bone density screening (women, starting at 65)
- Shingles vaccine (starting at 50)
- Pneumococcal vaccine (starting at 65)

At Maple Healthcare, we make preventive care easy and accessible. Our wellness visits are comprehensive, unhurried, and tailored to your individual needs. We'll help you keep track of which screenings are due and ensure nothing falls through the cracks.`,
    author: "Dr. James Chen",
    date: "2025-12-20",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    category: "Preventive Care",
    readTime: "5 min read",
  },
  {
    slug: "telehealth-what-to-expect",
    title: "Telehealth 101: What to Expect During Your Virtual Visit",
    excerpt:
      "New to telehealth? Our guide walks you through how virtual visits work, what you'll need, and how to prepare for a seamless appointment.",
    content: `Telehealth has transformed healthcare delivery, making it easier than ever to connect with your provider from the comfort of home. If you're new to virtual visits, here's everything you need to know.

What You'll Need:
- A smartphone, tablet, or computer with a camera and microphone
- A stable internet connection
- A quiet, well-lit space
- Your insurance information

Before Your Visit:
- Complete any pre-visit questionnaires sent via email
- Have your medications nearby
- Write down any questions or concerns beforehand
- Test your camera and microphone

During Your Visit:
- Join the video call at your scheduled time
- Your provider will greet you and confirm your identity
- Discuss your health concerns just as you would in person
- Your provider may ask you to demonstrate symptoms (e.g., range of motion)
- Prescriptions can be sent electronically to your pharmacy

After Your Visit:
- Follow-up instructions will be sent via your patient portal
- Schedule any necessary follow-up appointments
- Lab or imaging orders can be fulfilled at our office

Telehealth is ideal for follow-up appointments, medication management, minor illness evaluation, and mental health consultations. For emergencies or physical examinations requiring hands-on assessment, an in-office visit may be recommended.`,
    author: "Dr. Emily Rodriguez",
    date: "2025-11-10",
    image:
      "https://images.unsplash.com/photo-1598257006458-087169a1f08b?w=800&q=80",
    category: "Telehealth",
    readTime: "3 min read",
  },
  {
    slug: "managing-chronic-conditions",
    title: "Living Well with Chronic Conditions: A Practical Guide",
    excerpt:
      "Managing a chronic condition doesn't mean sacrificing quality of life. Discover strategies for thriving while living with diabetes, hypertension, or other long-term health needs.",
    content: `A chronic condition diagnosis can feel overwhelming, but with the right approach and support system, you can absolutely live a full, active life. Here's our practical guide to managing chronic conditions effectively.

Build Your Care Team
Your primary care physician should be the quarterback of your healthcare team. At Maple Healthcare, we coordinate with specialists, nutritionists, and therapists to ensure every aspect of your health is addressed.

Understand Your Condition
Knowledge is power. Take time to learn about your condition from reliable sources. Our providers are happy to explain test results, treatment options, and what to expect in plain language.

Create a Daily Routine
Consistency is key for managing chronic conditions. Build medication schedules, exercise routines, and meal planning into your daily life. Small, sustainable changes beat dramatic overhauls every time.

Track Your Progress
Use a notebook, app, or our patient portal to track symptoms, blood pressure readings, blood sugar levels, or other relevant metrics. This data helps your provider make informed decisions about your care.

Lean on Your Support System
You don't have to do this alone. Family, friends, support groups, and your healthcare team are all resources available to you. Never hesitate to reach out when you need help.

At Maple Healthcare, we take a proactive, partnership-based approach to chronic condition management. Regular follow-ups, medication reviews, and lifestyle counseling are all part of our comprehensive care plans.`,
    author: "Dr. Sarah Mitchell",
    date: "2025-10-05",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    category: "Chronic Care",
    readTime: "6 min read",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
