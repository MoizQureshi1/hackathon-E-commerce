// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// const isProtectedRoute = createRouteMatcher(['/cart(.*)', '/orderconform(.*)', '/shop(.onSubmit)', '/forum(.*)'])

// export default clerkMiddleware(async (auth, req) => {
//   const { userId, redirectToSignIn } = await auth()

//   if (!userId && isProtectedRoute(req)) {
//     // Add custom logic to run before redirecting

//     return redirectToSignIn()
//   }
// })

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
    
//   ],
// }

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Define the routes that need authentication
const isProtectedRoute = createRouteMatcher(['/cart(.*)', '/orderconform(.*)', '/shop(.onSubmit)', '/forum(.*)'])

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth()

  // If the user is not authenticated and the route is protected
  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn()
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)', // Skip Next.js internals
    '/(api|trpc)(.*)', // Always run for API routes
    '/sanity/', // Exclude routes under `/sanity/`
  ],
}
