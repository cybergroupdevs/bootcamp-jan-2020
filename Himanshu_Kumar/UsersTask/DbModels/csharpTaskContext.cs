using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace UsersTask.DbModels
{
    public partial class csharpTaskContext : DbContext
    {
        public csharpTaskContext()
        {
        }

        public csharpTaskContext(DbContextOptions<csharpTaskContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Userdetails> Userdetails { get; set; }
        public IEnumerable<object> UserDetails { get; internal set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("server=.;database=csharpTask; trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Userdetails>(entity =>
            {
                entity.ToTable("userdetails");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Age).HasColumnName("age");

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .HasColumnName("gender")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Jobrole)
                    .HasColumnName("jobrole")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Namee)
                    .HasColumnName("namee")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Pass)
                    .HasColumnName("pass")
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });
        }
    }
}
