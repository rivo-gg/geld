FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy the correct standalone output
COPY --from=builder --chown=nextjs:nodejs /repo/apps/web/.next/standalone/apps/web/ ./
COPY --from=builder --chown=nextjs:nodejs /repo/apps/web/.next/static ./.next/static

# Copy production node_modules
COPY --from=builder --chown=nextjs:nodejs /repo/apps/web/.next/standalone/node_modules ./node_modules

USER nextjs

EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]